'use strict';

let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

// function saveInput(){
//   inputBtn = console.log("button clicked");
// }

inputBtn.addEventListener("click", function(){
  console.log("Button clicked!");
  myLeads.push("www.awesomelead.com");
  console.log(myLeads);
});



