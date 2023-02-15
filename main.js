import './style.css'
//import events from './events'
import { Events } from './events'


document.querySelector('#app').innerHTML = `
 
  
  <div id="main">
  <div id="options">
  <label>
  <input id="one" name="radio" type="radio""/>
      2020
  </label>
  <label>
  <input id="two" name="radio" type="radio"/>
      2021
  </label>
  <label>
  <input id="three" name="radio" type="radio"/>
      2022
  </label>
</div>
  <div id="root">
 
</div>
  </div>
 
`
  new Events()
  


