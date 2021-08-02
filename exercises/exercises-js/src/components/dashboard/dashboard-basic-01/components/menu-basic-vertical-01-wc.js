
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
                vertical-align: middle;
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
                border-radius: .3rem;
                padding-top: .8rem; 
                padding-bottom: .8rem; 
                cursor: pointer;
                transition: .5s
            }

            .main--menu-ul:hover {
                background-color: #757575;
                background-color: #2979FF;
            }

            .main--menu-li {
                list-style: none;
            }

            .main--menu-a {
                text-decoration: none;
            }


        </style>

        <div class='main'>
            <slot></slot>

            <div class='submain'>

            <div class='main--header'>
            <div>
                <image class='main--header-logo' src='https://bucket-nc-images.s3.amazonaws.com/nc/logos/nc/imagotipo/imagotipo-nc.png' width='35'>
                <h3 class='main--header-title'> NC DASHBOARD <h3>
            </div>
        </div>

        <hr>

        <div class='main--profile'>
            <div>
                <image class='main--profile-photo' src='https://bucket-nc-images.s3.amazonaws.com/nc/logos/nc/imagotipo/imagotipo-nc.png' width='35'>
                <p class='main--profile-name'> Marco Giraldo <p>
                <p class='main--profile-data'> Mi perfil <p>
                <p class='main--profile-data'> Editar perfil <p>
                <p class='main--profile-data'> Configuracion <p>
            </div>
        </div>

        <hr>

        <div class='main--menu'>
            <nav class='main--menu-nav'>
                
                <ul class='main--menu-ul'>
                    <li class="main--menu-li"><a> DASHBOARD </a></li> 
                </ul>

                <ul class='main--menu-ul'>
                    <li class="main--menu-li"><a> COMPONENTS </a></li>
                    <ul class='main--menu-ul'>
                        <li class="main--menu-li"><a class="main--menu-a"> Servicios </a> </li>
                        <li class="main--menu-li"><a class="main--menu-a"> Servicios </a> </li>
                    </ul>
                    
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