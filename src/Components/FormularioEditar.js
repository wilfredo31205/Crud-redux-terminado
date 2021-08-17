
import React, { Fragment, useEffect, useState} from 'react';
import Formulario from './Formulario';

import Staburck from '../images/staburck.gif';

import {  useDispatch , useSelector } from "react-redux";
import { editarProductoAction } from '../actions/BebidasAction';
import { useHistory } from 'react-router-dom';



const FormularioEditar = () => {



    // nuevo state de producto

    const [ Bebidas , GuardarBebidas ] = useState({

        nombre: '',
        precio : ''

    })
    




    const resultado = useSelector(state=>state.Bebidas.productoeditar)



    useEffect(()=>{ // cuando se renderiza o cargue la pagina le mandamos la variable resultado que contiene el state de la bebida a editar con useelector


        GuardarBebidas(resultado);



    },[resultado])



    // Leer los datos del state

    const Onchangeformulario = e =>{

    


        GuardarBebidas({


            ...Bebidas,

            [e.target.name] : e.target.value


        })

    }




    const history = useHistory();

    const dispatch = useDispatch();

 
    console.log(resultado);


    if(!resultado) return null;


    const { nombre , precio , id } = resultado






    const submiEditarProducto = w=>{

        w.preventDefault();


        dispatch(editarProductoAction(Bebidas)) // pasandole las bebidas del state que creamos mas arriba 


        history.push('/listado')




    }






    return (  

        <Fragment>

        <form

           onSubmit={submiEditarProducto}
        
        >

        
    <img src={ Staburck} className="imagen" alt="imagenfondo" />



        <div className="row">
        <div class="TituloBebida">Agrega tu bebida favorita</div>
            
  
        <div  className="EditandoFormulario">

        <div className="formularioEditar">


        <input 
        
        placeholder="Nombre"
        type="text"
        className="validate animate__animated animate__flip inputNombre"
 
        name="nombre"
        value={Bebidas.nombre}
        onChange={Onchangeformulario}
        
      //  onChange={e=>setNombreBebida(e.target.value)}
        
        />

        </div>


         <div  className="input-field col s4 m4 l2">

           

        <input 
        
        placeholder="Precio "
        type="number"
        className="validate animate__animated animate__flip inputNombre"
        name="precio"
       value={Bebidas.precio}
       onChange={Onchangeformulario}
        //onChange={e=>setPrecio(Number(e.target.value))}
     
        
        />


        </div>
        


         <div  className="input-field col s4 l2">

        <input 
        
        placeholder="Codigo "
        type="number"
        className="validate animate__animated animate__flip inputNombre"
         value={Bebidas.id}
         name="id"
         onChange={Onchangeformulario}
      //  onChange={e=>setID(e.target.value)}
     
        
        />
  
        </div>

      

        </div>


        
        <button className="botonAgregarr" name="action"
        
        
       
        >
           Guardar cambios 
         
   

    
            </button>
    
    

      




        <div className="row">

        <div className="col s4   ">

      

        <img src={ Staburck} className="imagen" alt="imagenfondo" /> 

        

        </div>

       


        </div>
        </div>

        </form>

{/* 
        { cargando ? <p>Cargando...</p> : null }



        { error ? <p className="error">Hubo un error brother</p> : null } */}



        </Fragment>
     
        
    )
    
}



export default FormularioEditar;