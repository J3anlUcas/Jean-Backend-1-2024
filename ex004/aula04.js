const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method}]${req.url}`);
    next();
});

app.get("/", (req, res) => { res.send("Bem-vindo ao nosso servidor Express!") });

app.get("/status", (req, res) => {
    const teste = new Date().toLocaleString();
    res.json({ status: 'ok', time: teste });
});

app.get("/echo/:menssagem", (req, res) => {
    var { menssagem } = req.params;
    return res.json({ menssagem });
});


app.listen(3004, () => {
    console.log("Servidor iniciado na porta 3004!");
});
