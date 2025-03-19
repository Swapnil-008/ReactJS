import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {      //This code is inside useEffect for whenever changes occur in currency this hook will run
    fetch(`https://v6.exchangerate-api.com/v6/064baece524d320b1941c68b/latest/${currency}`)
      .then((response) => response.json())
      .then((res) => {
        if (res.conversion_rates)  //Conversion rates contains rate of converion from one currency to another
        {
          setData(res.conversion_rates);  
        }
        else {                    //If that json object doesn't contain any data they fetch empty object
          console.error("Invalid response:", res);
          setData({});
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
