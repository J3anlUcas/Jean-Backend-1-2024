var serv = require("./server/server");
var port = 2000;
serv.listen(port, () => {
    console.log(`Servidor na porta ${port}!`);
});
