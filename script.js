'use strict';

let myLeads = [];

// Input btn 
const inputBtn = document.getElementById("input-btn");
// input 
const inputEl = document.getElementById("input-el");

// list 
const ulEl = document.getElementById("ul-el");

// Persists input values across refreshes 
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

// function that saves input to array 
inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = " ";
  //save lead to local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  renderLeads();
});

// Function that renders out the input values 
function renderLeads(){
  let listItems = " ";
// For loop that logs/renders out input values
  for (let i = 0; i < myLeads.length; i++){
  listItems +=  `
    <li>
      <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
      </a>
    </li>
  `    
  }
  ulEl.innerHTML = listItems;
}





// Rendering out input values 
// 1. Create element
//2. set text content
// 3. append to ul
// for (let i = 0; i < myLeads.length; i++) {
//   const li = document.createElement("li")
//   li.textContent = myLeads[i]
//   ulEl.append(li)
// }


