// exemplo para nodejs

var nome = "Luiz";
var idade = 36;
var cores =["azul", "preto", "branco"];
var soma = function(n1, n2){
    return n1 + n2;
}

/*
 carro

 atributos
 cor
 marca

 metódos
 andar
 ligar
 frenar
*/

var carro = {
    cor : "Azul",
    marca: "fiat",
    ligado: false,
    motor:{
        potencia: 50
    },    

    andar: function(){
        console.log("anda logo, lata velha");

    },

    ligar: function(){
        this.ligado = true;
        this.andar();
        
    }



};

// definição de objeto
var Carro = function(){
    this.cor = "preto";
    this.marca = "ford";

    this.ligar = function(){

        console.log("liga logo, optimus prime");

    }


}

var carro2 = new Carro();

// definição de classe
// ES6 - ES2015

class Caminhao{

    constructor(){
        this.cor = "preto";
        this.marca = "Scania";
    }

    ligar(){
        console.log("Finalmente ligou");
        this.ligado = true;
    }
}

var carreta = new Caminhao();