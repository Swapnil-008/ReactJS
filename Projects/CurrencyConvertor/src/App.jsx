import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[toCurrency]) {
      setConvertedAmount(amount * currencyInfo[toCurrency]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5466790/pexels-photo-5466790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 
  backdrop-blur-sm bg-white/30 transition duration-300 ease-in-out 
  hover:scale-105">

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectCurrency={fromCurrency}
              onCurrencyChange={(currency) => setFromCurrency(currency)}
              onAmountChange={(amt) => setAmount(amt)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5
  transition duration-300 ease-in-out hover:bg-blue-500 hover:scale-110"
              onClick={swap}
            >
              Swap
            </button>

          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={toCurrency}
              onCurrencyChange={(currency) => setToCurrency(currency)}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-blue-700"
          >
            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;
