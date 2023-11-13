// Function to compute temperature conversions based on user input
function computeTemp(event) {
    // Get the value entered by the user
    let inputTemp = event.target.value;

    // Check which input field is being changed
    if (event.target.id === 'Celcius') {
        // Convert Celcius to Fahrenheit and Kelvin
        let fahrenheit = (inputTemp * 9/5) + 32;
        let kelvin = parseFloat(inputTemp) + 273.15;

        // Update other input fields
        document.getElementById('Fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('Kelvin').value = kelvin.toFixed(2);
    } else if (event.target.id === 'Fahrenheit') {
        // Convert Fahrenheit to Celcius and Kelvin
        let celcius = (inputTemp - 32) * 5/9;
        let kelvin = (inputTemp - 32) * 5/9 + 273.15;

        // Update other input fields
        document.getElementById('Celcius').value = celcius.toFixed(2);
        document.getElementById('Kelvin').value = kelvin.toFixed(2);
    } else if (event.target.id === 'Kelvin') {
        // Convert Kelvin to Celcius and Fahrenheit
        let celcius = inputTemp - 273.15;
        let fahrenheit = (inputTemp - 273.15) * 9/5 + 32;

        // Update other input fields
        document.getElementById('Celcius').value = celcius.toFixed(2);
        document.getElementById('Fahrenheit').value = fahrenheit.toFixed(2);
    }
}
