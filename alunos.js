$(document).ready(function(){
    $("#btn-cadastrar").click(function(){

        var vetor_periodo = ["", "Manhã", "Tarde", "Noite"];

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var periodo = $("#periodo").val();
        var sexo = $("input[name=sexo]:checked").val();

        $("#msg-alert").hide();

        if (nome.trim().length < 2)
        {
            $("#msg-alert").html("O campo nome é obrigatório");
            $("#msg-alert").fadeIn();
            $("#nome").focus();
            $("#nome").addClass("erro");
            return false;
        }

        if (email == "")
        {
            $("#msg-alert").html("O campo email é obrigatório");
            $("#msg-alert").fadeIn();
            $("#email").focus();
            $("#email").addClass("erro");
            var errado = false;
        } else
        {

            var email_regex = /^[0-9a-z\.\_\-]*@[0-9a-z.]*$/gm;
            if (email.search(email_regex) == -1)
            {
                $("#msg-alert").html ("O formato do email é inválido");
                $("#msg-alert").fadeIn();
                $("email").focus();
                return false;
            }

        }

        if (telefone == "")
        {
            $("#msg-alert").html("O campo telefone é obrigatório");
            $("#msg-alert").fadeIn();
            $("#telefone").focus();
            $("#telefone").addClass("erro");
            return false;
        } else {
            
            var fone_regex = /^\([0-9][0-9]\)[0-9]{4,5}-[0-9]{4}$/gm;
            if (telefone.search(fone_regex) == -1)
            {
                $("#msg-alert").html("O formato do telefone é inválido");
                $("#msg-alert").fadeIn();
                $("#telefone").focus();
                return false;

            }
        }

        if (sexo == undefined)
        {
            $("#msg-alert").html("O campo sexo é obrigatório");
            $("#msg-alert").fadeIn();
            $("#sexo").addClass("erro");
            return false;
        }

        if (periodo == 0)
        {
            $("#msg-alert").html("O campo periodo é obrigatório");
            $("#msg-alert").fadeIn();
            $("#periodo").focus();
            $("#periodo").addClass("erro");
            return false;
        }

        var sexo_rotulo = (sexo == "M")? "Masculino" : "Feminino";
        

        var linha = "<tr>"
            +"<td>" + nome + "</td>"
            +"<td>" + email +"</td>"
            +"<td>"+ telefone +"</td>";
            +"<td>" + sexo_rotulo + "</td>";
            +"<td>" + vetor_periodo[periodo] +"</td>";
            +'<td><span class="btn-del">[X]</span></td>';
            +"</tr>";

        $("#alunos").append(linha);    

    }); //fim do click
    //$("#telefone").keydown(function(ev){
    //    console.log(ev);

      //  if (ev.keycode.search(/[0-9()-]/g) != -1 || ev.keycode == 8 || ev.keycode == 9)
        //{
          //  return true;
        //} else {

          //  return false    

  //      }       

    //});

    // mascara para telefone
    $("#telefone").mask("(00)90000-0000");
    //$(".btn-del").click(function(){
        //console.log(this);
       // $(this).parent().parent().remove(); 

    });
    $("#alunos").on("click", ".btn-del", function(){

        $(this).parent().parent().remove();
    });

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