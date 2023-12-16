
class TodoListAdvanced extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        const props = [...this.attributes].map(props => {})
        console.log(props)
        this.state = {}
    }

    connectedCallback() {
      this.render()
      this.innerHTML = this.saludo
      this.innerHTML = this.changeInput
      this.addEventListener('click', () => {
        alert('New Task')
      })

      this.addEventListener('click', this.changeInput)
    }

    static get observedAttributes() {
        return ['name', 'surname']
    }

    attributeChangedCallback() {
        switch(nameAtr) {
            case "name":
                this.name = newValue;
            break;
            case "surname":
                this.surname = newValue;
            break;
        }
    }

    setState() {
    
    }
  
    changeInput() {
      console.log('Hola')
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <h2>Todo List Basic</h2>
        <input type="text" placeholder='Add to list'/>
        <button id='buttonTask' type="button">+</button>
  
        <div>
          <h4>Task List</h4>
        </div>
      `
    }
  
    static get styles() {
      return `
        :host {
          display: block;
          justify-content: center;
        }
      `
    }
}

customElements.define('todo-list-advanced', TodoListAdvanced)