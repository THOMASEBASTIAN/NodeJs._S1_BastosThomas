

const itemView = require('./view/itemView');
const itemController = require('./controller/itemController');

let booleanito = true;

while (booleanito) {
    const opcionUsuario = itemView.showMenu();
    switch (opcionUsuario) {
        case '1':
            itemController.handleCreateItem();
            break;
        case '2':
            itemController.handleListItems();
            break;
        case '3':
            itemController.handleUpdateItem();
            break;
        case '4':
            itemController.handleDeleteItem();
            break;
        case '5':
            booleanito = false;
            itemView.showMessage("Saliendo del programa...");
            break;
        default:
            itemView.showMessage("Opción inválida.");
    }
}