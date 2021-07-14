
class ContainerWC extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
            <style>
                .div-main {
                    display: grid;
                    justify-content: center;
                    width: 100hv;
                    background-color: #E0E0E0;
                    border-radius: 5px;
                }
            </style>

            <div class='div-main'>
                <slot></slot>
            </div>
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

window.customElements.define('container-wc', ContainerWC);