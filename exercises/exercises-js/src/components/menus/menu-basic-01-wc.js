
class MenuBasic01Wc extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
        <style>
            .menu {
                display: flex;
                justify-content: space-between;
                color: #ffff;
                background-color: #1565C0;
                padding: .1rem .5rem;
                flex-flow: row wrap;
            }

            .menu--logo {
                
            }

            .menu--ul {
                display: flex;  
            }

            .menu--icon {
                display: inline-block;
                vertical-align: text-bottom;
                margin-right: .3rem
            }

            .menu--a {
                color: #fff;
                text-decoration: none !important;

                list-style: none;
                margin-left: .1rem;
                margin-right: .1rem;
                border-radius: .3rem;
                padding: .6rem 1rem;
                cursor: pointer;
                transition: .5s
            }

            .menu--a:hover {
                background-color: #757575;
            }

        </style>

        <nav class='menu'>
            <slot></slot>
            <ul class='menu--logo'>
                <image src='./src/assets/img/ts-logo-black.png' width='35'>
            </ul>

            <ul class='menu--ul'>
                <a class="menu--a" href="index.html">
                    <img class='menu--icon' src='./src/assets/img/home-solid-white.svg' width='24'> 
                    Inicio
                </a>
                <a class="menu--a" href="exercises-basic.html">
                    <img class='menu--icon' src='./src/assets/img/puzzle-white.svg' width='24'>
                    Exercises
                </a>
                <a class="menu--a" href="exercises-medium.html">
                    <img class='menu--icon' src='./src/assets/img/test-white.svg' width='24'>
                    Tests
                </a>
                <a class="menu--a" href="exercises-avanced.html">
                    <img class='menu--icon' src='./src/assets/img/info-button-white.svg' width='24'>
                    About as 
                </a>
            </ul>

            <ul>
                <input placeholder='Buscar'></input>
            </ul>
        </nav>
        
        `
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('menu-basic-01-wc', MenuBasic01Wc);