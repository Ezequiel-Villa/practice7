// Users
/* Datos de ejemplo (puedes reemplazar esto con datos del localStorage o una API)
const users = [
    { name: "Juan Pérez", age: 25, email: "juan@example.com" },
    { name: "María Gómez", age: 30, email: "maria@example.com" },
    { name: "Carlos López", age: 22, email: "carlos@example.com" }
];
// Función para mostrar los usuarios en tarjetas
function displayUsers() {
    const usersList = document.getElementById("users-list");
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Edad:</strong> ${user.age}</p>
            <p><strong>Correo:</strong> ${user.email}</p>
        `;

        usersList.appendChild(userCard);
    });
}
// Mostrar los usuarios al cargar la página
displayUsers();*/


// Función para obtener los usuarios desde el backend
function fetchUsers() {
    fetch('../BE/get_users.php') // Ruta al archivo PHP que obtiene los usuarios
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los usuarios');
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(users => {
            displayUsers(users); // Mostrar los usuarios en la página
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al cargar los usuarios');
        });
}

// Función para mostrar los usuarios en tarjetas
function displayUsers(users) {
    const usersList = document.getElementById("users-list");
    usersList.innerHTML = ""; // Limpiar el contenedor antes de agregar los usuarios

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Edad:</strong> ${user.age}</p>
            <p><strong>Correo:</strong> ${user.email}</p>
        `;

        usersList.appendChild(userCard);
    });
}

// Llamar a la función para obtener y mostrar los usuarios al cargar la página
fetchUsers();


