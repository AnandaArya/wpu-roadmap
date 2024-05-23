<?php
session_start();

include "koneksi.php";

if(isset($_POST["login"])) {
	$username = $_POST["username"];
	$password = $_POST["password"];

	$result = mysqli_query($conn, "SELECT * FROM user WHERE username = '$username' AND password = md5('$password')");
	$data = $result->fetch_array();
	// cek username
	if(mysqli_num_rows($result) == 1) {
			$_SESSION['owner'] = $data['owner'];
			$_SESSION['login'] = true;
			header("Location: index.php");
			exit;
	} else {
		echo "<script>alert('username /  password salah');</script>";
	}

	$error = true;

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.css">
	<style> 
		body {
			background-color: rgba(0,0,0, 0.7)
		}

		.card {
			margin-top : 200px;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-4">
				<div class="card p-3">
					<h2>LOGIN</h2>
					<form action="login.php" method="POST">
						<div class="form-group">
							<label for="username">USERNAME</label>
							<input type="text" class="form-control" id="username" name="username">
						</div>
						<div class="form-group">
							<label for="password">PASSWORD</label>
							<input type="password" class="form-control" id="password" name="password">
						</div>
						<div class="form-grup">
							<input type="checkbox" onclick="showPassword()"> Show Password
						</div>

						<button type="submit" name="login" class="btn btn-primary my-3 py-2 px-3">LOGIN</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<script>
		function showPassword() {
			let x = document.getElementById('password');
			if (x.type === "password") {
				x.type = "text";
			} else {
				x.type = "password";
			}
		}
	</script>
	
</body>
</html>