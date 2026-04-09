import React, { useState, useEffect } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  // currency
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  // amount and converted amount
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // get all the details of currency
  const currencyInfo = useCurrencyInfo(from);

  // get currency options
  const options = Object.keys(currencyInfo);

  // swap
  const swap = () => {
    setFrom(to);
    setTo(from);
  }

  // convert
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6">
        
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Currency Converter 💱
        </h1>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >

          <InputBox
            label="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
            selectedCurrency={from}
          />

          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700
                         text-white rounded-lg transition shadow-md"
            >
              🔁 Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            onAmountChange={(amount) => setConvertedAmount(amount)}
            onCurrencyChange={(currecy) => setTo(currecy)}
            currencyOptions={options}
            selectedCurrency={to}
            amountDisable={true}
          />

          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-700
                       text-white font-semibold rounded-xl
                       transition shadow-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>

        </form>
      </div>
    </div>
  )
}

export default App
