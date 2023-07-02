const knex = require('knex');
const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/DiskStorage');

class UserAvatarController {
  async update (request, response) {
    const user_id = await request.user_id;
    const avatarFilename = request.file.filename;

    const diskStorage = new DiskStorage();
    console.log(user_id);
    const user = await knex("users")
    .where({ id: user_id }).first();

    if (!user) {
      throw new AppError("Somente usuários autenticados podem mudar de avatar", 401);
    }

    if(user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFilename);
    user.avatar = filename;

    await knex("users").update(user).where({ id: user.id});

    return response.json(user);
  }
}

module.exports = UserAvatarController