const express = require("express")

const { v4: uuidv4 } = require('uuid');

const app = express()

app.use(express.json())

const alunos = []

app.get("/alunos", (request, response) => {

    return response.json(alunos);
})

app.post("/alunos", (request, response) => {

    const { nome, email } = request.body

    const id = uuidv4();

    const aluno = { id, nome, email }

    alunos.push(aluno)

    return response.json(aluno);
})

app.delete("/alunos/:id", (request, response) => {

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

app.put("/alunos/:id", (request, response) => {

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

const PORT = 3333

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))