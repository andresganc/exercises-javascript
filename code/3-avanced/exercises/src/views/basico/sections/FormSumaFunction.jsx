

import React from 'react';

// Componentes - Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// Styles - Material UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // Estilos TextFields
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    // Estilos Button
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  rootCard: {
    minWidth: 275,
    maxWidth: 400,
    margin: '15px'
  },
}));


// Styles - FormSuma
const divFormSuma = {
  display: 'inlineBlock'
  //alignContent: 'center',
  //justifyContent: 'center'
}


function FormSuma() {
    const classes = useStyles();

    
    return (
        <div>
            <Card className={classes.rootCard}>
            <CardContent>
            <form className={classes.root} action="">
                
                <div style={divFormSuma}>
                <label htmlFor=""> SUMAR 2 NUMEROS</label>
                </div>

                <div style={divFormSuma}>
                <TextField
                id="filled-number"
                label="Numero 1"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                />
                </div>

                <div style={divFormSuma}>
                <TextField
                id="filled-number"
                label="Numero 2"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                />
                </div>

                <label htmlFor="">RESULTADO: </label>
                <label htmlFor=""> <strong> 0 </strong>  </label>

                <div style={divFormSuma}>
                <Button variant="contained" color="primary">
                  Calcular
                </Button>
                </div>


            </form>
            </CardContent>
            </Card>
        </div>
    );

}

export default FormSuma;