
import { Switch } from 'react-router-dom';
import {

    MOSTRAR_ALERTA,
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




            default:
                
                return state;


        }







}