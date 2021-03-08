const config = require('config');


const liveZone = async () => {   
  // console.log('testglobalprice' + global.livePrice)
  
  LZone= 1 ;
  return LZone
}

const profitLostSignal = async () => {   
  //سود یا زیان کسب شده تا الان
  startCoinBalance= x ;
  
  return liveZone
}



// const trStatus = async () => {   

//   let coinLivePrice = global.price;

//   if ( coinLivePrice> startPosithin ){

//     if(currentZone <> 0) && ()
//     liveZone = zone1 or zone2  or zone3

//     if (liveZone = 2)
//     if (zone2) { zone1++ }   if (zone3) { zone2++ }

//     if (zone1 && zone2>=1 ) { zone2++ }          if (zone2 && zone3>=1 ) { zone2++ }



//   }

//   if ( coinLivePrice < startPosithin ){

//   }







//   return res
// //   let result = await binance.prices(function(error, ticker) {
// //     console.log("Price of BTC: ", ticker.BTCUSDT);
// //     return ticker.BTCUSDT;
// //     });
// // return result
// };


// const binance = require('./node-binance-api.js')();
// let binance1 = binance.options({
//     'APIKEY': config.get('binance.live.apiKey'),
//     'APISECRET': config.get('binance.live.secretKey')
//   });






module.exports = { liveZone };
