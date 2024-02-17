import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    axios.get('https://api.exchangeratesapi.io/latest')
      .then(response => {
        setRates(response.data.rates);
        convertCurrency();
      })
      .catch(error => console.log(error));
  }, []);

  const convertCurrency = () => {
    const rate = rates[toCurrency] / rates[fromCurrency];
    setConvertedAmount(amount * rate);
  };

  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
        {Object.keys(rates).map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
        {Object.keys(rates).map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <p>Converted Amount: {convertedAmount}</p>
    </div>
  );
}

export default CurrencyConverter;