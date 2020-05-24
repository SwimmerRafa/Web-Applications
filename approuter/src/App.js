/*
    Rafael Moreno, Ricardo Velazquez, Eric Gómez
*/

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"

//Agregar APrtida

function AgregarPartida(){
  return(
    <div>
      <h1>Agregar Partida</h1>
      <p>Con un formulario le pide al usuario su nombre y un id para crear la partida, con un boton que lo une a dicha partida</p>
      <NavLink to ="/partida" activeClassName = "isActive"> Jugar </NavLink>
    </div>
    )
}

function UnirsePartida(props){
  return(
    <div>
      <h1>Unirse Partida </h1>
      <p>Con un formulario le pide al usuario su nombre y un id para unirse a una partida ya existente, con un boton que lo une a dicha partida</p>
      <NavLink to ="/partida" activeClassName = "isActive"> Jugar </NavLink>
    </div>
    )
}

function Partida() {
  return (
    <h1>Partida</h1>
  );
}

function Presentacion() {
  return (
    <h1>Home</h1>
  );
}

function Encabezado(){
  return(
    <header>
      <NavLink to ="/" activeClassName = "isActive" exact> Presentacion</NavLink>
      <NavLink to ="/agregar-partida"activeClassName = "isActive"> Agregar Partida</NavLink>
      <NavLink to ="/unirse-partida"activeClassName = "isActive"> Unirse Partida</NavLink>
    </header>
    )
}

function e404(){
  return(
    <div>
      <h1> 404 </h1>
      <Link to="/">Ir a Inicio</Link>
    </div>
    )
}

function App(){
  return(
    <BrowserRouter>
    <Encabezado />
      <Switch>
        <Route path = "/" component = {Presentacion} exact/>
        <Route path = "/agregar-partida" component = {AgregarPartida} />
        <Route path = "/partida" component = {Partida} />
        <Route path = "/unirse-partida" render= {()=><UnirsePartida id="1" />} />
        <Route component= {e404}/>
      </Switch>
    </BrowserRouter>
    )
}

export default App;
