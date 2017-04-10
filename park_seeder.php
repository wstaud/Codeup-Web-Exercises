<?PHP
require __DIR__ . "/db_connect.php";

$query = "INSERT INTO national_parks (name, location, date_established, area_in_acres)
VALUES ('Yellowstone National Park', 'Wyoming', '1872-03-01', '2221440'),
       ('Yosemite National Park', 'California', '1890-10-01', '748160'),
        ('Grand Canyon National Park', 'Arizona', '1919-02-26', '1217280'),
        ('Zion National Park', 'Utah', '1919-11-19', '146560'),
        ('Great Smoky Mountains National Park', 'North America', '1934-06-15', '522240'),
        ('Acadia National Park', 'Maine', '1916-07-08', '49052'),
        ('Grand Teton National Park', 'Wyoming', '1929-02-26', '31000'),
        ('Glacier National Park', 'Montana', '1910-05-11', '1013120'),
        ('Bryce Canyon National Park', 'Utah', '1928-02-25', '35835')";
 

$dbc->exec("TRUNCATE national_parks");
$dbc->exec($query);

?>
