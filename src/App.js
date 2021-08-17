

import Header from "./Components/Header";

import Formulario from "./Components/Formulario";

import Productos from "./Components/Productos";

import NuevoProductos from "./Components/NuevoProductos";
import EditarProducto from  "./Components/EditarProducto";


import  ListadoProductos  from  "./Components/ListadoProductos";


import FormularioEditar from "./Components/FormularioEditar";
import Registro from "./Components/Login}/Registro";

import {BrowserRouter as Router,Switch , Route } from 'react-router-dom';



// redux 

import { Provider } from 'react-redux' // es de donde fluyen los datos

import  store  from './store';  // importando el store que esta en el archivo store.js
import Login from "./Components/Login}/Login";



function App() {
  return (
   
    <Router>

      <Provider store={store}> {/*definimos el store en el provider porque lo requiere como propiedad de este componenete*/}  

      { /* el Provider debe de rodear todo , de esa forma todos los datos , todo lo que registremos
        en nuestro reducer , todas las funciones que vayamos a agregar va a estar disponible en todo el proyecto 

      
      */ }

      <Header/>


    

       <div className="">


        <Switch>


        <Route exact path="/" component={Formulario} />
      
      <Route exact path="/listado" component={ListadoProductos} />

      <Route exact path="/listado/editar/:id" component={FormularioEditar} />

      
      <Route exact path="/registro" component={Registro} />


            
      <Route exact path="/login" component={Login} />

        </Switch>



       </div>

       </Provider>



      </Router>
  );
}

export default App;
