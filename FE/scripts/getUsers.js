// Users
// Datos de ejemplo (puedes reemplazar esto con datos del localStorage o una API)
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
displayUsers();
