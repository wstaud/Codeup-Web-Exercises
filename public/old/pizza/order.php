<!DOCTYPE html>
<?php
	var_dump($_POST);
	var_dump($_GET);
?>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale =1.0">
		<title>Order Pizza</title>
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
		<div class="flow" id="order">
			<img id="custom_pizza" src="img/custom_pizza.png">
			
			<form>
				<h2>Size and Crust</h2>
				<label for="size">Size:</label>
				<select id="size" name="size">
					<option>Small</option>
					<option>Medium</option>
					<option>Large</option>
					<option>America Size</option>
				</select>

				<label for="crust">Crust:</label>
				<select name="crust" id="crust">
					<option>Original</option>
					<option>Pan</option>
					<option>Thin</option>
				</select>

				<label for="bake">Bake:</label>
				<select id="bake" name="bake">
					<option>Normal</option>
					<option>Well Done</option>
				</select>

				<h2>Sauce and Cheese</h2>
				<label for="sauce">Sauce:</label>
				<select id="sauce" name="sauce">
					<option>Normal</option>
					<option>BBQ</option>
					<option>Hot</option>
					<option>Molten Steel</option>
				</select>

				<label for="sauce_amount">How much sauce:</label>
				<select id="sauce_amount" name="sauce_amount">
					<option>Normal</option>
					<option>Next to none</option>
					<option>CAKE IT</option>
				</select>

				<label for="cheese">Cheese:</label>
				<select id="cheese" name="cheese">
					<option>Normal</option>
					<option>Light</option>
					<option>None</option>
				</select>

				<p>Meat Toppings:</p>
				<label><input type="checkbox" id="meat_top1" name="meat_top[]" value="Beef">Beef</label>
				<label><input type="checkbox" id="meat_top2" name="meat_top[]" value="Pepperoni">Pepperoni</label>
				<label><input type="checkbox" id="meat_top3" name="meat_top[]" value="Pulled_pork">Pulled Pork</label>
				<label><input type="checkbox" id="meat_top4" name="meat_top[]" value="Brisket">Brisket</label>
				<label><input type="checkbox" id="meat_top5" name="meat_top[]" value="Sausage">Sausage</label>
				<label><input type="checkbox" id="meat_top6" name="meat_top[]" value="Bacon">Bacon</label>

				<p>Veggies:</p>
				<h1>PFTTTTTTT</h1>

				<button type="submit">Submit</button>
			</form>

		</div>


		
	</body>
</html>