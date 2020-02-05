
//variaveis BD
var listacidades = ["Curtiba", "Iguape", "Santos", "Bombinhas"];


function imprime()
{
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    for(var i = 0; i< listacidades.length; i++)
    {
    lista.innerHTML += "<li>"+ listacidades[i] +"</li>";
    }
    
}
function adicionar()
{
        var input = document.getElementById("texto");
        var cidade = input.value

        if (listacidades.indexOf(cidade) == -1)
        {
            listacidades.push(input.value);
            imprime();
            input.valeu = "";   
        } else {
            alert("cidade já cadastrada!");
        }
        
        input.value = "";
        
}
    
function ordena(ord)
{
    listacidades.sort();
    if(ord == "desc")
    {
    listacidades.reverse();
    imprime();
    }
}

var cresc = true;
function alterna()
{
    listacidades.sort();
    if (cresc == false)
    {
        listacidades.reverse();
    }
    imprime()
    // inversão lógica
    cresc = !cresc;
}