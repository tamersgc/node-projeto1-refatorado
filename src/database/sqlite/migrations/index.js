const sqliteConnection = require("../../sqlite")
const createAlunos = require("./createAlunos")

async function migrationsRun(){
    const schemas = [createAlunos].join('');
    sqliteConnection()
    .then(db => db.exec(schemas) )
    .catch(error => console.log(error))
}

module.exports = migrationsRun;