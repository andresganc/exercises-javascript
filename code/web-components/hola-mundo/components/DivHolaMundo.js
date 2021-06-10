
class DivHolaMundo extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<div> 
        Component with HTML
        </div>`;
        this.style.color = "red";
    }
}

window.customElements.define("div-hola-mundo", DivHolaMundo);