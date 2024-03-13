const express = require("express");
const route = express();


route.get("/", (req, res) => {
    res.send("Sua aplicação rodou!");
});

module.exports = route;