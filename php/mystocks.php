<?php

/*
$result = array(
  array(1, "AAPL", "Apple"),
  array(2, "GOOG", "Google"),
  array(3, "KKD", "Krispy Kreme")
);

echo json_encode($result);
*/

error_log("*** My Stocks PHP Script called ***", 0);


echo '{ "data": [ {"id": 1, "symbol": "AAPL", "companyName": "Apple"}, {"id": 2, "symbol": "GOOG", "companyName": "Google"}] }';

?>
