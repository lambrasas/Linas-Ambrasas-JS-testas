/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let input=document.getElementById("search")
const submitButton=document.getElementById("submit-btn")
const resultsDiv = document.getElementById("output")
const form = document.querySelector("form")

form.onsubmit=function(event){
    event.preventDefault();

    let kg=input.value;

    let pounds = kg*2.2046;
    let grams = kg*1000;
    let ounces =kg*35.274;

    resultsDiv.innerHTML=`
    <p>${kg} kg = ${pounds.toFixed(2)} pounds</p>
    <p>${kg} kg = ${grams.toFixed(2)} grams</p>
    <p>${kg} kg = ${ounces.toFixed(2)} ounces</p>`;
}