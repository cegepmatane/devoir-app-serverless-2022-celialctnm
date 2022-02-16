<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$id = $_GET["id"];
$listeAgendaJson = file_get_contents("liste-agenda.json");

if(strlen($listeAgendaJson) > 0){
  $listeAgenda = json_decode($listeAgendaJson);
  foreach($listeAgenda as $agenda) {
      if ($id == $agenda->id) {
          echo json_encode($agenda);
          die();
      }
  }
}
echo json_encode([]);

