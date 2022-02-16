<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$agendaJSON = file_get_contents('php://input');
$agenda= json_decode( $agendaJSON );
print_r($agenda);

$listeAgenda = [];
$listeAgendaJson = file_get_contents("liste-agenda.json");

if(strlen($listeAgendaJson) > 0){
  $listeAgenda = json_decode($listeAgendaJson);
  $nombreAgenda = count($listeAgenda);

  $agenda->id = $nombreAgenda;
  array_push($listeAgenda, $agenda);
  print_r($listeAgenda);
}

$listeAgendaJson = json_encode($listeAgenda);

/* Linux
sudo chgrp www-data liste-agenda.json
sudo chmod g+w liste-agenda.json
*/

file_put_contents("liste-agenda.json", $listeAgendaJson);
