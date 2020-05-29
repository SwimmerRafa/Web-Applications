import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import Baraja from "./component/Baraja"

function App(props) {
  //const [ncartas, setNcartas] = useState(props.nincial)
  //const [jugador, setJugador] = useState('')
  const [state, setState] = useState({
    ncartas: props.nincial,
    jugador: ""
  })
  
  useEffect(() =>{
    console.log("Effect componentDidMount!")
  },[])
  
   useEffect(() =>{
     if(state.jugador != ""){
       console.log("Effect componentDidUpdate!")
     }
  },[])
  
  return (
    <div>
      <input value={state.jugador} onChange={(e)=>setState({...state, jugador: e.target.value})}/>
      <p> Número de cartas: {state.ncartas} del jugador: {state.jugador}</p>
      <button onClick={()=>setState({...state, ncartas: state.ncartas + 1})}>PEDIR CARTA</button>
      <Baraja />
    </div>
  );
}

export default App;
