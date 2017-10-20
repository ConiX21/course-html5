<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
</head>
<body>

<?php
	$res = mysql_connect("localhost", "root","");

	$req = "SELECT * FROM PERSONNE";

	mysql_select_db("test", $res);

	$resultat = mysql_query($req, $res);
?>

<table border="1" width="300px">


<?php
	while($temp = mysql_fetch_assoc($resultat))
	{
		echo "<tr>
				<td>{$temp["prenom"]}</td>
				<td>{$temp["nom"]}</td>
			  <tr>";
	}

?>

</table>

</body>
</html>
