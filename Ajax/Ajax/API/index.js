console.log("Servidor")

var express = require('express');

var app = express();

app.get('view engine', 'ejs');



app.get("/", function(req, res){

    res.send("ola");        

});

app.get("/contato", function(req, res){

    res.send("<h1>Contato</h1>");  

    console.log (req.query);
    console.log (req.ip);
    console.log (req.path);

});    

app.post("/contato", function(req, res){
    res.send

});

app.listen(3000); 