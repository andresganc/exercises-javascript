
class TodoListBasic extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
      <h2>Todo List Basic</h2>
    `
  }

  static get styles() {
    return `
      :host {
        display: block;
      }
    `
  }
}

customElements.define('todo-list-basic', TodoListBasic);