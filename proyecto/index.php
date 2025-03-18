<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../FE/styles/mystyles.css">
    <title>Registro de Usuario</title>
</head>
<body>
    <header></header>
    <div class="container">
        <h1>Registro de Usuario</h1>
        <form action="../BE/register_users.php" method="POST" id="registrationForm">
            <div class="input-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="input-group">
                <label for="age">Edad:</label>
                <input type="number" id="age" name="age" required>
            </div>
            <div class="input-group">
                <label for="email">Correo:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <button type="submit">Guardar</button>
        </form>

        <!-- Contenedor para mostrar el clima -->
        <div id="weather-info">
            <h2>Información del Clima</h2>
            <!-- <p>Cargando datos del clima...</p> -->
        </div>

        <!-- Botón para redirigir a la página de usuarios -->
        <a href="users.html" class="users-button">Ver Usuarios</a>
    </div>
    <script src="./scripts/register.js"></script>
</body>
</html>


