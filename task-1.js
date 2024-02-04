// Write a function to convert temperature from Celsius to Fahrenheit.
// (18°C × 9/5) + 32
function celToFah(celsius) {
    console.log(celsius);
    const Fahrenheit = (celsius * 9 / 5) + 32;
    return Fahrenheit;
}

const fahrenheitDegree = celToFah(37);

console.log(fahrenheitDegree)