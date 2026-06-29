// =============================
// Elements
// =============================

const temperature = document.getElementById("temperature");
const unit = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const rightText = document.querySelector(".right-text");

// =============================
// Change Unit Symbol
// =============================

unit.addEventListener("change", () => {

    if (unit.value === "celsius") {
        rightText.innerHTML = "°C";
    }

    else if (unit.value === "fahrenheit") {
        rightText.innerHTML = "°F";
    }

    else {
        rightText.innerHTML = "K";
    }

});

// =============================
// Convert Temperature
// =============================

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {

    const value = parseFloat(temperature.value);

    if (isNaN(value)) {

        result.innerHTML = `
            <span style="color:red;">
                Please enter a temperature.
            </span>
        `;

        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit.value === "celsius") {

        celsius = value;
        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;

    }

    else if (unit.value === "fahrenheit") {

        fahrenheit = value;
        celsius = (value - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    }

    else {

        kelvin = value;
        celsius = value - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    result.innerHTML = `
       <span>${celsius.toFixed(2)} °C</span>
       <span>=</span>
       <span class="orange">${fahrenheit.toFixed(2)} °F</span>
       <span>=</span>
       <span class="cyan">${kelvin.toFixed(2)} K</span>
       `;

}

// =============================
// Enter Key Support
// =============================

temperature.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        convertTemperature();

    }

});

// =============================
// Default Result
// =============================

result.innerHTML = `
    <span>0.00 °C</span>
    <span>=</span>
    <span class="orange">32.00 °F</span>
    <span>=</span>
    <span class="cyan">273.15 K</span>
`;