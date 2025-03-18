<?php

    include 'insert_be.php';

    $nombre_completo = $_POST ['name'];
    $edad = $_POST ['age'];
    $email = $_POST ['email'];

    $query = "INSERT INTO usuarios(nombre_completo,edad,email)
    VALUES('$name','$age','$email')";

    $ejecutar = mysqli_query($conn, $query);// ejeutar query

    if ($ejecutar){
        echo '<script> 
            alert("Usuario registrado correctamente");
        </script>
        '
    }else{
        echo '<script> 
            alert("Error al registrar el usuario");
        </script>
        ';
    }
    // Cerrar la conexión con la base de datos
    
    mysqli_close($conn);
?>