
// JS
import { setupCounter } from './counter01'

// Styles
import styles from './Counter01.module.css'

// Images
import javascriptLogo from '../assets/images/javascript.svg'
import viteLogo from '/vite.svg'



document.querySelector('#id-counter-01').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class='${styles.logo}' alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="${styles.logo, styles.vanilla}" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="${styles.card}">
      <button id="counter" type="button"></button>
    </div>
    <p class="${styles.readDocs}">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
