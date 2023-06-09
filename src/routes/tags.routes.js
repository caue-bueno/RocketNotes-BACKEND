const { Router } = require("express");

const TagsControllers = require("../controllers/TagsController")

const tagsRoutes = Router();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsController = new TagsControllers();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);


module.exports = tagsRoutes