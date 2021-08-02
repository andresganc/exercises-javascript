
class ButtonWC extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
            <style>
                .main {
                    color: #ffff;
                    background-color: #2979FF;
                    padding: .5rem 1.5rem;
                    border-radius: 5px;
                    border: none;
                    cursor: pointer;
                    outline: none;
                    transition: .2s;
                }

                .main:hover {
                    background-color: #448AFF;
                }
            </style>

            <button class='main'>
                <slot></slot>
            </button>
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