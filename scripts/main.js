import {mobileButton} from "./dom.js";

mobileButton.addEventListener('click', (e) => {
  //console.log(e.currentTarget.classList.add)
  e.currentTarget.classList.toggle("active");
})