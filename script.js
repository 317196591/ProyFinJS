function convertTemperature(){
    let numeroTemp = document.getElementById("temperature-input")
    let resultadoTemp = document.getElementById("temperature-result")
    let uniTemp = document.getElementById("temperature-unit")
    if(uniTemp.value == 'celsius'){
        resultadoTemp.textContent = 'Resultado: '+numeroTemp.value+'°C'
    }
    if(uniTemp.value=='fahrenheit'){
        let resultado = (((9/5)*parseFloat(numeroTemp.value))+32)
        resultadoTemp.textContent = 'Resultado: '+resultado.toString()+'°F'
    }
    if(uniTemp.value=='kelvin'){
        let resultado = (parseFloat(numeroTemp.value) + 273.15)
        resultadoTemp.textContent = 'Resultado: '+resultado.toString()+'°K'
    }
}
function convertWeight(){
    let numeroPeso = document.getElementById('weight-input')
    let resultadoPeso = document.getElementById('weight-result')
    let uniPeso = document.getElementById('weight-unit')
    if(parseFloat(numeroPeso.value)<0){
        resultadoPeso.style.color = 'red'
        resultadoPeso.textContent = 'Error: Valor no válido'
    }
    else{
        resultadoPeso.style.color = 'black'
        if(uniPeso.value == 'kilograms'){
            resultadoPeso.textContent = 'Resultado: '+numeroPeso.value+' kg'
        }
        if(uniPeso.value == 'grams'){
            let resultado = parseFloat(numeroPeso.value)*1000
            resultadoPeso.textContent = 'Resultado: '+resultado.toString()+' g'
        }
        if(uniPeso.value == 'milligrams'){
            let resultado = parseFloat(numeroPeso.value)*1000000
            resultadoPeso.textContent = 'Resultado: '+resultado.toString()+' mg'
        }
        if(uniPeso.value == 'pounds'){
            let resultado = parseFloat(numeroPeso.value)/0.453592
            resultadoPeso.textContent = 'Resultado: '+resultado.toString()+' lb'
        }
        if(uniPeso.value = 'ounces'){
            let resultado = parseFloat(numeroPeso.value)*35.2739619
            resultadoPeso.textContent = 'Resultado: '+resultado.toString()+' oz'
        }
    }
}
function convertVolume(){
    let numeroVol = document.getElementById("volume-input")
    let resultadoVol = document.getElementById("volume-result")
    let uniVol = document.getElementById("volume-unit")
    if(parseFloat(numeroVol.value)<0){
        resultadoVol.style.color = 'red'
        resultadoVol.textContent = 'Error: Valor no válido'
    }
    else{
        resultadoVol.style.color = 'black'
        if(uniVol.value=='liters'){
            resultadoVol.textContent = 'Resultado: '+numeroVol.value+' L'
        }
        if(uniVol.value=='milliliters'){
            let resultado = parseFloat(numeroVol.value)*1000
            resultadoVol.textContent = 'Resultado: '+resultado.toString()+' ml'
        }
        if(uniVol.value=='gallons'){
            let resultado = parseFloat(numeroVol.value)/3.78541
            resultadoVol.textContent = 'Resultado: '+resultado.toString()+' galones'
        }
        if(uniVol.value=='quarts'){
            let resultado = parseFloat(numeroVol.value)*1.0567
            resultadoVol.textContent = 'Resultado: '+resultado.toString()+' cuartos'
        }
        if(uniVol.value=='pints'){
            let resultado = parseFloat(numeroVol.value)*2.1134
            resultadoVol.textContent = 'Resultado: '+resultado.toString()+' pintas'
        }
        if(uniVol.value=='cups'){
            let resultado = parseFloat(numeroVol.value)*4
            resultadoVol.textContent = 'Resultado: '+resultado.toString()+' tazas'
        }
        if(uniVol.value=="fluid ounces"){
            let resultado = parseFloat(numeroVol.value)*33.8140226
            resultadoVol.textContent = 'Resultado: '+resultado.toString()+' fl oz'
        }
    }
}
function convertLength(){
    let numeroLong = document.getElementById("length-input")
    let resultadoLong = document.getElementById("length-result")
    let uniLong = document.getElementById("length-unit")
    if(parseFloat(numeroLong.value)<0){
        resultadoLong.style.color = 'red'
        resultadoLong.textContent = 'Error: Valor no válido'
    }
    else{
        resultadoLong.style.color = 'black'
        if(uniLong.value=="meters"){
            resultadoLong.textContent = 'Resultado: '+numeroLong.value+' m'
        }
        if(uniLong.value=='kilometers'){
            let resultado = parseFloat(numeroLong.value)/1000
            resultadoLong.textContent = 'Resultado: '+resultado.toString()+' km'
        }
        if(uniLong.value=='centimeters'){
            let resultado = parseFloat(numeroLong.value)*100
            resultadoLong.textContent = 'Resultado: '+resultado.toString()+' cm'
        }
        if(uniLong.value=='millimeters'){
            let resultado = parseFloat(numeroLong.value)*1000
            resultadoLong.textContent = 'Resultado: '+resultado.toString()+' mm'
        }
        if(uniLong.value=='miles'){
            let resultado = parseFloat(numeroLong.value)/1609.344
            resultadoLong.textContent = 'Resultado: '+resultado.toString()+' mi'
        }
        if(uniLong.value=='yards'){
            let resultado = parseFloat(numeroLong.value)/0.9144
            resultadoLong.textContent = 'Resultado: '+resultado.toString()+' yd'
        }
        if(uniLong.value=='feet'){
            let resultado = parseFloat(numeroLong.value)/0.3048
            resultadoLong.textContent = 'Resultado: '+resultado.toString()+' ft'
        }
        if(uniLong.value=='inches'){
            let resultado = parseFloat(numeroLong.value)/0.0254
            resultadoLong.textContent = 'Resultado: '+resultado.toString()+' in'
        }
    }
}