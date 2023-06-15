const { Router } = require("express");

const TagsControllers = require("../controllers/TagsController")

const tagsRoutes = Router();

const tagsController = new TagsControllers();

tagsRoutes.get("/:user_id", tagsController.index);


module.exports = tagsRoutes