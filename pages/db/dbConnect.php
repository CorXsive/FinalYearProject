<?php
  $ip = "localhost";
  $username = "%";
  $password = "";
  //testing
  $db = "test";

  $connection = new mysqli($ip,$username,$password,$db);

  if($connection->connect_error){
    die("Connection Failed: ".$connection->connect_error);
  }
?>
