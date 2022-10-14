import  express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'

let controladorHabitacion = new ControladorHabitacion()//usando el controlador


 export let rutasPersonalizadas = express.Router()

rutasPersonalizadas.get('/hotelessanfe/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelessanfe/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelessanfe/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelessanfe/habitacion',controladorHabitacion.editarHabitacion)      