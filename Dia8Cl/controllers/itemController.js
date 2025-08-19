class ItemController{
    constructor({model,view,prompt}){
        this.model=model;
        this.view=view;
        this.prompt = prompt
    }
    crear(){
        const datos = this.view.pedirDatosCreacion(this.prompt);
        if(!datos.nombre){
            this.view.mostrarMensaje("El nombre es obligatorio.");
            return;
        }
        const creado = this.model.crear(datos);
        this.view.mostrarMensaje(`Creado con ID ${creado.id}.`);
    }
    listar(){
        const items = this.model.listar(); 

        if (items.length > 0) {
            this.view.mostrarLista(items);
        } else {
            this.view.mostrarMensaje("No hay ítems para mostrar.");
        }

    }
    buscarPorId() {
        const id = this.view.pedirIdParaBuscar(this.prompt);
        const item = this.model.buscarPorId(id);
        if (item) {
            this.view.mostrarItem(item);
        } else {
            this.view.mostrarMensaje(`No se encontró un ítem con ID ${id}.`);
        }
    }
    actualizar() {
        const id = this.view.pedirIdParaActualizar(this.prompt);
        const datos = this.view.pedirDatosActualizados(this.prompt);
        const itemActualizado = this.model.actualizar(id, datos);
        if (itemActualizado) {
            this.view.mostrarMensaje(`Ítem con ID ${id} actualizado exitosamente.`);
        } else {
            this.view.mostrarMensaje(`Error: No se pudo actualizar el ítem con ID ${id}.`);
        }
}
eliminar() {
    const id = this.view.pedirIdParaEliminar(this.prompt);
    const exito = this.model.eliminar(id);
    if (exito) {
        this.view.mostrarMensaje(`Ítem con ID ${id} eliminado exitosamente.`);
    } else {
        this.view.mostrarMensaje(`Error: No se encontró un ítem con ID ${id} para eliminar.`);
    }
}

}
module.exports={ItemController};