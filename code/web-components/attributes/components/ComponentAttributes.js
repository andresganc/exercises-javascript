
class ComponentAttributes extends HTMLElement {
    constructor() {
        super();
    }

    attributeChanged

    connectedCallback() {
        this.innerHTML = `
        <div> 
        Component with attributes
        </div>
        `
    }
}

