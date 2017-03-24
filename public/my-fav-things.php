<?PHP

function pageController() {
    $data = array();
    $data['favThings'] = ['My Motorcycle', 'Anime', 'Manga', 'Linux', 'Programming', 'Food', 'Programming', 'Visual Design'];

    return $data;
}


extract(pageController());
?>


<!DOCTYPE HTML>

<html>
<head>
    <title>My Fav Things</title>
    <link rel="stylesheet" type="text/css" href="/css/fav-things.css">

</head>

<body>
    <h1>Table of my Favoriate Things</h1>
    <table> 
        <tr>
            <th>ID</th>
            <th>Fav Things</th>
        </tr>
        <?PHP foreach($favThings as $favThing => $value) : 
                $favThing += 1; 
                echo "<tr>
                        <th>$favThing</th>
                        <th>$value</th>
                    </tr>";
        endforeach?>
</table>            
    
</body>
</html>
