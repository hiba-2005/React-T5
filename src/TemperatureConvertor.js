import { useState } from 'react';

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState('');

  const convertirEnFahrenheit = (c) => {
    return (c * 9) / 5 + 32;
  };

  const convertirEnCelsius = (f) => {
    return ((f - 32) * 5) / 9;
  };

  const handleCelsiusChange = (value) => {
    setCelsius(value);
  };

  const handleFahrenheitChange = (value) => {
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(convertirEnCelsius(parseFloat(value)).toFixed(2));
    }
  };

  const fahrenheit =
    celsius === '' ? '' : convertirEnFahrenheit(parseFloat(celsius)).toFixed(2);

  return (
    <div className="bloc">
      <input
        type="number"
        placeholder="Température °C"
        value={celsius}
        onChange={(e) => handleCelsiusChange(e.target.value)}
      />

      <input
        type="number"
        placeholder="Température °F"
        value={fahrenheit}
        onChange={(e) => handleFahrenheitChange(e.target.value)}
      />

      <p className="resultat">
        {celsius !== ''
          ? `${celsius} °C = ${fahrenheit} °F`
          : 'Aucune température saisie'}
      </p>
    </div>
  );
}

export default TemperatureConvertor;