<?php

#
# NOTE: THIS CODE DOES NOT WORK (YET). I'M GOING TO SET UP THE 
# APACHE PROXY PASS STUFF NOW AND JUST GET IT OVER WITH.
#

# the POST data we receive from Sencha (is not JSON)
$username = $_POST['username'];
$password = $_POST['password'];

error_log("=== saveStock.php called ===");
error_log("username = '" . $username . "'");
error_log("password = '" . $password . "'");

# data needs to be POSTed to the Play url as JSON.
# (code from http://www.lornajane.net/posts/2011/posting-json-data-with-php-curl)
$data = array(
    "username" => "$username", 
    "password" => "$password"
);                                                                    
$data_string = json_encode($data);                                                                                   
 
# send data to the play server as json
$ch = curl_init('http://localhost:8080/login');
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

