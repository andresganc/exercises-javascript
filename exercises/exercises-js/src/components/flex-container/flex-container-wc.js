
class FlexContainerWc extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
        <style>
            .main {
                display: flex;
            }
        </style>
        <div class='main'>
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

window.customElements.define('flex-container-wc', FlexContainerWc);