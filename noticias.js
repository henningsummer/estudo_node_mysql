var http = require('http');

var server = http.createServer(function(req, res) {

    var categoria = req.url;

    if (categoria == '/tecnologia') {

        res.end("<html><body>Oi estamos funcionando TECH.</body></html>");
    } else if (categoria == '/moda') {

        res.end("<html><body>Oi estamos funcionando VESTE.</body></html>");
    } else if (categoria == '/beleza') {

        res.end("<html><body>Oi estamos funcionando BELA.</body></html>");
    } else {
        res.end("<html><body>Oi estamos funcionando.</body></html>");
    }
});

server.listen(3000);