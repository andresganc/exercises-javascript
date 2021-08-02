
class MenuBasicVertical01Wc extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <style>
            .main {
                background-image: url('./assets/img/bg-01.jpg');
                background-repeat: round;
                height: 97vh;
            }

            .submain {
                justify-content: center;
                margin: auto;
                height: 97vh;
                color: #ffff;
                background-color: #424242;
                background: linear-gradient(160deg, #212121, #424242, #616161 );
                filter: opacity(92%);
                padding: .8rem .8rem;
            }


            .main--header {
                display: grid;
                justify-content: center;
                margin-top: .5rem;
            }

            .main--header-logo {
                display: inline-block;
                vertical-align: text-bottom;
                margin-right: .5rem;
            }

            .main--header-title {
                display: inline-block;
            }


            .main--profile {
                display: grid;
                justify-content: center;
                margin-top: .5rem;
            }

            .main--profile-photo {
                display: inline-block;
                vertical-align: middle;
                margin-right: .5rem;
            }

            .main--profile-name {
                display: inline-block;
            }

            .main--profile-name {
                display: inline-block;
            }

            .main--profile-data {
                text-align: center;
                font-size: .9rem;
            }


            .main--menu {
                margin-top: .8rem;
            }

            .main--menu-ul {
                
            }

            .main--menu-a {
                display: block;
                color: #ffff;
                text-decoration: none;
                padding-left: 1rem;
                border-radius: .3rem;
                padding-top: .8rem; 
                padding-bottom: .8rem; 
                cursor: pointer;
                transition: .5s
            }

            .main--menu-a:hover {
                background-color: #757575;
                background-color: #2979FF;
            }

            .main--menu-icon {
                display: inline-block;
                vertical-align: text-bottom;
                margin-right: .3rem
            }

        </style>

        <div class='main'>
            <slot></slot>

            <div class='submain'>

            <div class='main--header'>
            <div>
                <image class='main--header-logo' src='./src/assets/img/typescript-logo.png' width='30'>
                <h3 class='main--header-title'> TYPESCRIPT <h3>
            </div>
        </div>

        <hr>

        <div class='main--profile'>
            
            <div>
                <image class='main--profile-photo' src='./src/assets/img/user-circle-solid.svg' width='30'>
                <p class='main--profile-data'> Mi perfil <p>
                <p class='main--profile-data'> Editar perfil <p>
                <p class='main--profile-data'> Configuracion <p>
            </div>
        </div>

        <hr>

        <div class='main--menu'>
            <nav class='main--menu-nav'>
                
                <ul class='main--menu-ul'>
                    
                    <a class="main--menu-a" href="index.html">
                        <img class='main--menu-icon' src='./src/assets/img/home-solid.svg' width='24'> 
                        DASHBOARD 
                    </a>
                </ul>

                <ul class='main--menu-ul'>
                    <a class="main--menu-a">
                        <img class='main--menu-icon' src='./src/assets/img/puzzle.svg' width='22'>
                        EXERCISES
                    </a>
                    <ul class='main--menu-ul'>
                        <a class="main--menu-a" href="exercises-basic.html">
                            <img class='main--menu-icon' src='./src/assets/img/one.svg' width='20'>
                            Basic
                        </a>
                        <a class="main--menu-a" href="exercises-medium.html">
                            <img class='main--menu-icon' src='./src/assets/img/two.svg' width='20'>
                            Medium
                        </a>
                        <a class="main--menu-a" href="exercises-avanced.html">
                            <img class='main--menu-icon' src='./src/assets/img/three.svg' width='20'>
                            Avanced
                        </a>
                    </ul>
                </ul>

                <ul class='main--menu-ul'>
                    <a class="main--menu-a">
                        <img class='main--menu-icon' src='./src/assets/img/test-blue.svg' width='22'>
                        TESTS
                    </a>
                    <ul class='main--menu-ul'>
                        <a class="main--menu-a" href="exercises-basic.html">
                            <img class='main--menu-icon' src='./src/assets/img/one.svg' width='20'>
                            Basic
                        </a>
                        <a class="main--menu-a" href="exercises-medium.html">
                            <img class='main--menu-icon' src='./src/assets/img/two.svg' width='20'>
                            Medium
                        </a>
                        <a class="main--menu-a" href="exercises-avanced.html">
                            <img class='main--menu-icon' src='./src/assets/img/three.svg' width='20'>
                            Avanced
                        </a>
                    </ul>
                </ul>

                <ul class='main--menu-ul'>
                    <a class="main--menu-a" href="index.html">
                    <img class='main--menu-icon' src='./src/assets/img/info-button.svg' width='20'>
                    ABOUT AS
                    </a>
                </ul>
            </nav>
        </div>
            </div>

            

            
            
        </div>

        
        
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

window.customElements.define('menu-basic-vertical-01-wc', MenuBasicVertical01Wc);