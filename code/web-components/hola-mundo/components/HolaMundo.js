
class HolaMundo extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = "Hola mundo";
        this.style.color = "blue";
    }
}

window.customElements.define("hola-mundo", HolaMundo);