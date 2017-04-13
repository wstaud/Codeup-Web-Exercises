<?PHP

require_once "../Auth.php";
require_once "../Input.php";

if(!isset($_SESSION)) { 
    session_start(); 
}
$sessionId = session_id();


function pageController() {
    $data = [];
    $data['message'] = "";

    if(Input::has("username")) {
        $data['message'] = checkAuth();
    }
    if(Auth::check()){
        header("Location: http://codeup.dev/authorized.php"); 
        die();
    }
return $data;
}

function checkAuth() {
    $username = Input::get("username");
    $password = Input::get("password");

    if (Auth::attempt($username, $password)) {
        header("Location: http://codeup.dev/authorized.php");
        exit(); 
    }else{
        $message = "Incorrect login!";
        return $message;
    } 
}

extract(pageController());
?>


<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="/css/simplegrid-min.css">
    <link rel="stylesheet" type="text/css" href="/css/login.css">
</head>
    <title>Login</title>
<body>
</body>
    <div class="loginContainer">
        <img id="headImg" src="/img/head.png">
        <img id="handImg" src="/img/hand.png">
        <img id="logoImg" src="/img/logo.png">
        <form method="POST">
            <label>username</label>
            <input class="barInput" type="text" name="username"><br>
            <label>password</label>
            <input class="barInput" type="password" name="password"><br>
            <button class="btn-outline-gray form-btn" type="submit">Submit</button>
        </form>
        <p id="error"><?= $message ?></p>
    </div> 
</html>
