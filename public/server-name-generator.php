<?PHP

    function pageController() {
        $data = array();
        $data['serverName'] = serverName();

        return $data;
    }
    function randomSelection($array) {
        $count = sizeof($array);
        $randomNum = rand(0, $count - 1);
        return $array[$randomNum];
    }

    function serverName() {

        $adjectives = ['Agreeable', 'Brave', 'Calm', 'Delightful', 'Eager', 'Faithful', 'Gentle', 'Happy', 'Jolly', 'Kind', 'Lively', 'Nice', 'Proud']; 
        $nouns = ['People', 'History', 'Art', 'World', 'Family', 'Government', 'Health', 'System', 'Computer', 'Music', 'Nation', 'Road', 'Keyboard'];

        $serverNameString = randomSelection($adjectives) . " " . randomSelection($nouns); 
        
        return $serverNameString;
    }

    extract(pageController());
?>

<!DOCTYPE html>

<html>
<head>
    <title>Server Name Generator</title>
</head>
<body>

    <?= "<h1>Server Name: " . $serverName . "</h1>";?>

</body>

</html>
