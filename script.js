/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-unit")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let convertEl = document.getElementById("convert-btn")

convertEl.addEventListener("click", function() {
    if (inputEl.value === "" || inputEl.value <= 0) {}
    else {
        // Meter To Feet
        let meterToFeet = inputEl.value * 3.281
        let feetToMeter = inputEl.value / 3.281
        lengthEl.textContent = `
            ${inputEl.value} meters = ${meterToFeet.toFixed(3)} feet | ${inputEl.value} feet = ${feetToMeter.toFixed(3)} meters
        `
        // Liter To Gallon
        let literToGallon = inputEl.value * 0.264
        let GallonToLiter = inputEl.value / 0.264
        volumeEl.textContent = `
            ${inputEl.value} liters = ${literToGallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${GallonToLiter.toFixed(3)} liters
        `
        // Kilogram To Pound
        let kiloToPound = inputEl.value * 2.204
        let poundToKilo = inputEl.value / 2.204
        massEl.textContent = `
            ${inputEl.value} kilos = ${kiloToPound.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundToKilo.toFixed(3)} kilos
        `
    }
})