<!DOCTYPE html>
<?php
	var_dump($_POST);
	var_dump($_GET);
?>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale =1.0">
		<title>Register</title>
		<link rel="stylesheet" type="text/css" href="css/site.css">
	</head>
	<!-- Nav Bar universal -->
	<nav class="flow">
		<ul id="navbar">
			<li><a href="home.php">Home</a></li>
			<li><a href="order.php">Order</a></li>
			<li><a href="register.php">Register</a></li>
			<li><a href="contact.php">Contact</a></li>
		</ul>

	</nav>

	<body>
		<div class="flow" id="home">
			<form action="register.php" method="POST" enctype="multipart/form-data">
				<h1>Create Account:</h1>
				<p>
					<label for="first_name">First name:</label>
					<input id="first_name" name="first_name" type="text" placeholder="first name" required>
				</p>
					<label for="last_name">Last name:</label>
					<input id="last_name" name="last_name" type="text" placeholder="last name" required>
				<p>
					<label for="username">Username:</label>
					<input id="username" name="username" type="text" placeholder="username" required autofocus>
				</p>
				<p>
					<label for="password">Password:</label>
					<input id="password" name="password" type="password" placeholder="password" required>
				</p>
				<p>
					<label for="newsletter">Sign me up for the newsletter!</label>
					<input id="newsletter" name="newsletter" type="checkbox" checked>
				</p>
				<p>
					<label for="upload_img">Upload Profile Photo:</label>
					<input type="file" name="fileToUpload" id="fileToUpload">
				</p>
				<p>
					<input type="submit" value="Create Profile" name="submit">
				</p>

			</form>
		</div>


		
	</body>
</html>