<?php

    $conn = mysqli_connect("localhost","root","123Neymar10","webdev_bd");
    
    
    
    if ($conn){
        echo "Conexión exitosa a la base de datos";
    }else{
        echo "Error de conexión a la base de datos: ";
    }
    


    /*header('Content-Type: application/json');
    // set up the database connection
    $servername = "localhost";
    $username = "root"; // user name
    $password = "112q"; // password for xammp 
    $dbname = "mywebdev";// database name

    //create the database connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error){
        die(json_encode(array('error'=>'connection failed:'. $conn->connect_error)));
    }
    $data= json_decode(file_get_contents('php://input'), true);

    // check tht the dta was received correctly
    if ($data){
        // Exctract and sanitize the values from the object
        $name = $conn->real_escape_string($data['name']);//sanitize input to prevent SQL injection
        $age = intval($data['age']);
        $email = $conn->real_escape_string($data['email']); //sanitize input to prevent SQL injection

        // validate that the field are not empty and are not correct
        if (!empty($name) && !empty($age) && filter_var($email, FILTER_VALIDATE_EMAIL) && $age > 0) {
            //SQL query to insert the data into the "users" table
            $sql = "INSERT INTO usuarios (nombre_completo, edad, email) VALUES ('$name', '$age', '$email')";
            if ($conn->query($sql) === TRUE) {
                // send a successful response
                echo json_encode(array('message'=>'User successfully registered in the database'));
            } else {
                // sen an error message if the insertion fail
                echo json_encode(array('error'=>'Error registering the user: '. $conn->error));
            }
        }
        else{
            // if the data is not valid, send an error message
            http_response_code(400);
            echo json_encode(array('error'=>'Invalidate data. Please chek that all fields are correct.'));
        }
    } 
    else{
        // if the data was not received correctly, send an error message
        http_response_code(400);
        echo json_encode(array('error'=>'No data received.'));
    }
    // close the database connection
    $conn->close();*/
?>