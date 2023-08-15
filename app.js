let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let btn = document.querySelector('.button button');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

celciusInput.addEventListener('input', function() {
    let cTemp = parseFloat(celciusInput.value); // Fixed typo 'parseFLoat' to 'parseFloat'
    let fTemp = (cTemp * 9/5) + 32; // Fixed 9/5 instead of (9/5)
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});
      
fahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5/9); // Fixed the formula for Celsius conversion
    let kTemp = (fTemp + 459.67) * (5/9); // Fixed the formula for Kelvin conversion

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
});

kelvinInput.addEventListener('input', function() {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15; // Fixed the formula for Celsius conversion
    let fTemp = (kTemp + 273.15) * (9/5) + 32; // Fixed the formula for Kelvin conversion

    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
});

btn.addEventListener('click',()=>{
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
}
)