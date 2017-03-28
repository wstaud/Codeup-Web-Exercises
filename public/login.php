<?PHP

session_start();

$sessionId = session_id();



if(isset($_POST['username'])){
    checkAuth();
}

if(isset($_SESSION['username']) && $_SESSION['username'] == "guest") {
    header("Location: http://codeup.dev/authorized.php"); 
}

function checkAuth() {
    if($_POST["username"] === "guest" && $_POST["password"] === "password"){
        $_SESSION['username'] = "guest";
        header("Location: http://codeup.dev/authorized.php"); 
        exit(); 
    }else{
        echo "Incorrect login!"; 
    }
}
?>

<html>
<head>
</head>
    <title>Login</title>
<body>
</body>
    <form method="POST">
        <label>username</label>
        <input type="text" name="username"><br>
        <label>password</label>
        <input type="password" name="password"><br>
        <input type="submit">
</html>
