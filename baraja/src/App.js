import React, {useState, useEffect, useReducer} from 'react';
//import logo from './logo.svg';
import './App.css';
import {cartas} from './cartas.json';
import axios from "axios"
import FormularioCarta from "./components/formularioCarta.jsx"

function App() {
  const cartas = []
  
  useEffect(() =>{
    console.log("Effect componentDidMount!")
  },[])
  
   useEffect(() =>{
     if(state.jugador != ""){
       console.log("Effect componentDidUpdate!")
     }
  },[])
  
  const cartasReducer = (state, action) =>{
    switch(action.type){
        case "PEDIR_CARTA":
            return([
                ...state, action.carta
                ])
        case "TIRAR_CARTA":
            return state.filter((c)=> c!== action.carta)
                
    }
  }
  
  const [cartasC, dispatch] = useReducer(cartasReducer, [])
  const cartaControlador = {mazo:"", valor: "", numero: 0}
  const [state, setState] = useState(cartaControlador)
  
  const tirarCarta =  (mazo, numero, valor) =>{
        dispatch({
            type: "TIRAR_CARTA",
            mazo,
            numero,
            valor
        })
    }
    
  const pedirCarta = (e) =>{
        e.preventDefault()
        
        dispatch({
            type: "PEDIR_CARTA"
        })
    }
    const cartasActuales = cartas.map((carta, i)=>{
      return(
        <div className= "col-md-4" key={i}>
          <div className= "card mt-4">
            <div className = "card-header">
              <h3> Carta {i+1} </h3>
            </div>
            <div className= "card-body">
              <h3>Mazo: {carta.mazo}</h3>
              <h4>Número: {carta.numero}</h4>
              <h5>Valor: {carta.valor}</h5>
            </div>
            <div className="card-footer">
              <button type="button" onClick={tirarCarta(i)} className="btn btn-outline-danger">Tirar Carta</button>
            </div>
          </div>
        </div>
        );
    });
    return (
      <div>
        <nav className = "navbar navbar-dark bg-dark">
          <a className = "navbar-brand" href="/">
            Número de Cartas <span className = "badge badge-pill badge-light">
                                {cartas.length}
                            </span>
          </a>
        </nav>
        <FormularioCarta onAgregarCarta={pedirCarta}/>
        <div> 
          {cartasActuales}
        </div>
      </div>
    );
}

export default App;
