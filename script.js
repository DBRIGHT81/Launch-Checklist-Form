// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[number=fuelLevel]");
      let cargoMassInput = document.querySelector("input[number=cargoMass]");
      if(pilotNameInput.value === "" || copilotNameInput.value === ""){
         alert("All fields are required!");
      }
      if(isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("All fields are required!");
      }
      if(fuelLevelInput < 10000){
         alert("There is not enough fuel for the journey!");
         
      }
   })
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
