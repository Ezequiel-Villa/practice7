// Users
<?php

    // Conectar a la base de datos
    $conn = mysqli_connect("localhost", "root", "123Neymar10", "webdev_bd");

    // Verificar la conexión
    if ($conn->connect_error) {
        die(json_encode(array('error' => 'Connection failed: ' . $conn->connect_error)));
    }

    // Consulta SQL para obtener los usuarios
    $sql = "SELECT nombre_completo, edad, email FROM usuarios";
    $result = $conn->query($sql);

    // Verificar si hay resultados
    if ($result->num_rows > 0) {
        $users = array();
        while ($row = $result->fetch_assoc()) {
            $users[] = $row; // Agregar cada fila al arreglo de usuarios
        }
        // Devolver los usuarios en formato JSON
        echo json_encode($users);
    } else {
        echo json_encode(array('message' => 'No users found.'));
    }

    // Cerrar la conexión
    $conn->close();
?>

