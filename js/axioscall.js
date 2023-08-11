export function handleRequest(coin1, coin2) {
  axios
    .get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin1.value}&vs_currencies=${coin2.value}&x_cg_pro_api_key=CG-y4QYMVoLqLXXD4Z59BJprSVo`
    )
    .then((response) => {
      let res = response.data[coin1.value];
      let finalRes = res[coin2.value];

      let unit = String(coin2.value).toUpperCase();
      let userInp = document.getElementById("conversionInput");

      let output = (userInp.value * finalRes).toFixed(4);

      //console.log("hgfhv",unit);

      document.getElementById("convOutput").innerHTML = `${output} ${unit}`;
    })
    .catch((err) => {
      console.log("handleRequest err", err.message);
      document.getElementById("convOutput").innerHTML = "Network Issue";
    });
}
