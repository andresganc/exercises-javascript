
class ButtonWC extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <style>
            .btn {
                color: #1E88E5;
                background: light-gray;
                padding: 5px 15px;
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