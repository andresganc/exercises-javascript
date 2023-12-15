
class TodoListBasic extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    const props = [...this.attributes].map(props => {})
    console.log(props)
    this.state = {}
  
    this.saludo = 'Saludo NC'
  }

  setState() {
    
  }

  connectedCallback() {
    this.render()
    this.innerHTML = this.saludo
    this.innerHTML = this.changeInput
  }



  changeInput() {
    console.log('Hola')
  }

  render() {
    this.shadowRoot.innerHTML = `
      <h2>Todo List Basic</h2>
      <input type="text" placeholder='Add to list'/>
      <button type="button" onclick='${this.changeInput}'>+</button>

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

customElements.define('todo-list-basic', TodoListBasic);