const celsiusEl = document.getElementById('celsius')
const farenEl = document.getElementById('farenheit')
const kelvinEl = document.getElementById('kelvin')

//function to calculate the temperatures
function calTemp(event) {
   const currentValue = + event.target.value

//using switch case to change base on the currentValue
switch (event.target.name) {
   case 'celsius':
      kelvinEl.value =(currentValue + 273.15).toFixed(2)
      farenEl.value =(currentValue * (9/5) + 32).toFixed(2)
      break;
   case 'farenheit':
      celsiusEl.value = (currentValue - 32 / (9/5) ).toFixed(2)
      kelvinEl.value = ((currentValue - 32) / (9/5) + 273.15).toFixed(2)
   case 'kelvin':
      celsiusEl.value = (currentValue - 273.15).toFixed(2)
      farenEl.value =((currentValue - 273.15 ) * (9/5)+ 32 ).toFixed(2)
   default:
      break;
}
}