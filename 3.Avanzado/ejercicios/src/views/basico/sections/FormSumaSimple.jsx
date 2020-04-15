
import React from 'react';

class FormSumaSimple extends React.Component {

    state = {
        numero1: 0,
        numero2: 0,
        resultado: 0
    }

    

    sumar = (e) => {
        
        this.state.resultado = ( this.state.numero1 + this.state.numero2 ) ;

        this.setState({
            resultado: this.state.resultado
        })

        e.preventDefault();
        //window.alert ("El resultado es : " + this.state.resultado)

    }

    onChange = (e) => {
        
        this.setState({
            [e.target.id] : parseInt(e.target.value)
        });

    }

    borrar = (e) => {

        this.setState({
            numero1: 0,
            numero2: 0,
            resultado: 0
        });

        e.preventDefault();

    }


    render(){

        return(
            <div>
                <form action="">
                    <label htmlFor="">SUMAR 2 NUMEROS</label>
                    <br/><br/>
                    <label htmlFor="">Numero 1 : </label>
                    <br/>
                    <input id="numero1" type="number" placeholder="Ingrese el primer numero" value={ this.state.numero1 } onChange={this.onChange} />
                    <br/><br/>
                    <label htmlFor="">Numero 2 : </label>
                    <br/>
                    <input id="numero2" type="number" placeholder="Ingrese el segundo numero" value={ this.state.numero2 } onChange={this.onChange} />
                    <br/><br/>
                    <label htmlFor="">RESULTADO : </label>
                    <label htmlFor=""> <strong> {this.state.resultado} </strong> </label>
                    <br/><br/>
                    <button onClick={this.borrar} > BORRAR </button>
                    <button onClick={this.sumar} > SUMAR </button>
                </form>
            </div>
        );

    }
}

export default FormSumaSimple;