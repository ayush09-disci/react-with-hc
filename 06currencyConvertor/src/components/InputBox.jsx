import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency = "usd",
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-xl shadow-sm">
      
      {/* Amount Input */}
      <div className="flex-1 flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-600">
          {label}
        </label>
        <input
          type="number"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      {/* Currency Select */}
      <div className="flex-1 flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-600">
          Currency Type
        </label>
        <select
          value={selectedCurrency}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg
                     bg-white focus:outline-none focus:ring-2 focus:ring-blue-500
                     disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}

export default InputBox;
