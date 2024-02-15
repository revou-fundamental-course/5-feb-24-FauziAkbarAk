function konversiSuhu() {
  var celciusInput = parseFloat(document.getElementById('celciusInput').value);
  var fahrenheitInput = parseFloat(document.getElementById('fahrenheitInput').value);

  if (!isNaN(celciusInput)) {
      var hasilKonversiFahrenheit = (celciusInput * 9/5) + 32;
      document.getElementById('resultArea').innerHTML = `
          Conversion Result:
          Celsius to Fahrenheit: ${celciusInput} °C * (9/5) + 32 = ${hasilKonversiFahrenheit.toFixed(2)} °F
      `;
  } else if (!isNaN(fahrenheitInput)) {
      var hasilKonversiCelsius = (fahrenheitInput - 32) * (5/9);
      document.getElementById('resultArea').innerHTML = `
          Conversion Result:
          Fahrenheit to Celsius: (${fahrenheitInput} °F - 32) * (5/9) = ${hasilKonversiCelsius.toFixed(2)} °C
      `;
  } else {
      alert("Enter a valid temperature!");
  }
}

function reverseForm() {
  var celciusInput = document.getElementById('celciusInput');
  var fahrenheitInput = document.getElementById('fahrenheitInput');
  var resultElement = document.getElementById('resultArea');

  // Reverse the input values
  celciusInput.value = celciusInput.value.split('').reverse().join('');
  fahrenheitInput.value = fahrenheitInput.value.split('').reverse().join('');

  resultElement.innerHTML = `
      Reversed Input Values:
      Celsius: ${celciusInput.value},
      Fahrenheit: ${fahrenheitInput.value}
  `;
}

function resetForm() {
  document.getElementById('temperatureForm').reset();
  document.getElementById('resultArea').innerHTML = '';
}
