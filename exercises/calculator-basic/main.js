import "./css/calculator.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<div class='calculator'>

<div class='display'>
  <div class='display__top'>
    <h3> 0 </h3>
  </div>

  <div class='display__bottom'>
    <h1> 0 </h1>
  </div>
</div >

<div class='buttons'>

  <div id='btn-ac' name='btn-ac' class='buttons__btn'>AC</div>
  <div class='buttons__btn'>+/-</div>
  <div class='buttons__btn'>%</div>
  <div class='buttons__btn-operator'>/</div>
  <div id='btn-1' name='btn-7' class='buttons__btn'>7</div>
  <div id='btn-1' name='btn-8' class='buttons__btn'>8</div>
  <div id='btn-1' name='btn-9' class='buttons__btn'>9</div>
  <div class='buttons__btn-operator'>X</div>
  <div id='btn-1' name='btn-4' class='buttons__btn'>4</div>
  <div id='btn-1' name='btn-5' class='buttons__btn'>5</div>
  <div id='btn-1' name='btn-6' class='buttons__btn'>6</div>
  <div class='buttons__btn-operator'>-</div>
  <div id='btn-1' name='btn-1' class='buttons__btn'>1</div>
  <div id='btn-2' name='btn-2' class='buttons__btn'>2</div>
  <div id='btn-1' name='btn-1' class='buttons__btn'>3</div>
  <div class='buttons__btn-operator'>+</div>
  <div class='buttons__btn'>0</div>
  <div class='buttons__btn'>0</div>
  <div class='buttons__btn'>,</div>
  <div class='buttons__btn-operator'>=</div>

</div>
  
</div>
`;

setupCounter(document.querySelector("#counter"));