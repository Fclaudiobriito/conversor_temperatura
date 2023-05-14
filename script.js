function celsiusFahrenheit() {
    let resultado = ((30 * 1.8) + 32);
}

function celsiusKelvin() {
    let resultado = (grau + 273.15);
}

function fahrenheitCelsius() {
    let resultado = ((grau - 32) / 1.8);
}

function fahrenheitKelvin() {
    let resultado = ((grau + 459.67) / 1.8);
}

function kelvinCelsius() {
    let resultado = (grau - 273.15);
}

function kelvinFahrenheit() {
    let resultado = ((grau * 1.8) - 459.67);
}

function converterTemperatura(){
    let grau = parseFloat(document.getElementById("temperatura").value);
    let inicial = document.getElementById("inicial").value;
    let final = document.getElementById("final").value;
        if (incial === "celsius") {
            if (final === "fahrenheit") {
                celsiusFahrenheit();
            } else if (final === "kelvin") {
                celsiusKelvin();
            } else {
                resultado = grau; //Mesma unidade de medida ele vai retornar o mesmo valor inputado
            }
        } else if (inicial === "fahrenheit") {
            if (final === "celsius") {
                fahrenheitCelsius();
            } else if (final === "kelvin") {
                fahrenheitKelvin();
            } else {
                resultado = grau; //Mesma unidade de medida ele vai retornar o mesmo valor inputado
            }
        } else if (inicial === "kelvin") {
            if (final === "celsius") {
                kelvinCelsius();
            } else if (final === "fahrenheit") {
                kelvinFahrenheit();
            } else {
                resultado = grau; //Mesma unidade de medida ele vai retornar o mesmo valor inputado
            }
        }
    
    document.getElementById("resultado").textContent = resultado.toFixed(2);
}