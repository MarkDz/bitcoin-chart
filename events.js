import { chart } from "./chart.js";

export class Events {

  constructor(){
    let chartEmbed = document.querySelector("#root");

    document.querySelector("#one").addEventListener("click", function () {
      empty(chartEmbed);
  
      chart(2020);
    });
  
    document.querySelector("#two").addEventListener("click", function () {
      empty(chartEmbed);
      chart(2021);
    });
  
    document.querySelector("#three").addEventListener("click", function () {
      empty(chartEmbed);
      chart(2022);
    });
  
    function empty(element) {
      element.innerHTML = "";
    }
  
    window.addEventListener("load", (event) => {
      console.log("page is fully loaded");
      chart(2020);
    });

  }

}
