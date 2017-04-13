<?PHP
require_once "../Auth.php";
require_once "../Input.php";

if(!isset($_SESSION)) { 
    session_start(); 
}

$sessionId = session_id();

if(Auth::check()) {
    $username = Auth::user(); 
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
<h2>Hello: <?= $username ?></h2>
<a href="logout.php" class="button">Logout</a>
</body>
