function convert() {
  const value = parseFloat(document.getElementById('value').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  let result;

  if (fromUnit === toUnit) {
    result = value;
  } else {
    // Conversion logic (all calculations fixed)
    if (fromUnit === 'mph' && toUnit === 'kph') {
      result = value * 1.60934;
    } else if (fromUnit === 'kph' && toUnit === 'mph') {
      result = value / 1.60934;
    } else if (fromUnit === 'min/mi' && toUnit === 'min/km') { // Changed to min/mi
      result = value * 1.60934;
    } else if (fromUnit === 'min/km' && toUnit === 'min/mi') { // Changed to min/km
      result = value / 1.60934;
    } else if (fromUnit === 'mph' && toUnit === 'min/mi') {
      result = 60 / value;
    } else if (fromUnit === 'min/mi' && toUnit === 'mph') {
      result = 60 / value;
    } else if (fromUnit === 'kph' && toUnit === 'min/km') {
      result = 60 / value;
    } else if (fromUnit === 'min/km' && toUnit === 'kph') {
      result = 60 / value;
    } else if (fromUnit === 'mph' && toUnit === 'min/km') {
      result = (60 / value) * 1.60934; 
    } else if (fromUnit === 'min/km' && toUnit === 'mph') {
      result = 60 / (value / 1.60934); 
    } else if (fromUnit === 'km' && toUnit === 'min/mi') {
     result = 60 / (value / 1.60934); 
    } 
  }

  document.getElementById('result').innerHTML = `${result.toFixed(2)} ${toUnit}`;
}

