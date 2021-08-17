
import { Switch } from 'react-router-dom';
import {

    MOSTRAR_ALERTA,
    MOSTRAR_ALERTA_LOGIN,
    MOSTRAR_NOTIFICACION_REGISTRO,
    OCULTAR_ALERTA

 } from '../types/index';



// cada reducer tiene su propio state



const initialState = {

    alerta : null // va a estar null ya que hasta que el usuario cometa algun error o alguna advetencia vamos a cambiar la alerta 



}


export default function(state = initialState , action){


        switch (action.type) {


            case  MOSTRAR_ALERTA:
          
            
                return{


                    ...state,

                    alerta: action.payload


                }
                case  MOSTRAR_ALERTA_LOGIN:

                
                    return{


                        ...state,
    
                        alertas: action.payload
    
    
                    }
                        

                case MOSTRAR_NOTIFICACION_REGISTRO:

                    return{

                        ...state,
                        notificaciones: action.payload



                    }
                    
                case  OCULTAR_ALERTA:

                    return{

                        ...state,
                        alerta: state.payload


                    }





            default:
                
                return state;


        }







}