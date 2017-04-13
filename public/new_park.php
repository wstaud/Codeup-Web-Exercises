<?PHP
require __DIR__ . "/../db_connect.php";
require_once "../Input.php";


function inputsAreValid() {
    if (!empty($_POST['name']) &&
        !empty($_POST['location']) &&
        is_numeric($_POST['area_in_acres']) &&
        !empty($_POST['date_established']) &&
        !empty($_POST['description'])) {
        
        return true;

    }else{
        return false;
    }
}

function insertPark($dbc) {
    $insert = ('INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (:name, :location, :date_established, :area_in_acres, :description)');

    $stmt = $dbc->prepare($insert);
    $stmt->bindValue(':name', $_POST['name'], PDO::PARAM_STR);
    $stmt->bindValue(':location', $_POST['location'], PDO::PARAM_STR);
    $stmt->bindValue(':date_established', $_POST['date_established'], PDO::PARAM_STR);
    $stmt->bindValue(':area_in_acres', $_POST['area_in_acres'], PDO::PARAM_INT);
    $stmt->bindValue(':description', $_POST['description'], PDO::PARAM_STR);
    
    $stmt->execute();
}

function pageController($dbc) {
    $data = [];

    if (!empty($_POST) && inputsAreValid()) {
        insertPark($dbc); 
    } 

   return $data; 
}

extract(pageController($dbc));

?>
<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>National Parks</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="/css/park.css">
</head>

<body>
<div class="container-fluid" id="coverContainer">
        <div class="col" id="cover">
            <div class="centerAbsolute">
                <h1 id="coverText">National Forest</h1>
                <h1 id="coverSubText">Archive</h1>
            </div>
        </div>

    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/national_parks.php">NFA</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/national_parks.php">Home</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/new_park.php">Add Park<span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    
    <div class="container">
        <h1 class="row">Add a Park</h1>
        <form method="POST" action="/new_park.php">
            <div class="form-group row">
                <label for="nameTextBox">Park Name:</label>
                <input class="form-control" type="text" id="nameTextBox" name="name"></input>
            </div>
            <div class="form-group row">
                <label for="locationTextBox">Location:</label>
                <input class="form-control" type="text" id="locationTextBox" name="location"></input>
            </div>
            <div class="form-group row">
                <label class="col-md-1" for="dateTextBox">Date:</label>
                <input class="form-control col-md-4" type="date" id="dateTextBox" name="date_established"></input>
                <label class="col-md-2" for="areaTextBox">Area in Acres:</label>
                <input class="form-control col-md-5" type="text" id="areaTextBox" name="area_in_acres"></input>
            </div>
            <div class="form-group row">
                <label for="descriptionTextBox">Description:</label>
                <textarea class="form-control" id="descriptionTextBox" rows="5" name="description"></textarea>
            </div>
            <button type="submit" class="btn btn-outline-primary">Submit</button>
        </form>
    </div>

    



<script src="/js/jquery-3.1.1.min.js"</script>
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
</body>


</html>
