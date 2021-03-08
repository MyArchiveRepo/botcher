const config = require('config');
const { MongoClient } = require('mongo');

const { tradeStatus } = require('../watcher');
const { signalcuter } = require('../strategy');

(async () => {

  activeStrategy= "signalcut"
  signalcuter.run( tradestatus.liveZone , profitLiveZone ,)
  
  console.log( 'getprice ccxt *********** :' + await marketccxt.getprice() )

console.time('test time');

 console.log( 'getprice :' + await market.getprice() )
  // await mongo.insertOne(logger, 'users', { username: 'configuration',  email: 'value'   });
  console.timeEnd('test time');

// await runCronjob(logger);
// await runFrontend(logger);

})();




module.exports = { connect, findOne, insertOne, upsertOne, deleteOne };
