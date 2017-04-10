<?PHP
require_once "Log.php";

session_start();
$sessionId = session_id();



class Auth {
    public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';

    public static function attempt($username, $password) {
        if ($username === "guest" && password_verify($password, Auth::$password)) { 
            $log = new Log();
            $log->info("User $username logged in.");
            $_SESSION['LOGGED_IN_USER'] = "guest";
            return true;
        }else{
            $log = new Log();
            $log->error("User $username failed to log in!");
            return false;
        }
    }
    public static function check() {
        if(isset($_SESSION['LOGGED_IN_USER'])) {
            return true;
        }else{
            return false;
        }
    }
    
    public static function user() {
        if(Auth::check() === true) {
            return $_SESSION['LOGGED_IN_USER']; 
        }else {
            return null;
        } 
    }

    public static function logout() {
        $log = new Log();
        $log->info("User $username logged out.");
        session_unset();
        session_regenerate_id();
        session_destroy();
        session_start();
    }
}

?>
