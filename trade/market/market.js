const config = require('config');

const binance = require('./node-binance-api.js')();
let binance1 = binance.options({
    'APIKEY': config.get('binance.live.apiKey'),
    'APISECRET': config.get('binance.live.secretKey')
  });


const getprice = async () => {   

  let ticker = await binance.prices();
  return ticker.BTCUSDT
//   let result = await binance.prices(function(error, ticker) {
//     console.log("Price of BTC: ", ticker.BTCUSDT);
//     return ticker.BTCUSDT;
//     });
// return result
};



module.exports = { getprice };
