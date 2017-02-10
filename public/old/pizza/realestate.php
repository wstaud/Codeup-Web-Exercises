<!DOCTYPE html>
<?php
	var_dump($_POST);
	var_dump($_GET);
?>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale =1.0">
		<title>Search Real Estate</title>
		
	</head>
	

	<body>
		<div class="flow" id="home">
			<form method="GET" action="realestate.php">
				<h1>Searh Real Estate</h1>
				<h4>Rent or Buy?</h4>
				<label>
					<input type="radio" name="q1" value="rent">Rent
				</label>
				<label>
					<input type="radio" name="q1" value="buy">Buy
				</label>
				<h4>Number of Bedrooms?</h4>
				<label>
					<input type="radio" name="q2" value="1">1+
				</label>
				<label>
					<input type="radio" name="q2" value="2">2+
				</label>
				<label>
					<input type="radio" name="q2" value="3">3+
				</label>
				<label>
					<input type="radio" name="q2" value="4">4+
				</label>
				<h4>More:</h4>
				<p>
					<select id="more" name="more[]" multiple>
					<option>Air Conditoned</option>
					<option>Solar Powered</option>
					<option>Fireplace</option>
					<option>Pool</option>
					<option>Garage</option>
					<option>Basement</option>
				</select>
				</p>
				<h4>Min Price?</h4>
					<p>
						<input id="price" name="price" type="text" placeholder="price">
					</p>
				<p>
					<button type="submit">Submit</button>
				</p>
			</form>
			
		</div>


		
	</body>
</html>