<?PHP
session_start();

$sessionId = session_id();



function clearSession()
{
    // clear $_SESSION array
    session_unset();

    // delete session data on the server
    session_destroy();

    // ensure client is sent a new session cookie
    session_regenerate_id();

    // start a new session - session_destroy() ended our previous session so
    // if we want to store any new data in $_SESSION we must start a new one
    session_start();
}


clearSession();

header("Location: http://codeup.dev/login.php");

?>


<html>
<head>
</head>

<body>
</body>

<html>


