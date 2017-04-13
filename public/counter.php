<?PHP

function pageController() {
    $data = array();
    $data['count'] = 0; 
    
    if(isset($_GET['count'])){
        $data['count'] = $_GET['count'];
    }else{
        $count = 0;
    }
    return $data;
}

extract(pageController());
?>


<html>
<head>
    <title>Counter</title>
</head>

<body>
    <h1>Count: <?= $count ?></h1>
    <a href="counter.php?count=<?= $count + 1?>">up</a>
    <a href="counter.php?count=<?= $count - 1?>">down</a>
</body>

</html>
