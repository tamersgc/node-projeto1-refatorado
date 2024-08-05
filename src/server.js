const express = require("express")

//const database = require("./database/sqlite")
const migrationsRun = require("./database/sqlite/migrations")

const routes = require("./routes")

const cors =  require("cors")

migrationsRun();

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

//database()

const PORT = 3333

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))