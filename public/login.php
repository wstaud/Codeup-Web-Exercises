<?PHP

require_once "../Auth.php";
require_once "../Input.php";

if(!isset($_SESSION)) { 
    session_start(); 
} 


$sessionId = session_id();



if(Input::has("username")) {
    checkAuth();
}

if(Auth::check()){
    header("Location: http://codeup.dev/authorized.php"); 
}

function checkAuth() {
    $username = Input::get("username");
    $password = Input::get("password");

    if (Auth::attempt($username, $password)) {
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
