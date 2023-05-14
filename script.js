let resultado = 1;
let grau;

function celsiusFahrenheit() {
    resultado = ((grau * 1.8) + 32);
}

function celsiusKelvin() {
    resultado = (grau + 273.15);
}

function fahrenheitCelsius() {
    resultado = ((grau - 32) / 1.8);
}

function fahrenheitKelvin() {
    resultado = ((grau + 459.67) / 1.8);
}

function kelvinCelsius() {
    resultado = (grau - 273.15);
}

function kelvinFahrenheit() {
    resultado = ((grau * 1.8) - 459.67);
}

function converterTemperatura() {
    let grau = parseFloat(document.getElementById("medida").value);
    let inicial = document.getElementById("inicial").value;
    let final = document.getElementById("final").value;


    if (inicial === "celsius") {
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