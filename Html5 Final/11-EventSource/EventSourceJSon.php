<?php 



header('Content-type: text/event-stream');
header('Cache-Control: no-cache');
// Démarrage du tampon de sortie
ob_start();
// Date limite d’exécution (maintenant+5 secondes)
$dt_limit = time()+5;

// Encodage d’un tableau PHP en JSON
/*$data = json_encode(
array(
'time'=>time(),
'aleatoire'=>rand()
)
);*/



// Tant que le moment présent est inférieur à la date limite...
//while(time()<$dt_limit) {
    // Sortie des données dans le tampon
    // ...avec double saut de ligne
    echo 'data: '.time().PHP_EOL.PHP_EOL;
    
    // Vidage du tampon
    ob_flush();
    flush();
    // Roupillon d’une seconde
 //   sleep(1);
//}
// Fin du tampon
ob_end_flush();
?>