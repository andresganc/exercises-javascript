

class ComponentAttributesWC extends HTMLElement {
    constructor() {
        super();
        this.name
        this.surname
    }

    static get observedAttributes() {
        return ['name', 'surname']
    }

    connectedCallback() {
        this.innerHTML = `
        <div> 
            <h4> Hola </h4>
            <p> ${this.name} ${this.surname} </p>
        </div>
        `
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(nameAtr, oldVal, newVal) {
        switch (nameAtr) {
            case 'name':
                this.name = newVal
                break;
        
            case 'surname':
                this.surname = newVal
                break;
        }
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('component-attributes-wc', ComponentAttributesWC);

