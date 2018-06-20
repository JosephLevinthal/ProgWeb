<?php
	session_start();
	if(isset($_SESSION["start"])){
		header("Location: exercicio_php_3.html");
		exit();
	}

	echo "
	<!DOCTYPE html>
	<html>
	<body>
		<form id=cadastro method=post action=exercicio_php_verificacao_3.php>
		<fieldset>
				<legend>Login</legend>
						Nome <input type=text name=nome id=nome/><br />
						Senha <input type=password name=senha id=senha/><br />
		</fieldset>

		<input type=submit name=submit value=Logar />
		
	</body>
	</html>";
?>