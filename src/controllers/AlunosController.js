const { v4: uuidv4 } = require('uuid');

const sqliteConnection = require("../database/sqlite")

/**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * delete - DELETE para remover um registro.
   */

class AlunosController {

    async index(request, response) {

        const database = await sqliteConnection();

        const alunos = await database.all("SELECT * FROM alunos")

        console.log(alunos)

        return response.json(alunos);
    }

    async create(request, response) {

        const { nome, email } = request.body

        const uuid = uuidv4();

        const aluno = { uuid, nome, email }

        const database = await sqliteConnection();

        const checkAlunoExists = await database.get("SELECT * FROM alunos WHERE email = (?)", [email])

        if (checkAlunoExists) {
            return response.status(400).json({ message: "USUARIO JA EXISTE" });
        }

        await database.run("INSERT INTO alunos (nome,email,uuid) VALUES (? ,? ,?)", [nome, email, uuid])

        return response.status(201).json();

    }

    async update(request, response) {
        const { nome, email } = request.body

        const { id } = request.params;

        console.log(id)

        const database = await sqliteConnection();

        const aluno = await database.get("SELECT * FROM alunos WHERE uuid = (?)", [id])

        if (!aluno) {
            return response.status(400).json({ message: "USUARIO NAO ENCONTRADO" });
        }

        const alunoWithUpdatedEmail = await database.get("SELECT * FROM alunos WHERE email = (?)", [email])

        if (alunoWithUpdatedEmail && alunoWithUpdatedEmail.uuid !== aluno.uuid) {
            return response.status(400).json({ message: "EMAIL JA EM USO" });


        }

        aluno.nome = nome
        aluno.email = email

        await database.run(`
            UPDATE alunos SET
            nome = ?,
            email = ?
            WHERE uuid = ?`,
            [aluno.nome, aluno.email, id]
        )

        return response.json()

    }


    async delete(request, response) {

        const { id } = request.params;

        console.log(id)

        const database = await sqliteConnection();

        const aluno = await database.get("SELECT * FROM alunos WHERE uuid = (?)", [id])

        if (!aluno) {
            return response.status(400).json({ message: "USUARIO NAO ENCONTRADO" });
        }

        await database.run(`
            DELETE FROM alunos WHERE uuid = ?`, [id]
        )

        return response.json()

    }



}

module.exports = AlunosController;