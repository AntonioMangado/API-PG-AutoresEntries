const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authorsApi.controllers");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/', authorsApiController.getAuthors);
authorsApiRouter.post("/", authorsApiController.createAuthors);
authorsApiRouter.put("/", authorsApiController.updateAuthor);
authorsApiRouter.delete("/", authorsApiController.deleteAuthor);

// authorsApiRouter.post('/', authorsApiController.createEntry);
// authorsApiRouter.put("/", authorsApiController.updateEntry);
// authorsApiRouter.delete("/", authorsApiController.deleteEntry);

module.exports = authorsApiRouter;