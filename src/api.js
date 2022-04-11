const url = "https://api.coincap.io/v2/";

let request = {
  method: "GET",
  redirect: "follow",
};

async function getAssets() {
  const res = await fetch(`${url}assets?limit=20`, request);
  const res_1 = await res.json();

  return res_1.data;
}

async function getAsset(coin) {
  const res = await fetch(`${url}assets/${coin}`, request);
  const res_1 = await res.json();

  return res_1.data;
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  const res = await fetch(
    `${url}assets/${coin}/history?interval=h1&start=${start}&end=${end}`,
    request
  );
  const res_1 = await res.json();

  return res_1.data;
}

async function getMarkets(coin) {
  const res = await fetch(`${url}assets/${coin}/markets?limit=5`, request);
  const res_1 = await res.json();
  return res_1.data;
}

async function getExchange(id) {
  const res = await fetch(`${url}exchanges/${id}`, request);
  const res_1 = await res.json();
  return res_1.data;
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory,
};
