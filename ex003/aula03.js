const express = require('express');
const app = express();
app.use(express.json());

var vetMeuvetor = [];

app.post("/contatos", function (req, res) {
  var { nome, cep, email } = req.body;
  vetMeuvetor.push(req.body);

  return res.json({
    nome: nome,
    CEP: cep,
    Email: email
  });
});
app.get("/cadastro", (req, res) => {
  res.json(vetMeuvetor);
});
app.get("/search/:nome", (req, res) => {
  var { nome } = req.params;
  const foundUser = vetMeuvetor.find((user) => user.nome == nome);
  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ message: 'Não há a pessoa na base de dados.' });
  }
});
app.listen(3004, () => {
  console.log("Servidor iniciado na porta 3004!");
});