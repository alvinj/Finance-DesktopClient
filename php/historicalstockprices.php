<?php

header('Content-type: text/html');
echo json_encode(
  array(
    array('symbol' => 'AAPL', 'price' => '525.00'),
    array('symbol' => 'GOOG', 'price' => '600.00'),
    array('symbol' => 'TSLA', 'price' => '220.00')
  )
);

?>


