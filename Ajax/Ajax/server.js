// servidor HTTP

var http = require("http");

http
.createServer(function(req, res){

    console.log("ola");

    res.writeHead(404)

    res.write("oi");
    res.end();

})
.listen(8080);