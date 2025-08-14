

const prompt = require('prompt-sync')();

function showMenu() {
    console.log("\n=== CRUD en consola (MVC) ===");
    console.log("1. Crear elemento");
    console.log("2. Listar elementos");
    console.log("3. Actualizar elemento");
    console.log("4. Eliminar elemento");
    console.log("5. Salir\n");
    return prompt("Selecciona una opción: ");
}

function promptForName() {
    return prompt("Ingresa un nombre: ");
}

function promptForId() {
    return prompt("Ingresa el ID del elemento: ");
}

function displayItems(items) {
    if (items.length === 0) {
        console.log("No hay elementos para mostrar.");
    } else {
        console.log("\n--- Lista de elementos ---");
        items.forEach(item => {
            console.log(`ID: ${item.id}, Nombre: ${item.nombre}`);
        });
    }
}

function showMessage(message) {
    console.log(message);
}

module.exports = {
    showMenu,
    promptForName,
    promptForId,
    displayItems,
    showMessage
};