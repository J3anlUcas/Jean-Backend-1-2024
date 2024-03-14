const express = require("express");
const route = express.Router();
const criarArquivo = require("./controllers/CriarArquivoEntrada");
//const tempodeExecucao = require("./controllers/tempoexecut");

route.get("/entrada/:nome/:numX", criarArquivo.paginaPrincipal);


module.exports = route
