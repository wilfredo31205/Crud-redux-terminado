import React, { useState } from 'react'

import { Link } from '@material-ui/core';
import { MostrarAlertaLogin , ocultarAlertaAction } from '../../actions/AlertaAction';
import { useSelector , useDispatch } from 'react-redux';



const Login = () => {


    const [login, setLogin] = useState({

        correo: '',
        password: ''

    })

    // state de errores



    const dispatch = useDispatch();

    const alertaLogin = useSelector(state=>state.alerta.alertas)






    const InputChange = e=>{

        setLogin({

            ...login,
            
            [e.target.name] : e.target.value

         

        })


       }

       // extrayendo los valores

       const {correo , password} = login;


       const SubmitForm = (P)=>{

        P.preventDefault();


          // validando campos 

          if(correo.trim() === '' || password.trim() === ''){

              console.log('Campos vacios');


                const alerta = {


                    msg: 'Favor de completar los campos',

       

                    classes :"error"


                }

                dispatch(MostrarAlertaLogin(alerta));


                return ; 

          }


          // si no hay errores 

          dispatch(ocultarAlertaAction());
        



       }







    return (


        <>

        <div className="imagen-Login">

        <div className="formulario-login contenedor">


        <form action="#"
          onSubmit={SubmitForm}
        
        >
        <legend>Log in with Google</legend>

        <div className="registroSeccion">

        <button type="submit"
         className="btngoogle"
         
         >Google</button>



        </div>
      
        <h3 className="OR">OR</h3>




        <label className="LblCorreo" >Correo</label>
        <div className="campo">

          <input type="text"
          id="usuario"
          name="correo"
          className="inputUsuario"
          placeholder="Ej:Beatles@gmail.com"
         onChange={InputChange}
          value={correo}
            />
          </div>

          <label>Contraseña</label>
        <div class="campo">
              
         <input type="password" 
         id="password" 
         placeholder="Ejem: 1234"
         name="password"
         onChange={InputChange}
         value={password}

                  />
                
    
         </div>

         <button type="submit" className="btnCerrar">Iniciar Sección</button>

        

<p className="cuenta">Primera vez ?</p> 

<Link to={'/registro'} className="">


<a href="/registro" class="crea" >Crea una cuenta</a>



</Link>

</form>

{alertaLogin? <p className={alertaLogin.classes}>{alertaLogin.msg}</p> : null }
   

        </div>

        </div>

        {/* <div class="row">
            <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                <label for="first_name">First Name</label>
                </div> */}




        </>






      );
}
 
export default Login;