
import { LitElement, html, css } from 'lit-element';

class MyCounter extends LitElement {

    constructor() {
        super();
        this.counter = 0;
    }

    /*
    static get styles() {
        return css`...`
    }
    */

    static get properties() {
        return { 
            counter: Number 
        };
    }
    
    render() {
        return html`
            <div>
                <h2> Counter: ${counter}</h2>
            </div>
            <div>
                <button> +1 </button>
            </div>
        `
    }
}
customElements.define('my-counter', MyCounter);