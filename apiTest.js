const API_KEY = "68ab37f6-923c-48a2-a3e2-bf1fc1e6d4e1";

async function getCoinData() {
  const response = await fetch(
    "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
      },
    }
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
}

getCoinData();
