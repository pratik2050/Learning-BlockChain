//Question 2 by Pratik Das

//From Celsius to Fahrenheit
function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}

//From Fahrenheit to Celsius
function toCelsius(temp) {
    return (temp - 32) * 5 / 9;
}

console.log(toFahrenheit(37));