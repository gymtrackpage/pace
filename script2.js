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
        } else if (fromUnit === 'min/mile' && toUnit === 'mi/nkm') {
            result = value * 1.60934;
        } else if (fromUnit === 'min/km' && toUnit === 'min/mile') {
            result = value / 1.60934;
        } else if (fromUnit === 'mph' && toUnit === 'min/mile') {
            result = 60 / value;
        } else if (fromUnit === 'min/mile' && toUnit === 'mph') {
            result = 60 / value;
        } else if (fromUnit === 'kph' && toUnit === 'min/km') {
            result = 60 / value;
        } else if (fromUnit === 'min/km' && toUnit === 'kph') {
            result = 60 / value;
        } else if (fromUnit === 'mph' && toUnit === 'min/km') {
            result = (60 / value) * 1.60934; // Convert mph to min/mi, then to min/km
        } else if (fromUnit === 'minkm' && toUnit === 'mph') {
            result = 60 / (value / 1.60934); // Convert min/km to min/mi, then to mph
        } 
    }

    document.getElementById('result').innerHTML = `${result.toFixed(2)} ${toUnit}`;
}
