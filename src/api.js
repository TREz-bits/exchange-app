const url = "https://api.coincap.io/v2/assets?limit=20";

let request = new Request(url, {
  mode: "cors",
  method: "GET",
  headers: {
    Accept: "application/json",
  },
});

async function getAssets() {
  const res = await fetch(request);
  const res_1 = await res.json();

  return res_1.data;
}

export default {
  getAssets,
};
