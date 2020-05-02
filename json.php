<?php

//conexion a base de datos
$conn = mysqli_connect('localhost','root','','test') or die("Problemas en la conexion");
//consulta sql select tabla : usuarios
$sql = 'SELECT * FROM usuarios';

//query
$result = mysqli_query($conn,$sql);
if( mysqli_num_rows( $result ) > 0 ){
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    print json_encode($rows);      
}else{
    print 'no hay datos';
}


?>