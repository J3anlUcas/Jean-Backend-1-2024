const express = require('express');
const app = express();

app.get("/:strNome",(req, res)=>{
    var {strNome} = req.params;
    return res.send(`Dever de Casa 02 - Aluno: ${strNome.toUpperCase()}`);
});
app.get("/about?sobre", (req,res)=>{
    let {strTexto} = req.query;
    
});
app.listen(3000,()=>{
    console.log("Servidor iniciado na porta 3000!");
});