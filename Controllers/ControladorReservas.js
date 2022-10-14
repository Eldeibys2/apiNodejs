


export class ControladorReservas{
    constructor(){}

    async buscarReservas(request,response){
        try {
            
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":null,
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async buscarReservasPorId(request,response){
        try {
            
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":null,
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async registrarReservas(request,response){
        try {
            
            response.status(200).json({
                "mensaje":"exito registrando la reserva",
                "datos":null,
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error agregando "+error,
                "datos":null,
            })

        }
    }

    async editarReservas(request,response){
        try {
            
            response.status(200).json({
                "mensaje":"exito editando la reserva",
                "datos":null,
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error al editar "+error,
                "datos":null,
            })

        }
    }
}