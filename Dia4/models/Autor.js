//Autor conoce sus Libro y cada Libro conoce a su Autor
class Autor {
    constructor(id,nombre){
        this.id=id;
        this.nombre=nombre;
        this.libros=[];
    }
    agregarLibro(libro){
        if(this.libros.includes(libro)==false){
            this.libros.push(libro);
            libro.setAutor(this);
        }
    }
    //Quitar libro de ambos lados
    quitarLibro(){
      const totalLibrosAntes = this.libros.length;
        this.libros = this.libros.filter(libro => libro.id !== libroARemover.id);
         if (this.libros.length < totalLibrosAntes) {
        
            if (typeof libroARemover.quitarAutor === 'function') {
                libroARemover.quitarAutor();
            }
            console.log(` Libro "${libroARemover.titulo}" eliminado correctamente del autor ${this.nombre}.`);
        } else {
            console.log(` Advertencia: El libro "${libroARemover.titulo}" no se encontró en la lista de ${this.nombre}.`);
        }
    }
}

module.exports= Autor;