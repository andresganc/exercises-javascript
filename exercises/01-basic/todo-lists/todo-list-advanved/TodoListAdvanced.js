
class TodoListAdvanced extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        const props = [...this.attributes].map(props => {})
        console.log(props)
        this.state = {
          counter: 0
        }
    }

    connectedCallback() {
      this.render()
      this.innerHTML = this.saludo
      this.innerHTML = this.changeInput

      let buttonAddTask = this.querySelector('#buttonAddTask')
      buttonAddTask.addEventListener('click', () => {
         window.alert('New Task')
      })


      let inputText = this.querySelector('#inputText')
      inputText.addEventListener('change', () => {
        this.state.counter = inputText
        console.log(this.state.counter)
      })
    }

    static get observedAttbibutes() {
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
      // this.state.counter = 
      // const displayCurrent = document.createElement('h1')
      // displayCurrent.innerHTML = numberCurrent
      // containertDisplayCurrent.appendChild(displayCurrent)
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <h2>Todo List Advanced</h2>
        <input id='inputText' type="text" placeholder='Add to list'/>
        <button id='buttonAddTask' type="button">+</button>
  
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