function cadastra()
{
    var tbody = document.getElementById("alunos");
    var nome = document.getElementById("nome");

    if(nome == "")
    {
        alert("O campo nome é Obrigatório");
        return false;
    }


    var linha = "<tr>"
    +"<td>" + nome.value + "</td>"
    +"<td>" + email.value + "</td>"
    +"<td>" + telefone + "</td>"
    
    tbody.innerHTML += linha;
   
    //limpa o input    
    nome.value = "";
    email.value = "";
    telefone.value = "";
   
}