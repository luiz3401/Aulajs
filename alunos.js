$(document).ready(function(){
    $("#btn-cadastrar").click(function(){

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var periodo = $("#periodo").val();
        var sexo = $("#input[name=sexo]:checked").val();
        

        var linha = "<tr>"
            +"<td>" + nome + "</td>"
            +"<td>" + email +"</td>"
            +"<td>"+ telefone +"</td>";
            +"<td>Masculino</td>";
            +"<td>" + periodo +"</td>";
            +"</tr>";

        $("#alunos").append(linha);    

    }); //fim do click

}); //fim do ready



function cadastra()
{
    var tbody = document.getElementById("alunos");
    var nome = document.getElementById("nome").value;

    if(nome == "")
    {
        alert("O campo nome é Obrigatório");
        return false;
    }


    
    
    tbody.innerHTML += linha;
   
    
   
}