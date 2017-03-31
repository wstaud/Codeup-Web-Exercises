<?PHP
require_once "../Input.php";
require_once "../Auth.php";

session_start();

$sessionId = session_id();


Auth::logout();


header("Location: http://codeup.dev/login.php");

?>


<html>
<head>
</head>

<body>
</body>

<html>


