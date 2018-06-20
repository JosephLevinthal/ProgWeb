<!DOCTYPE html>
<html>
<body>
	<?php
		echo "Nome:" . $_POST["nome"] . "<br/> E-mail:" . $_POST["email"] . "<br/> Website:" . $_POST["website"] . "<br/> Mensagem:" . $_POST["mensagem"] . "<br/>";
		
		try{
			$conn = new PDO("mysql:host=localhost;dbname=formulario","root","icomp123");
			$conn->exec("set names utf8");

			$stmt = $conn->prepare("INSERT INTO formulario_usuario (id, nome, email, website, mensagem) VALUES (NULL, :nome, :email, :website, :mensagem)");

			$stmt->bindValue(":nome", $_POST["nome"]);
			$stmt->bindValue(":email", $_POST["email"]);
			$stmt->bindValue(":website", $_POST["website"]);
			$stmt->bindValue(":mensagem", $_POST["mensagem"]);

			$stmt->execute();

		} catch(PDOException $e){
			echo $e->getMessage();
		}
	?>
</body>
</html>