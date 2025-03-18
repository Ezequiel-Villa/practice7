# Práctica: Registro de Usuarios con Clima API

## Propósito
Este proyecto tiene como objetivo desarrollar una aplicación web que permita registrar usuarios y consultar la información de los mismos, utilizando una base de datos. Además, la aplicación muestra información en tiempo real sobre el clima de una ciudad específica a través de la API de OpenWeatherMap.

## Funcionalidades Implementadas

### 1. Registro de Usuarios
- Un formulario de registro permite a los usuarios ingresar su nombre, edad y correo electrónico.
- Los datos se envían al backend (`register_users.php`), donde se almacenan en una base de datos MySQL.
- Se maneja la validación en el frontend para evitar envíos incorrectos.

### 2. Visualización de Usuarios Registrados
- Se obtiene la lista de usuarios almacenados en la base de datos a través de una petición al backend (`get_users.php`).
- Los datos se muestran dinámicamente en la interfaz de usuario mediante JavaScript.

### 3. Integración con API de Clima
- Se utiliza la API de OpenWeatherMap para mostrar el clima actual de la ciudad de Tijuana.
- La información se muestra en una sección especial dentro de la interfaz.

## Tecnologías Utilizadas
- **Frontend:** HTML, CSS, JavaScript.
- **Backend:** PHP y MySQL.
- **API Externa:** OpenWeatherMap para datos meteorológicos.

## Estructura del Proyecto
```
|-- FE/
|   |-- styles/
|   |   |-- mystyles.css
|   |   |-- getUsers.css
|   |-- scripts/
|   |   |-- register.js
|   |   |-- getUsers.js
|-- BE/
|   |-- register_users.php
|   |-- get_users.php
|-- index.html
|-- users.html
|-- README.md
```

## Instalación y Ejecución
1. Clonar el repositorio desde GitHub:
   ```sh
   git clone https://github.com/Ezequiel-Villa/practice7.git
   ```
2. Configurar una base de datos MySQL y ejecutar el script de creación de la tabla `usuarios`.
3. Iniciar un servidor local con soporte PHP (XAMPP, WAMP o similar).
4. Abrir `index.html` en el navegador.

## Autores
- Ezequiel Villa Gonzalez

