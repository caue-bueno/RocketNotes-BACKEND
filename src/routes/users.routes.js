const { Router } = require("express");
const UsersControllers = require("../controllers/UsersController")
const usersRoutes = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersController = new UsersControllers();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);


module.exports = usersRoutes