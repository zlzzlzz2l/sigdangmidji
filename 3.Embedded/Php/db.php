<?php 

  $conn = mysqli_connect( '192.168.0.25', 'wHOG2F5VzTZVNSrb', 'CidGrMR7u4U1KyzP', 'cf_3aa69a4e_e698_4569_b365_bbd0626fbe8e', '3306'); 
  
  if (mysqli_connect_errno()) { 
    echo "Failed to connect to MySQL: " .mysqli_connect_error(); 
  } 
    
  $jb_sql = "SELECT * FROM Restaurant_Info;"; //쿼리 작성 
    
  $result = mysqli_query($conn, $jb_sql); //쿼리 결과 담기 
    
  while($row = mysqli_fetch_array($result)){
    echo '<p>' . $row['RID'] . $row['Name'] . $row['Table_Amount'] . $row['Authorization'] . $row['x'] . $row['y'] . '</p>';
  }
?>
