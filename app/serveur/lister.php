<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$listeAgendaJson = file_get_contents("liste-agenda.json");

if(strlen($listeAgendaJson) > 0){
  $listeAgenda = json_decode($listeAgendaJson);
  echo json_encode($listeAgenda);
}else{
  echo json_encode([]);
}