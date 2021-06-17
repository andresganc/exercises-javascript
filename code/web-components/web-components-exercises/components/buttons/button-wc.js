
class ButtonWC extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <style>

            :root {
                --button-bgcolor: #2979FF;
                --button-textcolor: #ffff;   
            }

            .btn {
                color: var(--button-textcolor);
                background-color: var(--button-gbcolor);
                padding: 5px 15px;
                border-radius: 5px;
            }

        </style>

        <button class='btn'> Guardar </button>
        `
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('button-wc', ButtonWC);