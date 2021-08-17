import React,{Fragment , useState} from 'react';
import { Link } from 'react-router-dom'

import {  useDispatch , useSelector } from "react-redux";

// custom hook

import useForm from './hooks/useForm';




// useDispatch nos sirve para mandar a ejecutar las acciones que tengamos 
//useSelector es una forma en la que vamos a acceder al state dentro del componente

//useSelector es el hook que nos react reduc para leer lo que tengamos en el state 



import Presidente from '../images/presidente.jpg';


import presi from '../images/presi.gif';

// action de redux 


import { CrearNuevoProductoAction } from '../actions/BebidasAction'; // importando la funcion del archivo de redux BebidasAction


import { MostrarAlerta } from '../actions/AlertaAction';

import Spinner from '../Components/Spinner';






const Formulario = ({history}) => { // utilizamos history para redireccionar 



    // state

    // const [nombre, setNombreBebida] = useState('')

    // const [precio, setPrecio] = useState(0)

    // const [id, setID] = useState(' ')



    // const [Datos, setDatos] = useState({

    //     nombre: '',
    //     precio : '',
    //     id : ''

    // })



    // const ChangeInput = (e)=>{

    //     setDatos({

    //         ...Datos,

    //         [e.target.name] : e.target.value



    //     })



    // }



    const initialForm = {
        nombre: '',
        precio : '',
        id : ''
    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm )








    const { nombre , precio , id } = formValues;

//  const { nombre , precio , id } = Datos;




    const [Cargando, setCargando] = useState(false)



    // utilizar use dispatch y te crea o devuelve una  funcion 


     const dispatch = useDispatch(); // y esto le retorna dispatch a la funcion 


       

            // UseSelector es el hook que nos da react redux, para leer que haiga en el state


         // acceder  al state store


         const cargando = useSelector(state =>state.Bebidas. loading); // state =>state : viendo todo el state

        //state.productos.loading : accediendo al state de loading 


         console.log(cargando);

        const error = useSelector(state=>state.Bebidas.error)


        const alerta = useSelector(state=>state.alerta.alerta)



     //   console.log(error);



    // mandar a llamar el action de producto action 

    const agregarProducto = (producto)=> dispatch( CrearNuevoProductoAction(producto) ) // el dispatch es como una funcion que toma otra funcion 
    
    // dispatch lo vamos a utilizar para mandar a llamar las funciones que tengamos en el action 
    


    // aqui se utiliza una funcion de redux que mande a llamar el action que en este caso es 
    // CrearNuevoProductoAction

     // cuando el usuario haga submit 

     const submitNuevoProducto = (e)=>{

        e.preventDefault();

        // validar el formulario

        if(nombre.trim() === ' ' || precio <= 0 || id.trim() === ''){


                const respuesta = {

                    msg: 'Todos los campos deben ser llenado o completado',

       

                 className :"error1"

                }






                            
              dispatch(MostrarAlerta(respuesta));

            return ;



        }


        setCargando(true)


        setTimeout(() => {

            
        setCargando(false)

        history.push('/listado');

            agregarProducto({

                nombre, 
                precio,
                id
    
    
    
            }); 

            
        }, 2000);


        // // si no hay errores 



        // crear el nuevo producto 
        
//         agregarProducto({// una vez que el usuario de submit mandamos a llanar   agregarProducto

//             nombre, // AGREGANDO LOS VALORES DE LOS STATE 
//             precio,
//             id


// //const agregarProducto = (producto)=> dispatch( CrearNuevoProductoAction(producto) ) / como tenemos un producto en la funcion agregarProducto
// // le pasamos un parametro  a la funcion agregarProducto  que en este caso de producto para que asi se ejecute el producto que insertamos 
            
//         }); 




        // redireccionar a lista de bebidas 





        // agregar producto es una funcion que utiliza dispatch para comunicarse con las acciones y 
         
        // manda a ejecutar la otra funcion CrearNuevoProductoAction


        
    }


    const ClearDates = (e) =>{


        reset();
       
   


        }

   

        
    

    return (
     
        <Fragment>

        <form className="formulario"

            onSubmit={submitNuevoProducto}
        
        >
        <div className="">
        <div className="TituloBebida">Ventas de Bebidas</div>

        <h2 className="favorita">Agrega tu Bebida favorita</h2>
            
        { alerta  ? <p className={alerta.className}>{alerta.msg}</p> : null}
        
        { error ? <p className="error1">Hubo un error brother</p> : null }


  
        <div className="FormularioInput">

        <div  className="formulario">

        <label Htmlfor="">Nombre de Bebida</label>
        <input 
        
        placeholder="Nombre"
        type="text"
        className="inputNombre"
        value={nombre}
        name="nombre"
        onChange={ handleInputChange}
        // onChange={e=>setNombreBebida(e.target.value)}
        
        />
 
        </div>


         <div  className="input-field col s4 m4 l2">

           
         <label for="first_name ">Precio de Bebida</label>
        <input 
        
        placeholder="Precio "
        type="number"
        className="inputNombre"
        value={precio}
        name="precio"
        // onChange={e=>setPrecio(Number(e.target.value))}
        onChange={ handleInputChange}
        
        />

        </div>
        


         <div  className="">
         <label for="first_name ">Codigo de Bebida</label>
        <input 
        
        placeholder="Codigo "
        type="number"
        className="inputNombre"
        value={id}
        name="id"
        // onChange={e=>setID(e.target.value)}
        onChange={ handleInputChange}
        
        />
  
        </div>

      

        </div>

        </div>
        
        <button class=" botonAgregar" type="submit" name="action"
        
    
        >
            Agregar Bebida
            
            </button>



      
            { Cargando ?<Spinner/> : null }
  
    
           
            <button className=" botonlimpiar botonlimpiarr" type="button" name="action"
            onClick={ClearDates}    
    
        >
           Limpiar Campos
            
            </button>



        </form>


      

        <img src={ Presidente} className="imagen" alt="imagenfondo" />





        </Fragment>
     
        
    )
    
}



export default Formulario
