const prompt = require('prompt-sync')();
class UsuarioView{
    perdirDatosUsuario(){
          const nombre =prompt('Nombre')
          const Correo =prompt('Correo')
          const edad =prompt('Edad')
         return{
            nombre,correo,edad
         }
    }
    crearMensaje(msg){
        console.log(msg);
       }
       mostrarUsuarios(ususarios){
        console.log("\n----Lista de Usuario --\n");
         ususarios.forEach(u =>{
            console.log(`\nNombre: ${u["nombre"]},\n correo: ${u["correo"]},\n Edad: ${u["edad"]}`)
         })
       }
      
}
module.exports=UsuarioView;
