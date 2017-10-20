<?php
	header('Content-type: text/event-stream');
	header('Cache-control:no-cache');
  
  $data = json_encode(
    array(
    'time'=>time(),
    'aleatoire'=> rand()
  ));
  
		echo "id:1".PHP_EOL;
		echo 'data:'.$data.PHP_EOL.PHP_EOL;

?>