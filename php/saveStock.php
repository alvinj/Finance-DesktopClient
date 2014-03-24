<?php

session_start();

$id = $_POST['id']; 
$symbol = $_POST['symbol'];
$companyName = $_POST['companyName'];

#error_log("=== saveStock.php called ===");
#error_log("id          = '" . $id . "'");
#error_log("symbol      = '" . $symbol . "'");
#error_log("companyName = '" . $companyName . "'");

# error log output looks like this:
# id          = ''
# symbol      = 'FOO'
# companyName = 'bar'

if ($id == ""){
	$id = 0;
}

# TODO implement the 'save' process here
if ($id == 0) { //create
	$id = 100;
} else { //update
	$id = 101;
}

# send a reply back to the client
header('Content-type: text/html');
echo json_encode(array(
	"success" => true,
	"msg" => '',
	"id" => $id
));

?>



