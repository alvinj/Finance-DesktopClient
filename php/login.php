<?php

session_start();

// username and password sent from form 
$username = $_POST['user']; 
$password = $_POST['password']; 

$result = array();

# success
$_SESSION['authenticated'] = "yes";
$_SESSION['username'] = $username;

$result['success'] = true;
$result['msg'] = 'User authenticated!';

//JSON encoding
echo json_encode($result);
?>
