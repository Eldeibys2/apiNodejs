import { ServicioReserva } from "../services/ServicioReserva.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"


export class ControladorReservas{
    constructor(){}

    async buscarReservas(request,response){
        let objetoServicioReserva= new ServicioReserva()
        try {
            
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioReserva.consultarReservas(),
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async buscarReservasPorId(request,response){
        let id = request.params.id
        let objetoServicioReserva= new ServicioReserva()

        try {
            
            response.status(200).json({
                "mensaje":"exito en la consulta"+ id,
                "datos":await objetoServicioReserva.consultarReservaPorId(id),
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async registrarReservas(request,response){
        let datosReserva = request.body
        let objetoServicioReserva= new ServicioReserva()

        try {
            await objetoServicioReserva.agregarReservaEnBD(datosReserva)
            response.status(200).json({
                "mensaje":"exito registrando la reserva",
                "datos":datosReserva,
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error agregando "+error,
                "datos":null,
            })

        }
    }

    async editarReservas(request,response){
        let id = request.params.id
        let datosReserva = request.body
        let objetoServicioReserva= new ServicioReserva()

        try {
            await objetoServicioReserva.editarReserva(id,datosReserva)
            response.status(200).json({
                "mensaje":"exito editando la reserva"+id,
                "datos":datosReserva,
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error al editar "+error,
                "datos":null,
            })

        }
    }
}