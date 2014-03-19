<?php

$symbol = $_POST['symbol']; 

# hit the database to get the research urls for the stock symbol
$urls = array(
	"URL 1",
	"URL 2",
	"URL 3"
);

echo json_encode($urls);

?>
