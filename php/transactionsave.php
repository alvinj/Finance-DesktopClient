<?php

# a pass-thru script to call my Play server-side code.

# the POST data we receive from Sencha (is not JSON)
$id = $_POST['id'];
$symbol = $_POST['symbol'];
$ttype = $_POST['ttype'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];
$datetime = $_POST['datetime'];
$notes = $_POST['notes'];

# data needs to be POSTed to the Play url as JSON.
# (code from http://www.lornajane.net/posts/2011/posting-json-data-with-php-curl)
$data = array(
    "id" => "$id", 
    "symbol" => "$symbol", 
    "ttype" => "$ttype", 
    "price" => "$price", 
    "quantity" => "$quantity", 
    "datetime" => "$datetime", 
    "notes" => "$notes"
);                                                                    
$data_string = json_encode($data);                                                                                   
 
# send data to the play server as json
$ch = curl_init('http://localhost:8080/transactions/add');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))                                                                       
);                     
curl_setopt($ch, CURLOPT_TIMEOUT, 5);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);

//execute post
$result = curl_exec($ch);

//close connection
curl_close($ch);

echo $result;

?>
