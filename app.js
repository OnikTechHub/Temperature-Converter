const tempInput = document.getElementById("tempInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

// Function to check if all three fields are filled to enable Convert button
function validateForm() {
    const val = tempInput.value.trim();
    const from = fromUnit.value;
    const to = toUnit.value;

    if (val !== "" && from !== "" && to !== "") {
        convertBtn.removeAttribute("disabled");
    } else {
        convertBtn.setAttribute("disabled", "true");
    }
}

// Event listeners for inputs and dropdown changes
tempInput.addEventListener("input", validateForm);
fromUnit.addEventListener("change", validateForm);
toUnit.addEventListener("change", validateForm);

// Convert button click handler
convertBtn.addEventListener("click", () => {
    const temp = parseFloat(tempInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    let convertedTemp = temp;

    if (isNaN(temp)) return;

    // Conversion Logic
    if (from === to) {
        convertedTemp = temp;
    } else if (from === "Celsius") {
        if (to === "Fahrenheit") convertedTemp = (temp * 9/5) + 32;
        else if (to === "Kelvin") convertedTemp = temp + 273.15;
    } else if (from === "Fahrenheit") {
        if (to === "Celsius") convertedTemp = (temp - 32) * 5/9;
        else if (to === "Kelvin") convertedTemp = (temp - 32) * 5/9 + 273.15;
    } else if (from === "Kelvin") {
        if (to === "Celsius") convertedTemp = temp - 273.15;
        else if (to === "Fahrenheit") convertedTemp = (temp - 273.15) * 9/5 + 32;
    }

    // Format output to max 2 decimal places if needed
    const finalVal = Number.isInteger(convertedTemp) ? convertedTemp : convertedTemp.toFixed(1);

    // Display result matching the mockup text style
    resultText.innerText = `${temp} ${from} is ${finalVal} ${to}`;
    resultBox.style.display = "block";
});