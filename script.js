'use strict';

let myLeads = [];

// Input btn 
const inputBtn = document.getElementById("input-btn");
// input 
const inputEl = document.getElementById("input-el");

// list 
const ulEl = document.getElementById("ul-el");

//delete btn
const deleteBtn = document.getElementById("delete-btn");

// Persists input values across refreshes 
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
};

// Refactored renderLeads() function 
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

// function renderLeads(){
//   let listItems = " ";
// // For loop that logs/renders out input values
//   for (let i = 0; i < myLeads.length; i++){
//   listItems +=  `
//     <li>
//       <a target='_blank' href='${myLeads[i]}'>
//         ${myLeads[i]}
//       </a>
//     </li>
//   `    
//   }
//   ulEl.innerHTML = listItems;
// }

// Delete lists from local Storage, array and DOM 
deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads= [];
  render(myLeads);
});


// function that saves input to array 
inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  //clears input after every value
  inputEl.value = " ";
  //save lead to local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render(myLeads);
});

// Function that renders out the input values 



// Rendering out input values 
// 1. Create element
//2. set text content
// 3. append to ul
// for (let i = 0; i < myLeads.length; i++) {
//   const li = document.createElement("li")
//   li.textContent = myLeads[i]
//   ulEl.append(li)
// }


