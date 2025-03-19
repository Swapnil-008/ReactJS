import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/064baece524d320b1941c68b/latest/${currency}`)
      .then((response) => response.json())
      .then((res) => {
        if (res.conversion_rates) {
          setData(res.conversion_rates);
        } else {
          console.error("Invalid response:", res);
          setData({});
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
