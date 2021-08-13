import { Link } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RegistroAlerta } from '../../actions/AlertaAction'


const Registro = () => {



    
    const [Registro, setRegistro] = useState({

      nombre: '',
      apellido: '',
      correo: '',
      password: '',
      confirmarPassword: ''

    })
    

      // accediendo al store 

      const dispatch = useDispatch();

      const alertaRegistro = useSelector(state=>state.alerta.notificaciones)


        console.log(alertaRegistro);




                  // destructurando los datos

    const { nombre, apellido , correo , password , confirmarPassword } = Registro; 





    const ChangeRegistro = e=>{

      setRegistro({

        ...Registro,


          [e.target.name]: e.target.value


      })


      }


      const SubmitRegistro = (p)=>{

        p.preventDefault();


        // validando formulario 

        if(nombre.trim() === '' || apellido.trim() === '' || correo.trim()=== ''|| confirmarPassword.trim()===''){


          console.log('favor de completar los  campos');



        }

        const alertaRegistro = {


          msg: 'Favor de completar los campos',



          classes :"error"


      }

        dispatch( RegistroAlerta(alertaRegistro))







        }





    return (


        <>

        <div className="imagen-Login">

        <div className="formulario-login contenedor">


        <form action="#"
        
          onSubmit={SubmitRegistro}


        >
        <h1 className="Registro">Registro</h1>

        <div className="registroSeccion">

        </div>
      





        <label className="LblCorreo" >Nombre</label>
        <div className="campo">

          <input type="text"
          className="inputUsuario"
          placeholder="Ej:Pedro"
          name="nombre"
          value={nombre}
          onChange={ChangeRegistro}


            />
          </div>
          <label className="LblCorreo" >Apellido</label>

          <input type="text"
          className="inputUsuario"
          placeholder="Ej:Sanchez"
          name="apellido"
          value={apellido}
          onChange={ChangeRegistro}
            />


        <label>Correo</label>
        <div class="campo">
              
         <input type="text" 
         placeholder="Ejem: 1234"
         name="correo"
         value={correo}
         onChange={ChangeRegistro}

          />
       
    
         </div>


         <label>Password</label>
         <div class="campo">
              
         <input type="password" 
         placeholder="Ejem: 1234"
         name="password"
         value={password}
         onChange={ChangeRegistro}

          />
    
         </div>

         <label className="confirmar">Confirmar Password</label>
         <div class="campo">
              
         <input type="password" 
   
         placeholder="Ejem: 1234"
         name=" confirmarPassword"
         value={ confirmarPassword.Registro}
         onChange={ChangeRegistro}

          />
    
         </div>


         
        
        <Link to={'Registro'} className="">

    
   

        </Link>

    
        <button type="submit" className="btnCerrar">Registrarme</button>


    

        </form>
   
  {alertaRegistro? <p className={alertaRegistro.classes}>{alertaRegistro.msg}</p> : null }
   



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