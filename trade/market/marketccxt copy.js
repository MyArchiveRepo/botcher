const config = require('config');
// const binance = require('./node-binance-api.js')();
// let binance1 = binance.options({
//     'APIKEY': config.get('binance.live.apiKey'),
//     'APISECRET': config.get('binance.live.secretKey')
//   });
const ccxt = require ('ccxt');
const { reset, restart } = require('nodemon');
const { info } = require('../helpers/logger');
console.log (ccxt.exchanges)

const exchangeId = 'binance'
    , exchangeClass = ccxt[exchangeId]
    , exchange = new exchangeClass ({
        'apiKey': config.get('binance.live.apiKey'),
        'secret': config.get('binance.live.secretKey'),
        'timeout': 30000,
        'enableRateLimit': true,
        'options': {
            'defaultType': 'future'
        }
    })



const getprice = async () => {   

  const binance = new ccxt.binance ({ enableRateLimit: true })

//   while (true) {
//       const result = await Promise.all ([
          // binance.fetchOrderBook ('BTC/USDT'),

        result = await binance.fetchTicker ('BTC/USDT') 

        

         for(var key in result) // دسترسی به کل کلیدهای آبجکت و مقادیر آن
         {
             if (key.toString() == 'last'){
                // console.log('key=='+  key)
                console.log(key, result[key]);
                var ccxtlastprice =  result[key]
             }
         }

    return ccxtlastprice

}

module.exports = { getprice };

// console.log('تمرکز ++++++++++++++++++++++++++++')

        // const outresault = JSON.stringify(result) ;
        // console.log(outresault)

        // const obj = JSON.parse(result); 
        // console.log(obj)


        // let orderbook = binance.fetchOrderBook (binance.symbols[0])
        // let bid = orderbook.bids.length ? orderbook.bids[0][0] : undefined
        // let ask = orderbook.asks.length ? orderbook.asks[0][0] : undefined
        // let spread = (bid && ask) ? ask - bid : undefined
        // console.log (exchange.id, 'market price', { bid, ask, spread })