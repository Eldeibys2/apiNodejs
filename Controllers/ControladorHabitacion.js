 export class ControladorHabitacion{
    constructor(){}

    buscarHabitaciones(request,response){
        try {
            response.status(200).json({
                "mensaje": "Exito en la consulta",
                "datos":"Aqui van los datos de habitaciones"
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta"+error,
                "datos":null
            })
        }
      
    }

    buscarHabitacionPorId(request,response){
        try {
            response.status(200).json({
                "mensaje": "Exito en la consulta",
                "datos":"Aqui van los datos de habitaciones"
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta"+error,
                "datos":null
            })
        }
    }

    registrarHabitacion(request,response){
        try {
            response.status(200).json({
                "mensaje": "Exito agregando la habitacion",
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "Error agregando la habitacion"+error,
                "datos":null
            })
        }
    }

    editarHabitacion(request,response){
        try {
            response.status(200).json({
                "mensaje": "Exito editando la habitacion",
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "Error editando la habitacion"+error,
                "datos":null
            })
        }
    }
}