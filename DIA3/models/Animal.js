class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hablar(){
        console.log(`${this.nombre} estahaciendo un ruido`)
    }
}
module.exports= Animal;