<?php 
require("database.php"); 
$sql = "SELECT * FROM movieclips ORDER BY Rank";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
echo
"<!DOCTYPE html>
<html>
<head>
<title>PixelBoogie - Showcase Site</title>
<link href=\"https://fonts.googleapis.com/css?family=Berkshire+Swash&display=swap\" rel=\"stylesheet\">
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js'></script>
<link rel='stylesheet' type='text/css' href='indexStyle.css'>
</head>
<body id='myBody'>
<div id='myTitle'>
    <h1>Streams Showcase</h1>
</div>
<body>
<div class='content'>
<div class='flex-container'>";
$i = 1;
while($row = mysqli_fetch_assoc($result)) {
  echo "<a href=video.php?link=". $row["ClipID"] ."><div id='div". ($i) ."' class='myRow'><img src=" . $row["ThumbURL"] . "><div id='myName'><p>" . $row["ClipName"] . "</p></div></div>" . "<a/><br>"; 
  $i++;

};
} else {
  echo "0 results";
}
mysqli_close($conn);
echo'
</div>
</div>
</body>
<script src="indexJS.js"></script>
</html>'
?>