const express = require('express');
const routes = express.Router();
const {snippetsAdd,snippetsDisplay,snippets_delete} = require("../Controller/snippetscontroller");



routes.post("/snippets/snippetsAdd",snippetsAdd);
routes.get("/snippets/snippets_Display",snippetsDisplay)
routes.delete("/snippets/snippets_Delete/:_id",snippets_delete)

module.exports = routes;