document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registrationForm');
    const weatherInfo = document.getElementById("weather-info");

    
    // Escuchar el evento de envío del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const email = document.getElementById('email').value;

        // Crear objeto con los datos
        const data = {
            name: name,
            age: age,
            email: email
        };

        console.log(data);

        // Enviar datos al servidor
        fetch('../BE/register_users.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }
                return response.json();
            })
            .then(result => {
                console.log('Respuesta del servidor:', result);
                alert(result.mensaje || 'Registro exitoso');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error en el registro');
            })
            .finally(() => {
                form.reset(); // Limpiar el formulario
            });
    });

    // API Key de OpenWeatherMap
    const apiKey = "8277a30428b17a122dd1529c5339ccb0";
    const city = "Tijuana"; // Puedes cambiar la ciudad
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    // Función para obtener y mostrar los datos del clima
    function fetchWeather() {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al obtener los datos del clima");
                }
                return response.json();
            })
            .then(data => {
                console.log("Datos del clima recibidos",data);
                if (!data|| !data.main || !data.weather) {
                    throw new Error("No se encontró información del clima");
                }

                // Extraer los datos relevantes
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Icono del clima

                // Mostrar los datos en el contenedor
                weatherInfo.innerHTML = `
                    <h2>Clima en ${city}</h2>
                    <img src="${iconUrl}" alt="${weatherDescription}">
                    <p><strong>Temperatura:</strong> ${temperature}°C</p>
                    <p><strong>Condición:</strong> ${weatherDescription}</p>
                    <p><strong>Humedad:</strong> ${humidity}%</p>
                    <p><strong>Viento:</strong> ${windSpeed} m/s</p>
                `;
            })
            .catch(error => {
                console.error("Error:", error);
                weatherInfo.innerHTML = `<p>No se pudo cargar la información del clima.</p>`;
            });
    }

    // Llamar a la función para obtener el clima
    fetchWeather();
});