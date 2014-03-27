<?php

# send a json reply back to the sencha client
header('Content-type: text/html');
echo json_encode(array(
    "id" => 1,
    "symbol" => "AAPL",
    "type" => "B",
    "quantity" => 100,
    "price" => 525.00,
    "datetime" => "Wed, 3/26/2014 22:15:00",
    "notes" => "I bought at this price because ..."
));

?>


