'use strict';

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// Input btn 
const inputBtn = document.getElementById("input-btn");
// input 
const inputEl = document.getElementById("input-el").value;

// list 
const ulEl = document.getElementById("ul-el");

// function that saves input to array 
inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl);
  console.log(myLeads);
});


// For loop that logs/renders out input values
for (let i = 0; i < myLeads.length; i++){
  ulEl.innerHTML+= "<li>" + myLeads[i] + "</li>"
}


