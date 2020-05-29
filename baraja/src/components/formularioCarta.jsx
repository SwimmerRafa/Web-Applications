import React, {useState} from 'react';

const FormularioCarta = (props) => {

    const cartasControlador = {mazo: "Corazones", valor: "", numero: ""}
    const [state, setState] = useState(cartasControlador)

    const handleInput = (evt) => {
        evt.preventDefault()
        const {name, value} = evt.target
        setState(prevState => ({...prevState, [name]: value}))
        // [name] => [evt.target.name] => ['valor']: value | state[name] == state.name
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.onAgregarCarta(state)
    }

    return (
        <div>
            <div className="card">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <select value={state.mazo} onChange={(evt) => handleInput(evt)} name="mazo" className="form-control" placeholder="Mazo">
                            <option>Corazones</option>
                            <option>Treboles</option>
                            <option>Espada</option>
                            <option>Diamantes</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input value={state.numero} onChange={(evt) => handleInput(evt)} type="text" name="numero" className="form-control"
                               placeholder="Número"/>
                    </div>
                    <div className="form-group">
                        <input value={state.valor} onChange={(evt) => handleInput(evt)} type="number" name="valor" className="form-control"
                               placeholder="Valor"/>
                    </div>
                    <button type="submit" className="btn btn-primary"> Agregar Carta</button>
                </form>
            </div>
        </div>
    )

}


export default FormularioCarta