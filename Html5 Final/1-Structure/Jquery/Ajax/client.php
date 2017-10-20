<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Document sans titre</title>
</head>

<body>
<?php

if($_GET["id"] == 1)
{
	?>
    <table width="300" border="1">
      <tr>
        <td width="81">nom</td>
        <td width="103">GASQUET</td>
      </tr>
      <tr>
        <td>prénom</td>
        <td>Nicolas</td>
      </tr>
      <tr>
        <td>adresse</td>
        <td>37 impasse des chardonnerets<br>
          La goye</td>
      </tr>
      <tr>
        <td>cp</td>
        <td>83560</td>
      </tr>
      <tr>
        <td>ville</td>
        <td>RIANSaaa</td>
      </tr>
    </table>
   	
    <?php 
	}
	
	if($_GET["id"] == 2)
	{
		?>
    <table width="300" border="1">
      <tr>
        <td width="81">nom</td>
        <td width="103">GASQUET</td>
      </tr>
      <tr>
        <td>prénom</td>
        <td>Jean</td>
      </tr>
      <tr>
        <td>adresse</td>
        <td>25 impasse des chardonnerets<br>
          La goye</td>
      </tr>
      <tr>
        <td>cp</td>
        <td>83560</td>
      </tr>
      <tr>
        <td>ville</td>
        <td>RIANSaaa</td>
      </tr>
    </table>
   <?php
	}
	?>
</body>
</html>