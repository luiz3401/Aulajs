<?php

    $host = "banco.db";
    $user = "";
    $pass = "";

    $db = new PDO("sqlite:banco.db");

    $sql = "select * from contatos order by nome";

    $retorno = $db->query($sql);

    $valores = $retorno->fetchAll(PDO::FETCH_ASSOC);

    

    $contatos[0] ["nome"] = "Mario Tilico";
    $contatos[0] ["email"] = "tilico@nois.com.";
    $contatos[0] ["telefone"] = "(41)955446699";
    $contatos[0] ["cidade"] = "Curitola";  

    $contatos[1] ["nome"] = "Cafuringa";
    $contatos[1] ["email"] = "cafuringa@nois.com.";
    $contatos[1] ["telefone"] = "(41)988771122";
    $contatos[1] ["cidade"] = "Curitola"; 
    
    echo json_encode($contatos);


    
?>    