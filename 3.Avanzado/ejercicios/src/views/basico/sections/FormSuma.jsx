
import React from 'react';

// Componentes - Material UI

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Styles - Material UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },

}));



class FormSuma extends React.Component {

  state = {
    numero1: "0",
    numero2: "0",
    resultado: "0"
  }


  // Metodo Sumar
  sumar = e => {
    var num1 = this.state.numero1;
    var num2 = this.state.numero2;

    var resul = (parseInt(num1) + parseInt(num2));

    this.setState({
      resultado: resul
    });

    //console.log(this.state.resultado);
    //window.alert("La suma es State:  " + this.state.resultado)
    //window.alert("La suma es: " + resul);
    //e.preventDefault();
  }

  limpiar = e => {

    this.setState({
      numero1: 0,
      numero2: 0,
      resultado: 0
    });

  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {

    return (

      <div>
        <form className={useStyles.root} action={this.sumar}>
          <label htmlFor=""> SUMAR 2 NUMEROS</label>

          <TextField
            id="numero1"
            label="Numero 1"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            onChange={this.onChange}
            value={this.state.numero1}
          />

          <TextField
            id="numero2"
            label="Numero 2"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            onChange={this.onChange}
            value={this.state.numero2}
          />

          <label htmlFor=""> RESULTADO : </label>
          <h2> { this.state.resultado } </h2>

          <Button onClick={this.limpiar} variant="contained" color="primary">
            BORRAR
          </Button>

          <Button onClick={this.sumar} variant="contained" color="primary">
            CALCULAR
          </Button>

        </form>

        

      </div>
    );

  }

}


export default FormSuma;