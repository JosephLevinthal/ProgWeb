<?php

session_start();

if($_POST["username"]=="demo" && $_POST["senha"]=="demo"){
    $_SESSION["logando"]=true;
}

if(!isset($_SESSION["logado"])) {
    header("Location:login.php");
}

?>

Visível se o usuário está logado
<a href="logout.php">Sair</a>
