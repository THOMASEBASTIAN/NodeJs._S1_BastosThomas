class ItemView {
    mostrarMenu() {
        console.log("\n=== CRUD de Items ===");
        console.log("1) Crear");
        console.log("2) Listar");
        console.log("3) Ver por ID");
        console.log("4) Actualizar");
        console.log("5) Eliminar");
        console.log("0) Salir");
    }

    pedirOpcion(prompt) {
        const op = prompt("Elige una opción: ");
        return op.trim();
    }

    pedirDatosCreacion(prompt) {
        const nombre = prompt("Nombre: ").trim();
        const descripcion = prompt("Descripción: ").trim();
        return { nombre, descripcion };
    }



    mostrarLista(items) {
        console.log("\n--- LISTA DE ÍTEMS ---");
        if (items.length === 0) {
            console.log("No hay ítems registrados.");
        } else {
            items.forEach(item => {
                console.log(`ID: ${item.id}`);
                console.log(`Nombre: ${item.nombre}`);
                console.log(`Descripción: ${item.descripcion}`);
                console.log("------------------------");
            });
        }
        console.log("------------------------\n");
    }

    pedirIdParaBuscar(prompt) {
        const id = prompt("Ingrese el ID del ítem que desea buscar: ");
        return id;
    }

    mostrarItem(item) {
        console.log("\n--- DETALLES DEL ÍTEM ---");
        console.log(`ID: ${item.id}`);
        console.log(`Nombre: ${item.nombre}`);
        console.log(`Descripción: ${item.descripcion}`);
        console.log(`Creado en: ${item.creadoEn}`);
        console.log(`Actualizado en: ${item.actualizadoEn}`);
        console.log("------------------------\n");
    }

    mostrarMensaje(msg) {
        console.log(`\n${msg}`);
    }       
        pedirIdParaActualizar(prompt) {
            const id = prompt("Ingrese el ID del ítem que desea actualizar: ");
            return id;
        }
    
        pedirDatosActualizados(prompt) {
            const nombre = prompt("Nuevo nombre (deje en blanco para no cambiar): ").trim();
            const descripcion = prompt("Nueva descripción (deje en blanco para no cambiar): ").trim();
            return {
                nombre: nombre || undefined,
                descripcion: descripcion || undefined
            };
        }
        pedirIdParaEliminar(prompt) {
            const id = prompt("Ingrese el ID del ítem que desea eliminar: ");
            return id;
        }
        

    
}




module.exports = { ItemView };