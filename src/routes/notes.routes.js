const { Router } = require("express");

const NotesControllers = require("../controllers/NotesController")

const notesRoutes = Router();

const notesController = new NotesControllers();

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);

module.exports = notesRoutes