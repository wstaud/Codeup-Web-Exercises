<?PHP

require __DIR__ . "/db_connect.php";

echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";
?>
