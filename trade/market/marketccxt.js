const config = require('config');
// const binance = require('./node-binance-api.js')();
// let binance1 = binance.options({
//     'APIKEY': config.get('binance.live.apiKey'),
//     'APISECRET': config.get('binance.live.secretKey')
//   });
const ccxt = require ('ccxt');
const { reset, restart } = require('nodemon');
// const { info } = require('../../helpers');
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

const binance = new ccxt.binance ({ enableRateLimit: true })


const getprice = async () => {   


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

const openLong = async () => {   


    // console.log( await binance.fetchPositions ('BTC/USDT') )
    // console.log( await binance.fetchPositions () )
    // orderNumber = await binance.createLimitBuyOrder ('BTC/USDT', 0.001 , livePrice) 
    // console.log (binance.id)

    result = await binance.fetchTicker ('BTC/USDT') 
      
    // binance.set_sandbox_mode(True)
    // markets = binance.loadMarkets()
    // console.log(binance.loadMarkets())
    // binance.verbose = True ;

    // console.log(await binance.fetchBalance('future'))
    console.log( await binance.fapiPrivateGetPositionRisk('BTC/USDT') )

    // return orderNumber

}

module.exports = { getprice , openLong };





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