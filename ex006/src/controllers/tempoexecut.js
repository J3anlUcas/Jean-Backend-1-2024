var date = new Date();

exports.newdate = ((req, res) => {
    var hora = date.getHours().toFixed(2);
    var minutos = date.getMinutes().toFixed(2);
    var segundos = date.getSeconds().toFixed(2);
    var milesimos = date.getMilliseconds().toFixed(3);
    res.json({
        hora, minutos, segundos, milesimos
    })
})