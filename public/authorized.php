<?PHP
session_start();

$sessionId = session_id();

if(isset($_SESSION['username']) && $_SESSION['username'] == "guest") {
    $username = $_SESSION['username'];
}else{
    header("Location: http://codeup.dev/login.php");
    exit();
}


?>

<html>
<head>
    <title>Authorized</title>
</head>

<body>
<h1>Authorized</h1>
<h2>Hello: <?= escape($username) ?></h2>
<a href="logout.php" class="button">Logout</a>
</body>
