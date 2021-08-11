import {

    MOSTRAR_ALERTA,
    OCULTAR_ALERTA 

 } from '../types/index';



 // Mostrando una alerta 



 export function MostrarAlerta(alerta){ // pasandole como parametro la alerta a mostrar

    
    
    return (dispatch) =>{

        dispatch(crearAlerta(alerta))


    }
 

 }



 const crearAlerta= (alerta)=>({


    type: MOSTRAR_ALERTA,
    payload: alerta 



 })