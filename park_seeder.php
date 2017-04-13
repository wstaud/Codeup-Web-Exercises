<?PHP
require __DIR__ . "/db_connect.php";

$parks = [
    ['name' => 'Yellowstone National Park', 'location' => 'Wyoming', 'date_established' => '1872-03-01', 'area_in_acres' => '2221440', 'description' => 'Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It\'s also home to hundreds of animal species, including bears, wolves, bison, elk and antelope.'],
    
    ['name' => 'Grand Canyon National Park', 'location' => 'Arizona', 'date_established' => '1919-02-26', 'area_in_acres' => '1217280', 'description' => 'The Grand Canyon in Arizona is a natural formation distinguished by layered bands of red rock, revealing millions of years of geological history in cross-section. Vast in scale, the canyon averages 10 miles across and a mile deep along its 277-mile length. Much of the area is a national park, with Colorado River white-water rapids and sweeping vistas.'],

    ['name' => 'Zion National Park', 'location' => 'Utah', 'date_established' => '1919-11-19', 'area_in_acres' => '146560', 'description' => 'Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs. Zion Canyon Scenic Drive cuts through its main section, leading to forest trails along the Virgin River. The river flows to the Emerald Pools, which have waterfalls and a hanging garden. Also along the river, partly through deep chasms, is Zion Narrows wading hike.'],

    ['name' => 'Great Smoky Mountains National Park', 'location' => 'North America', 'date_established' => '1934-06-15', 'area_in_acres' => '522240', 'description' => 'Great Smoky Mountains National Park straddles the border between North Carolina and Tennessee. The sprawling landscape encompasses lush forests and an abundance of wildflowers that bloom year-round. Streams, rivers and waterfalls appear along hiking routes that include a segment of the Appalachian Trail. An observation tower tops Clingmans Dome, the highest peak, offering scenic views of the mist-covered mountains.'],

    ['name' => 'Acadia National Park', 'location' => 'Maine', 'date_established' => '1916-07-08', 'area_in_acres' => '49052', 'description' => 'Acadia National Park is a 47,000-acre Atlantic coast recreation area primarily on Maine\'s Mount Desert Island. Its landscape is marked by woodland, rocky beaches and glacier-scoured granite peaks such as Cadillac Mountain, the highest point on the United States’ East Coast. Among the wildlife are moose, bear, whales and seabirds. The bayside town of Bar Harbor, with restaurants and shops, is a popular gateway.'],

    ['name' => 'Grand Teton National Park', 'location' => 'Wyoming', 'date_established' => '1929-02-26', 'area_in_acres' => '31000', 'description' => 'Grand Teton National Park is in the northwest of the U.S state of Wyoming. It encompasses the Teton mountain range, the 4,000-meter Grand Teton peak, and the valley known as Jackson Hole. It’s a popular destination in summer for mountaineering, hiking, backcountry camping and fishing, linked to nearby Yellowstone National Park by the John D. Rockefeller, Jr. Memorial Parkway.'],

    ['name' => 'Glacier National Park', 'location' => 'Montana', 'date_established' => '1910-05-11', 'area_in_acres' => '1013120', 'description' => 'Glacier National Park is a 1,583-sq.-mi. wilderness area in Montana\'s Rocky Mountains, with glacier-carved peaks and valleys running to the Canadian border. It\'s crossed by the mountainous Going-to-the-Sun Road. Among more than 700 miles of hiking trails, it has a route to photogenic Hidden Lake. Other activities include backpacking, cycling and camping. Diverse wildlife ranges from mountain goats to grizzly bears.'],

    ['name' => 'Bryce Canyon National Park', 'location' => 'Utah', 'date_established' => '1928-02-25', 'area_in_acres' => '35835', 'description' => 'Bryce Canyon National Park, a sprawling reserve in southern Utah, is known for crimson-colored hoodoos, which are spire-shaped rock formations. The park’s main road leads past the expansive Bryce Amphitheater, a hoodoo-filled depression lying below the Rim Trail hiking path. It has overlooks at Sunrise Point, Sunset Point, Inspiration Point and Bryce Point. Prime viewing times are around sunup and sundown.']
];


$stmt = $dbc->prepare('INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (:name, :location, :date_established, :area_in_acres, :description)');

$dbc->exec("TRUNCATE national_parks");

foreach ($parks as $park) {
    $stmt->bindValue(':name', $park['name'], PDO::PARAM_STR);
    $stmt->bindValue(':location', $park['location'], PDO::PARAM_STR);
    $stmt->bindValue(':date_established', $park['date_established'], PDO::PARAM_STR);
    $stmt->bindValue(':area_in_acres', $park['area_in_acres'], PDO::PARAM_INT);
    $stmt->bindValue(':description', $park['description'], PDO::PARAM_STR);

    $stmt->execute();
}

?>
