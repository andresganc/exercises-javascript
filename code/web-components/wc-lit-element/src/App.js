
import { LitElement, html, css } from 'lit-element';

class App extends LitElement {
    
    /*
    static get styles() {
        return css`...`
    }
    */

    static get properties() {
        return { 
            nombre: String,
            apellido: String 
        };
    }
    

    render() {
        return html`
            <h2> Web component - ${nombre} ${apellido} </h2>
            `
    }
}
customElements.define('app', App);