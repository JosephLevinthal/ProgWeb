<?php
	if($_POST["nome"] == "demo" && $_POST["senha"] == "demo"){
		session_start();
		$_SESSION["start"] = date("H:i");
		header("Location: exercicio_php_3.html");
	}
?>
