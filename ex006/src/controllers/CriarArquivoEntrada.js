const fs = require("fs");
const path = require("path");


exports.paginaPrincipal = ((req, res) => {

    var { nome, numX } = req.params;
    var vetNumeros = [];

    for (let i = 0; i < numX; i++) {
        vetNumeros.push(parseInt(((Math.random() * 9999.5))));
    };

    let i, j, temp;
    for (i = numX - 1; i >= 0; i--) {
        for (j = 0; j < i; j++) {
            if (vetNumeros[j] > vetNumeros[j + 1]) {
                temp = vetNumeros[j];
                vetNumeros[j] = vetNumeros[j + 1];
                vetNumeros[j + 1] = temp;
            };
        };
    };

    vetNumeros = JSON.stringify(vetNumeros);

    fs.writeFile(path.join(__dirname + "/" + nome), vetNumeros,
        () => { console.log(`Pasta (/${nome}), criada com sucesso!`); });

    res.json({
        "Nome do arquivo": nome,
        "Conteúdo": vetNumeros
        
    });
    
});