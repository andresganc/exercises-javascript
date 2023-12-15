
class TodoListAdvanced extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        const props = [...this.attributes].map(props => {})
        console.log(props)
        this.state = {}
    }
}