<?php	
	$link = mysqli_connect("www.myapp.com","root","","login");
	
	$login = $_POST['login'];
	$password = $_POST['password'];
	$login = stripcslashes($login);
	$password = stripcslashes($password);
	$login = mysqli_real_escape_string($link,$login);
	$password = mysqli_real_escape_string($link,$password);
	
	$result = mysqli_query($link,"select * from users where login = '$login' and password = '$password'")
				or die ("Failed to query database".mysqli_error());
	$row = mysqli_fetch_array($result);
	if ($row['login'] == $login && $row['password'] == $password ) {
		echo "Welcome " .$row['login'];
		echo '<!doctype html> <html lang="en"> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" type="text/css" href = "style.css">
		</head> <body> <div class="wrapper"> <div class ="formTitle"> <h3>Change article content</h3> </div> <div class = "adminPanel">
        <form class="admin" id="adminForm"  method="POST"> <div class="row"> <label for="place">Place</label> <input  class="inputs" id="place" type="text" name="Place">	
        </div> <div class="row"> <label for="description">Description</label> <input class="inputs" id="description" type="text" name="description">
        </div> <div class="row"> <button class="save" type="submit" name="action">Save changes</button> </div> </div> </body> </html>';
	} else {
		echo "Failed to login.";  
	}
	
?>