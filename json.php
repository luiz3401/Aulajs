<?php

$nome = "Luiz";

class Carro {

    public $cor = "Preto";
    public $marca = "Ferrari";
    private $ligar = false;

    
    public function ligar()
    {
    $this->ligado = true;
    }
}
$novo = new Carro();
var_dump ($novo);

?>