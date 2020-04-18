import React from 'react';
import ReactDOM from 'react-dom';


import * as serviceWorker from './serviceWorker';

// Componentes
import FormSumaFunctions from './views/basico/sections/FormSumaFunction';
import FormSumaClases from './views/basico/sections/FormSumaClase';
import FormSumaSimple from './views/basico/sections/FormSumaSimple';
import FormSuma from './views/basico/sections/FormSuma';


ReactDOM.render(
  <React.StrictMode>
    <FormSuma />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
