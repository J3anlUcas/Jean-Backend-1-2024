const express = require('express');
const app = express();
const port = 3000

app.get("/about", (req, res) => {
    res.send("Dados da página ABOUT e suas derivações");
});

app.get("/:strNome", (req, res) => {
    var { strNome } = req.params;
    res.send(`Dever de Casa 02 - Aluno: ${strNome.toUpperCase()}`);
});

app.get("/search/:id", (req, res) => {
    var {id} = req.params;
    var { nome, email } = req.query;

    return res.json({
        id:id,
        nome: nome,
        email: email
    })
});

app.listen(port, () => {
    console.log("Servidor iniciado na porta 3000!");
});