import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import FormularioCarta from "./components/formularioCarta.jsx"

function App() {
    const [cartas, setCartas] = useState([])

    const tirarCarta = (id) => {
        setCartas([cartas.filter((carta, idx) => idx !== id)])

        Axios({
            method: 'post',
            url: 'http://3.23.131.19:8080/carta',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                titulo: id,
                mensaje: 'Hello post'
            }
        })
    }

    const agregarCarta = (carta) => {
        setCartas([...cartas, carta])
    }

    useEffect(() => {
        Axios({
            method: 'get',
            url: 'http://3.23.131.19:8080/cartas'
        }).then((res) => {
            setCartas({...res.data})
        })
    })

    const cartasActuales = cartas.map((carta, idx) => {
        return (
            <div className="col-md-4" key={idx}>
                <div className="card mt-4">
                    <div className="card-header">
                        <h3> Carta {idx + 1}</h3>
                    </div>
                    <div className="card-body">
                        <h3>Mazo: {carta.mazo}</h3>
                        <h4>Numero: {carta.numero}</h4>
                        <h5>Valor: {carta.valor}</h5>
                    </div>
                    <div className="card-footer">
                        <button type="button" onClick={() => tirarCarta(idx)} className="btn btn-danger">Tirar Carta</button>
                    </div>
                </div>
            </div>
        )
    })

    console.log(cartasActuales)

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    Número de Cartas <span className="badge badge-pill badge-light">
                        {cartas.length}
                    </span>
                </a>
            </nav>
            <FormularioCarta onAgregarCarta={agregarCarta}/>
            <div>
                {cartasActuales}
            </div>
        </div>
    )
}

export default App;
