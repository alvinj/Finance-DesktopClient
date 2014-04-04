<?php

# a pass-thru script to call my Play server-side code

# the POST data we receive from Sencha (is not JSON).
# TODO in a multiuser production application it would be dangerous to do this
# without the user id as well (verifying the session, etc.).
$id = $_POST['id'];

# my play api requires this to be a 'get' query of this form
$ch = curl_init("http://localhost:8080/research_links/$id/delete");

# build the request
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 5);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);

# execute the GET, close the connection, and return the result
$result = curl_exec($ch);
curl_close($ch);
echo $result;

?>
