<?php

$temp = $_POST['temp'];
$scale = $_POST['scale'];

if (isset($_GET)) {
	if($_GET['busqueda'] == '1'){
		if (($temp === '')||($scale === '')) {
			echo json_encode(['mensaje' => 'error']);
		}else{
			$nnotas = $temp*$scale;
			$uno = 1;
			$mostrarnnotas = $nnotas+$uno;

			//Generar El array de frecuencias
			echo json_encode(['mensaje' => 'Se imprimirán '.$mostrarnnotas.' Notas']);
		}
	}
}


?>