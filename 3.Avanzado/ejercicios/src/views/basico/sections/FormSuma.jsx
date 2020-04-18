
import React from 'react';

// Componentes - Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

// Iconos - Material UI
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';


// Styles - NC
const stylesFormSuma = {

    card: {
        width: '20%'
    },

    button: {
        margin: '10px'
    }


}


class FormSuma extends React.Component {

    state = {

    }

    render(){
        
        return(
            <div>
                <Card style={stylesFormSuma.card} >
                    <CardContent>
                        <form action="" >
                            <h3> SUMAR 2 NUMEROS </h3>
                            <br />
                            <TextField
                                id="filled-number"
                                label="Numero 1"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                placeholder="Ingrese el primer numero"
                            />
                            <br /><br />
                            <TextField
                                id="filled-number"
                                label="Numero 2"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                placeholder="Ingrese el segudo numero"
                            />
                            <br /><br />
                            <h4>RESULTADO : </h4> <h3> 0 </h3>

                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<DeleteIcon />}
                                style={stylesFormSuma.button}
                            >
                                Borrar
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<AddIcon />}
                                style={stylesFormSuma.button}
                            >
                                Sumar
                            </Button>
                        </form>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </div>
        );

    }

}

export default FormSuma;