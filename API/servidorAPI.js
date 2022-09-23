import  express from 'express'
import { rutasPersonalizadas } from '../Routes/rutas.js'
import { connectarConMongo } from '../Database/conexion.js'

export class ServidorAPI{
    constructor(){
         this.app = express()
         this.conectarConBD()
         this.atenderPeticiones()
    }
    //Metodos de la clase ServidorAPI
    despertarServidor(){
    
        this.app.listen(process.env.PORT,function () {
            console.log("Exito encendiendo el servidor: "+process.env.PORT)
        })
    }

    atenderPeticiones(){

     this.app.use('/',rutasPersonalizadas)
      
}

conectarConBD(){
    connectarConMongo()
}

}