

const fs = require('fs');
const path = './db.json';

// Asegura que el archivo de datos exista.
function initializeDataFile() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]');
    }
}

// Carga los datos del archivo db.json.
function loadItems() {
    initializeDataFile();
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}

// Guarda los datos en el archivo db.json.
function saveItems(items) {
    fs.writeFileSync(path, JSON.stringify(items, null, 2));
}

// Lógica de negocio para los elementos.
function createItem(nombre) {
    const items = loadItems();
    const newItem = {
        id: Date.now(),
        nombre: nombre
    };
    items.push(newItem);
    saveItems(items);
    return newItem;
}

function getItems() {
    return loadItems();
}

function updateItem(id, nuevoNombre) {
    const items = loadItems();
    const index = items.findIndex(item => item.id == id);
    if (index === -1) {
        return null; // Elemento no encontrado
    }
    items[index].nombre = nuevoNombre;
    saveItems(items);
    return items[index];
}

function deleteItem(id) {
    const items = loadItems();
    const initialLength = items.length;
    const filteredItems = items.filter(item => item.id != id);
    saveItems(filteredItems);
    return filteredItems.length < initialLength; // Retorna true si se eliminó algo
}

module.exports = {
    createItem,
    getItems,
    updateItem,
    deleteItem
};