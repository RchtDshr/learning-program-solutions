import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');
  const conversionRate = 0.011; // Example: 1 INR = 0.011 EUR

  const convertToEuro = () => {
    const value = parseFloat(rupees);
    if (!isNaN(value)) {
      const result = (value * conversionRate).toFixed(2);
      setEuros(result);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(euros);
    if (!isNaN(value)) {
      const result = (value / conversionRate).toFixed(2);
      alert(`Converted Euro to Rupees: ₹${result}`);
    }
  };

  return (
    <div className="converter">
      <h2>Currency Converter</h2>

      <label>INR (₹): </label>
      <input
        type="number"
        value={rupees}
        onChange={e => setRupees(e.target.value)}
      />
      <button onClick={convertToEuro}>Convert to Euro</button>

      <br /><br />

      <label>Euro (€): </label>
      <input
        type="number"
        value={euros}
        onChange={e => setEuros(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert to Rupees</button>

      <p><strong>Converted Euro: €{euros}</strong></p>
    </div>
  );
}

export default CurrencyConvertor;
