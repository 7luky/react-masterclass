const BASE_URL = `https://api.coinpaprika.com/v1`;
const CHART_URL = `https://ohlcv-api.nomadcoders.workers.dev?coinId`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`, { mode: "cors" }).then((response) =>
    response.json()
  );
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`, { mode: "cors" }).then(
    (response) => response.json()
  );
}
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`, { mode: "cors" }).then(
    (response) => response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(`${CHART_URL}=${coinId}`).then((response) => response.json());
}
