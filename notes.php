<?php
/*
if ($array) {
    array_splice($array, 1, sizeof($array));
}
*/

$temp = $_POST['temp'];
$scale = $_POST['scale'];
    $referencia = $temp * $scale;
    $comodin = 130.812782650299;
    $frec[] = $comodin;
    $contador = 0;

    while ($contador <= $referencia) {
        $frec[$contador+1] = $comodin * (pow(2, (1/$temp)));
        $comodin = $comodin * (pow(2, (1/$temp)));
        $contador++;
    }
    
    $contador = 1;

    $llav[0] = 49;
    $llav[1] = 50;
    $llav[2] = 51;
    $llav[3] = 52;
    $llav[4] = 53;
    $llav[5] = 54;
    $llav[6] = 55;
    $llav[7] = 56;
    $llav[8] = 57;
    $llav[9] = 48;
    $llav[10] = 219;
    $llav[11] = 221;
    $llav[12] = 81;
    $llav[13] = 87;
    $llav[14] = 69;
    $llav[15] = 82;
    $llav[16] = 84;
    $llav[17] = 89;
    $llav[18] = 85;
    $llav[19] = 73;
    $llav[20] = 79;
    $llav[21] = 80;
    $llav[22] = 186;
    $llav[23] = 187;
    $llav[24] = 65;
    $llav[25] = 83;
    $llav[26] = 68;
    $llav[27] = 70;
    $llav[28] = 71;
    $llav[29] = 72;
    $llav[30] = 74;
    $llav[31] = 75;
    $llav[32] = 76;
    $llav[33] = 192;
    $llav[34] = 222;
    $llav[35] = 191;
    $llav[36] = 226;
    $llav[37] = 90;
    $llav[38] = 88;
    $llav[39] = 67;
    $llav[40] = 86;
    $llav[41] = 66;
    $llav[42] = 78;
    $llav[43] = 77;
    $llav[44] = 188;
    $llav[45] = 190;
    $llav[46] = 189;

    //A partir de el indice No. 47 TODOS TENDRAN VALOR DE "0" PORQUE YA NO HAY MAS TECLAS EN EL TECLADO
    /*$Llavero = 47;
    while($Llavero => $referencia){
        $llav[$Llavero] = 0;
        $Llavero++;
    };*/

    $llav[47] = 0;
    $llav[48] = 0;
    $llav[49] = 0;
    $llav[50] = 0;
    $llav[51] = 0;
    $llav[52] = 0;
    $llav[53] = 0;
    $llav[54] = 0;
    $llav[55] = 0;
    $llav[56] = 0;
    $llav[57] = 0;
    $llav[58] = 0;
    $llav[59] = 0;
    $llav[60] = 0;
    $llav[61] = 0;
    $llav[62] = 0;
    $llav[63] = 0;
    $llav[64] = 0;
    $llav[65] = 0;
    $llav[66] = 0;
    $llav[67] = 0;
    $llav[68] = 0;
    $llav[69] = 0;
    $llav[70] = 0;
    $llav[71] = 0;
    $llav[72] = 0;
    $llav[73] = 0;
    $llav[74] = 0;
    $llav[75] = 0;
    $llav[76] = 0;
    $llav[77] = 0;
    $llav[78] = 0;
    $llav[79] = 0;
    $llav[80] = 0;
    $llav[81] = 0;
    $llav[82] = 0;
    $llav[83] = 0;
    $llav[84] = 0;
    $llav[85] = 0;
    $llav[86] = 0;
    $llav[87] = 0;
    $llav[88] = 0;
    $llav[89] = 0;
    $llav[90] = 0;
    $llav[91] = 0;
    $llav[92] = 0;
    $llav[93] = 0;
    $llav[94] = 0;
    $llav[95] = 0;
    $llav[96] = 0;
    $llav[97] = 0;
    $llav[98] = 0;
    $llav[99] = 0;
    $llav[100] = 0;

    $array = [["id" => ".n1", "nota" => "N1", "key" => $llav[0], "hz" => round($frec[0], 2)]];
    while ($contador <= $referencia) {
        $contador++;
        array_push($array,['id' => '.n'.$contador.'', 'nota' => 'N'.$contador.'', 'key' => $llav[$contador-1], 'hz' => round($frec[$contador-1], 2)]);
    }
    echo json_encode($array);

?>