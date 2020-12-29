// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  // Add HTML that includes the JSON data
                  div.innerHTML = `
                  <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[0].name}</li>
                     <li>Diameter: ${json[0].diameter}</li>
                     <li>Star: ${json[0].star}</li>
                     <li>Distance from Earth: ${json[0].distance}</li>
                     <li>Number of Moons: ${json[0].moons}</li>
                  </ol>
                  <img src="${json[0].image}">
                  `;
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
     

      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");


      
      

      if(!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)){
         alert("Please enter a valid entry");
         event.preventDefault();
      }

      if(isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("All fields are required!");
         event.preventDefault();
      }
      if(fuelLevelInput.value < 10000 ){
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         fuelStatus.innerHTML = "There is not enough fuel for the journey";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready`;
         
      } else {
         fuelStatus.innerHTML = "There is enough fuel for takeoff";
       }
        if(cargoMassInput.value > 10000){
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready`;
         faultyItems.style.visibility = "visible";
         

         
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

      }else {
         cargoStatus.innerHTML = "There is enough mass for takeof";
      }
      if(fuelLevelInput.value >= 10000 && cargoMassInput.value < 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready`;
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo is ready";
         fuelStatus.innerHTML = "There is enough fuel for takeoff";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
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
