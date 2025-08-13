// itemController.js

const itemModel = require('./itemModel');
const itemView = require('./itemView');

function handleCreateItem() {
    const nombre = itemView.promptForName();
    itemModel.createItem(nombre);
    itemView.showMessage("El elemento fue agregado!");
}

function handleListItems() {
    const items = itemModel.getItems();
    itemView.displayItems(items);
}

function handleUpdateItem() {
    const id = itemView.promptForId();
    const nuevoNombre = itemView.promptForName();
    const updatedItem = itemModel.updateItem(id, nuevoNombre);
    if (updatedItem) {
        itemView.showMessage("Elemento actualizado con éxito!");
    } else {
        itemView.showMessage("No se encontró un elemento con ese ID.");
    }
}

function handleDeleteItem() {
    const id = itemView.promptForId();
    const success = itemModel.deleteItem(id);
    if (success) {
        itemView.showMessage("Elemento eliminado con éxito!");
    } else {
        itemView.showMessage("No se encontró un elemento con ese ID.");
    }
}

module.exports = {
    handleCreateItem,
    handleListItems,
    handleUpdateItem,
    handleDeleteItem
};