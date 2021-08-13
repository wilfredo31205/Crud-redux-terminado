import {
   MOSTRAR_ALERTA,
   OCULTAR_ALERTA,
   MOSTRAR_ALERTA_LOGIN,
   MOSTRAR_NOTIFICACION_REGISTRO
   



} from '../types/index';



// Mostrando una alerta 



export function MostrarAlerta(alerta){ // pasandole como parametro la alerta a mostrar

   
   
   return (dispatch) =>{

       dispatch(crearAlerta(alerta))


   }


}

export function MostrarAlertaLogin(alertas){

  return(dispatch) =>{


     dispatch(alertaLogin(alertas))

  }



}


export function RegistroAlerta(notificaciones){


      return(dispatch)=>{

         dispatch(RegistroAlertaCliente(notificaciones));

      }




}


export function ocultarAlertaAction(){

   return(dispatch)=>{

      dispatch(ocultarAlerta)



   }



}





const crearAlerta= (alerta)=>({


   type: MOSTRAR_ALERTA,
   payload: alerta 



})


const alertaLogin = (alertas)=>({

  type: MOSTRAR_ALERTA_LOGIN,
  payload: alertas

})


const RegistroAlertaCliente = (notificaciones)=>({


   type: MOSTRAR_NOTIFICACION_REGISTRO,
   payload: notificaciones



   })



const ocultarAlerta = ()=>({

   type: OCULTAR_ALERTA,
   payload : null



})