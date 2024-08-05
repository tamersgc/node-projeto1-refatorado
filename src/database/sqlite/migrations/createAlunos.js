const createAlunos = `
CREATE TABLE IF NOT EXISTS alunos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR,
  email VARCHAR,
  uuid VARCHAR
)
`;

module.exports = createAlunos;