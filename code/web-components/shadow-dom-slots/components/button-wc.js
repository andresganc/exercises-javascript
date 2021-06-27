
class ButtonWC extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
            <style>
                host {
                    --button-textcolor: #ffff;  
                    --button-bgcolor: #2979FF;  
                }

                .btn {
                    color: #ffff;
                    background-color: #2979FF;
                    padding: 8px 20px;
                    border-radius: 5px;
                    border-style: none;
                    cursor: pointer;
                    text-transform: uppercase;
                }

                .btn:hover {
                    background-color: #448AFF;
                    transition: .2s;
                }
            </style>

            <button class='btn'> Shadow Dom </button>
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