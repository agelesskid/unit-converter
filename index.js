const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-button")
const resultBlock = document.getElementById("result-block")
const alert = document.getElementById("alert")
const lengthDesc = document.getElementById("length-description")
const volumeDesc = document.getElementById("volume-description")
const massDesc = document.getElementById("mass-description")


function convertValues(value){
    if(isNaN(value) || !value){
        alert.innerHTML = "Type the number"
    } else {
        let feet = value*3.281
        let meters = value/3.281
        let gallons = value*0.264
        let liters = value/0.264
        let pounds = value*2.204
        let kilos = value/2.204

        let lengthStr = `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meters.toFixed(3)} meters`
        let volumeStr = `${value} liters = ${gallons.toFixed(3)} gallons | ${value} gallons = ${liters.toFixed(3)} liters`
        let massStr = `${value} kilos = ${pounds.toFixed(3)} pounds | ${value} pounds = ${kilos.toFixed(3)} kilos`

        lengthDesc.innerHTML = lengthStr
        volumeDesc.innerHTML = volumeStr
        massDesc.innerHTML = massStr

        alert.innerHTML = ""
    }
    
}

convertBtn.addEventListener("click", function() {
    convertValues(numberInput.value)
})

numberInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter"){
        convertValues(numberInput.value)
    }
})
