<?PHP

define('DB_HOST', 'localhost');
define('DB_NAME', 'employees');
define('DB_USER', 'vagrant');
define('DB_PASS', 'vagrant');

try {
$dbc = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, 
    DB_USER, 
    DB_PASS); 

$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


} catch (PDOException $e) {
    echo $e->getMessage(), PHP_EOL;
}
?>
