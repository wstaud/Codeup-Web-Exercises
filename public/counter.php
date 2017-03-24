<?PHP

function pageController() {
    $data = array();
    $data['count'] =  numCount();

    return $data; 
}


function numCount() {
    $count = 0;
    if ($_GET['val'] == "up") {
        $count += 1;         
    }else{
        $count -= 1;
    }
    return $count;
}

extract(pageController());

?>

<html>
<head>
    <title>Counter</title>
</head>

<body>
<h1><?= $count ?></h1>
    <a href="counter.php?val=up">up</a>
    <a href="counter.php?val=down">down</a>
</body?

</html?
