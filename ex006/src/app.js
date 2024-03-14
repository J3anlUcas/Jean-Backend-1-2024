const PORTA = 2000

const express = require("express");
const app = express();
const routes = require('./routes')

app.use(routes);

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}!`);
});