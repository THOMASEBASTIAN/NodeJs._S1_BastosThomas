const prompt = require('prompt-sync')();
const path = "./db.json";
const fs = require('fs');

function loadData() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "[]");
    }
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}

function saveData(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2)); // El 'null, 2' formatea el JSON para que sea más legible
}

function showMenu() {
    console.log("\n=== CRUD en consola con Node.js ===");
    console.log("1. Crear elemento");
    console.log("2. Listar elementos");
    console.log("3. Actualizar elemento");
    console.log("4. Eliminar elemento");
    console.log("5. Salir\n");

    let opcionUsuario = prompt("Selecciona una opción: ");
    return opcionUsuario;
}

function handleMenu(option) {
    switch (option) {
        case "1":
            createItem();
            break;
        case "2":
            listItems();
            break;
        case "3":
            updateItem();
            break;
        case "4":
            deleteItem();
            break;
        case "5":
            booleanito = false;
            break; // Agregado 'break' para evitar que siga ejecutando el 'default'
        default:
            console.log("Opción inválida.");
    }
}

function createItem() {
    let nombre = prompt("Ingresa un nombre: ");
    const id = Date.now();
    const data = loadData();
    data.push({
        id,
        nombre
    });
    saveData(data);
    console.log("El elemento fue agregado!");
}

function listItems() {
    const data = loadData();
    if (data.length === 0) {
        console.log("No hay elementos para mostrar.");
    } else {
        console.log("\n--- Lista de elementos ---");
        data.forEach(item => {
            console.log(`ID: ${item.id}, Nombre: ${item.nombre}`);
        });
    }
}

function updateItem() {
    listItems();
    const idToUpdate = prompt("Ingresa el ID del elemento a actualizar: ");
    const data = loadData();
    const itemIndex = data.findIndex(item => item.id == idToUpdate);
    
    if (itemIndex !== -1) {
        const newName = prompt("Ingresa el nuevo nombre: ");
        data[itemIndex].nombre = newName;
        saveData(data);
        console.log("Elemento actualizado con éxito!");
    } else {
        console.log("No se encontró un elemento con ese ID.");
    }
}

function deleteItem() {
    listItems();
    const idToDelete = prompt("Ingresa el ID del elemento a eliminar: ");
    const data = loadData();
    const newData = data.filter(item => item.id != idToDelete);
    
    if (newData.length < data.length) {
        saveData(newData);
        console.log("Elemento eliminado con éxito!");
    } else {
        console.log("No se encontró un elemento con ese ID.");
    }
}

let booleanito = true;

while (booleanito) {
    let opcionUsuario = showMenu();
    handleMenu(opcionUsuario);
}