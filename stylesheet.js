 "use strict";

console.log("JS connected successfully");

const errorMesgEl = document.querySelector('.error_message');
const budgetInputEl = document.querySelector('.budget_input');
const expenseDescEl = document.querySelector('.expenses_input');   
const expenseAmountEl = document.querySelector('.expenses_amount');  
const tblRecordEl = document.querySelector('.tbl_data'); 
const CardsContainer = document.querySelector('.cards');  

//Cards content
const budgetCardEl = document.querySelector(".budget_card");
const expensesCardEl = document.querySelector(".expenses_card");
const balanceCardEl = document.querySelector(".balance_card");

let itemList = [];
let itemId = 0;

//========= Button Events =========

function btnEvents(){
    const btnBudgetCal = document.querySelector('#btn_budget');
    const btnExpensesCal = document.querySelector('#btn_expenses');

 //========= Budget Events =========
 btnBudgetCal.addEventListener("click",(e) => {
    e.preventDefault();
    budgetFun();
 });

 //========= Budget Events =========
 btnExpensesCal.addEventListener("click",(e) => {
    e.preventDefault();
    console.log("Expenses");
 });
}
 //========= Calling btn Events =======
  document.addEventListener("DOMContentLoaded", btnEvents);

  //========= Budget Functions =========
  function budgetFun(){
    const budgetValue = budgetInputEl.value;

    
    if(budgetValue == "" || budgetValue <= 0 ){
      errorMessage("Please Enter Your budget or More Than 0");
      return;
   }

   budgetCardEl.textContent = budgetValue;
}


//========================= Error Message Function ======================
function errorMessage(message){
   errorMesgEl.innerHTML =  <p>${message}</p>;
   errorMesgEl.classList.add("error");

   setTimeout(() => {
     errorMesgEl.classList.remove("error");
       }, 2500);
    }