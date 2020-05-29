import React,{Component} from 'react';

class FormularioCarta extends Component{
    constructor(){
        super();
        this.state = {
            mazo: "Corazones",
            numero: "",
            valor: ""
        };
       
    }
    
    handleInput=(e) =>{
      const {value, name} = e.target;
      this.setState({
        [name]:value
      });
    }
    
    handleSubmit=(e) =>{
      e.preventDefault()
      this.props.onAgregarCarta(this.state)
      console.log(this.state);
    }
    
    render(){
        console.log(this.state);
        return(
            <div className= "card">
                <form className= "card-body" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <select onChange={this.handleInput} name= "mazo" className="form-control" placeholder="Mazo">
                      <option>Corazones</option>
                      <option>Treboles</option>
                      <option>Espada</option>
                      <option>Diamantes</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input onChange={this.handleInput} type= "text" name= "numero" className="form-control" placeholder="Número"/>
                  </div>
                  <div className="form-group">
                    <input  onChange={this.handleInput} type= "number" name= "valor" className="form-control" placeholder="Valor"/>
                  </div>
                  <button type="submit" className="btn btn-primary"> Agregar Carta </button>
                </form>
            </div>
        );
    }
}

export default FormularioCarta;