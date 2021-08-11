import { Link } from '@material-ui/core'
import React, { useState } from 'react'


const Registro = () => {


    



    return (


        <>

        <div className="imagen-Login">

        <div className="formulario-login contenedor">


        <form action="#">
        <h1 className="Registro">Registro</h1>

        <div className="registroSeccion">

        </div>
      





        <label className="LblCorreo" >Nombre</label>
        <div className="campo">

          <input type="text"
          id="usuario"
          className="inputUsuario"
          placeholder="Ej:Pedro"
            />
          </div>
          <label className="LblCorreo" >Apellido</label>

          <input type="text"
          id="usuario"
          className="inputUsuario"
          placeholder="Ej:Sanchez"
            />


        <label>Correo</label>
        <div class="campo">
              
         <input type="text" 
         id="password" 
         placeholder="Ejem: 1234"

          />
       
    
         </div>


         <label>Password</label>
         <div class="campo">
              
         <input type="password" 
         id="password" 
         placeholder="Ejem: 1234"

          />
    
         </div>

         <label className="confirmar">Confirmar Password</label>
         <div class="campo">
              
         <input type="password" 
         id="password" 
         placeholder="Ejem: 1234"

          />
    
         </div>


         
        
        <Link to={'Registro'} className="">

    
   

        </Link>

    
        <button type="submit" className="btnCerrar">Registrarme</button>


        </form>
   



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
 
export default Registro;