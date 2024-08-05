const { Router }  = require ("express");

const AlunosController = require("../controllers/AlunosController")

const alunosRouter = Router();

const alunosController = new AlunosController();

alunosRouter.get("/", alunosController.index)

alunosRouter.post("/", alunosController.create)

alunosRouter.put("/:id", alunosController.update)

alunosRouter.delete("/:id", alunosController.delete)



/*
alunosRouter.delete("/:id", (request, response) => {

    const { id } = request.params

    console.log(id)

    const alunoIndex = alunos.findIndex(aluno => aluno.id == id)

    console.log(alunoIndex)

    if (alunoIndex != -1) {
        const aluno = alunos[alunoIndex]
        alunos.splice(alunoIndex, 1)
        return response.json(aluno);
    }

    return response.status(404).json({ message: "User not found!" });
})


alunosRouter.put("/:id", (request, response) => {

    const { id } = request.params
    const { nome, email } = request.body

    console.log(id)

    const alunoIndex = alunos.findIndex(aluno => aluno.id == id)

    console.log(alunoIndex)

    if (alunoIndex != -1) {

        if (nome)
            alunos[alunoIndex].nome = nome
        if (email)
            alunos[alunoIndex].email = email

        const aluno = alunos[alunoIndex]

        return response.json(aluno);

    }

    return response.status(404).json({ message: "User not found!" });
})
*/

module.exports = alunosRouter;