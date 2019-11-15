<html>
<body>
<?php
require("database.php"); 
//if($_GET['link'] == 'Link1')
$clipID = $_GET['link'];
$videoURL = "http://localhost/Alpha/video.php?link=". $clipID;
	
$thisVideo = mysqli_query($conn, "select * from movieclips where clipID = '".$clipID."'") or die(mysqli_error());  		


	$i = 0;

	while ($row = mysqli_fetch_array($thisVideo))
	{
 	  $clipName = $row["ClipName"];
	  $clipTopic = $row["ClipTopic"];
	  $clipURL = $row["ClipURL"];
	  $thumbURL = $row["ThumbURL"];
	  $comments = $row["Comments"];
	$i++;
	}

	mysqli_free_result($thisVideo);	

?>


<!DOCTYPE html>
<html>
<head>
<title>PixelBoogie - <?= $clipName ?></title>
<link href="https://fonts.googleapis.com/css?family=Berkshire+Swash&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
<link href="video.css" rel="stylesheet">
</head>
<body id="myBody">
<div id="myTitle"><h1><?= $clipName ?></h1></div>
<div id="vidDiv">
	<video 	src="<?= $clipURL ?>" autoplay='true' controls='true' type="video/mp4"></video>
</div>

<div id="clipInfo">
<p>
<?php
	echo ($comments . "</p>");

?></div></body></html>