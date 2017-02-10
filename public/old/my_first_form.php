<?php 
var_dump($_POST);
var_dump($_GET);
?>
<html>
	<head>
		<title>My First PHP Form</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
	<h1>My First Form (Really Second)</h1>
		<!-- Username and password POST -->
		<!-- Form action is where the request goes -->
		<!-- For in label and ID in input needs to be the same (name should also be the same for good practice) -->
		<!-- Place holder can put non-value text in input -->
		<!-- required attribute will make input required -->
		<!-- autofocus attribute puts cursor to input -->
		<h2>User Login</h2>
		<form method="POST" action="my_first_form.php">
			<p>
				<label for="username">Username</label>
				<input id="username" name="username" type="text" placeholder="username" required autofocus>
			</p>
			<p>
				<label for="password">Password</label>
				<input id="password" name="password" type="password" placeholder="password">
			</p>
			<p>
				<!-- 1.2.1 Requirment  name-->
				<input name="submit_button" type="submit">
			</p>
		</form>
		<!-- Search Reddit -->
		<!-- reddit.com/search leads up to ? for, ID, Name lead up to = -->
		<h2>Search Reddit</h2>
		<form method="GET" action="http://reddit.com/search">
			<p>
				<label for="q">Search Reddit</label>
				<input id="q" name="q" type="text">
			</p>
			<p>
				<!-- 1.2.1 Requirment  value-->
				<input value="Search" type="submit">
			</p>	
		</form>
		<!-- Text Area Form / Email Form-->
		<h2>Compose Email</h2>
		<form method="POST" action="my_first_form.php">
			<p>
				<label for="to">To:</label>
				<input id="to" name="to"></input>
			</p>
			<p>
				<label for="from">From:</label>
				<input id="from" name="from"></input>
			</p>

				<label for="subject">Subject:</label>
				<input id="subject" name="subject" placeholder="Subject"></input>
			</p>
			<p>
				<label for="email">Body:</label>
				<textarea id="email" name="email" col="80" rows="10" placeholder="Compose Email"></textarea>
			</p>
			<p>
				<label for="send_copy_check">Send copy to sent folder?</label>
				<input id="send_copy_check" name="send_copy_check" type="checkbox" checked>
			</p>
			<p>
				<!-- 1.2.1 Requirment button-->
				<button type="submit">Submit</button>
			</p>
		</form>
		<h2>Multiple Choice Test</h2>
		<form>
			<p>
				<label for="fav_anime">Favorite Anime:</label>
				<input name="fav_anime" value="steins" type="radio">Steins;Gate</input>
				<input name="fav_anime" value="higurashi" type="radio">Higurashi</input>
				<input name="fav_anime" value="brotherhood" type="radio">Fullmetal Archimest: Brotherhood</input>
				<input name="fav_anime" value="gochiusa" type="radio">GhochiUSA</input>
			</p>
			<p>
				<label for="fav_motorcylce">Favorite Motorcycle Make:</label>
				<input name="fav_motorcycle" value="harley" type="radio">Harley Davidson</input>
				<input name="fav_motorcycle" value="indian" type="radio">Indian</input>
				<input name="fav_motorcycle" value="honda" type="radio">Honda</input>
				<input name="fav_motorcycle" value="other" type="radio">Other</input>
			</p>
			<p>
				<button type="submit">Submit</button>
			</p>
		</form>
	</body>
</html>