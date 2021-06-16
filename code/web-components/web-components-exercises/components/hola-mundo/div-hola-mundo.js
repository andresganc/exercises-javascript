
class DivHolaMundo extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <div> 
                Div hola mundo
            </div>`;
        this.style.color = "red";
    }
}

window.customElements.define("div-hola-mundo", DivHolaMundo);