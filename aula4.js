// aula sobre funções

var nome = "Luiz";
var idade = 33;

function imprime()
{
    var idade = 10;
    console.log(nome);
    console.log(idade);

    function leiaidade()
    {
        var idade = 67; 
    }

    leiaidade();
}

var n1 =10;
var n2 = 5;

//função com escopo fechado
function soma(n1, n2)
{
    var valor = n1 +n2;
    return valor;
}


//Função Anonima
var sub = function(n1, n2)
{
    return n1 - n2;
}

//ligar o painel
function letreiro()
{
    var letreiro = document.getElementById("letreiro")
    var letra = letreiro.innerHTML.charAt(0);

    var novo = letreiro.innerHTML.slice(1) + letra;

    letreiro.innerHTML = novo;
   
}
var id;

function ligar()
{
    id = window.setInterval(letreiro,200);
}

function desligar()
{
    window.clearInterval(id)
}


