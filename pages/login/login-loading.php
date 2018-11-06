<?php
  require_once ("../db/dbConnect.php");
  $username = $_POST["old-username"];
  $password = $_POST["old-password"];
  //$remember = $_POST["remember"];

  $sql = "SELECT * FROM `user` WHERE username = '".$username."';";
  $result = $connection->query($sql);

  if($result->num_rows == 0){
    header('Location: ../login/login.html?username=wrong');
    //header('Location: '.$_SERVER['HTTP_REFERER']);
  }else{
    //later
    if(isset($_POST["new-remember"])){
      setcookie("username",$_POST["username"],86400);
      setcookie("password",$_POST["password"],86400);
    }
    $row = $result->fetch_assoc();
    if($row["password"] === $password){
      echo '<style>body{height:100%;width:100%;background-image: linear-gradient(#00CCFF, #0066FF);}</style>';
      echo '<div style="margin-left: 50px; margin-top: 50px; margin-right: 50px; background-color:#CCFFFF;"><div style="text-align:center;"><h3 style="color:#339966;">Welcome back, '.$_POST["old-username"].'!<br>The pages will redirect to homepage after 5 second.</h3></div>';
      echo '<div style="text-align:center;"><a href="../index.html" style="color:grey"><h5>__If the pages doesnot redirect, please click here__</h5></a></div></div>';
      echo "<script>setTimeout(\"location.href = '../index.html';\",5000);</script>";
    }else{
      header('Location: ../login/login.html?password=wrong');
    }
  }
    //header('Location: '.$_SERVER['HTTP_REFERER']);
  //INSERT INTO user (username,password,emailAddress)VALUES("Tom","12","Tom12@gmail.com");
?>
