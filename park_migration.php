<?php
require __DIR__ . "/db_connect.php";

$createNationalParks = 'CREATE TABLE national_parks (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    location  VARCHAR(200) NOT NULL,
    date_established DATE NOT NULL,
    area_in_acres DOUBLE NOT NULL,
    PRIMARY KEY (id)
)';


$dbc->exec("DROP TABLE IF EXISTS national_parks;");

$dbc->exec($createNationalParks);

?>
