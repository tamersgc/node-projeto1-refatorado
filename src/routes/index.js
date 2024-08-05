const { Router }  = require ("express");

const alunosRouter = require("./alunos.routes")

const routes = Router();

routes.use("/alunos", alunosRouter)

module.exports = routes;