const config = require('config');
// const { logger, mongo } = require('./helpers');


(async () => {
// only long and close long



  if (await mongo.connect(logger)){

    tradeHeight = config.get('trade.height') ;
    tradeZoneSize = config.get('trade.zoneize') ;

    
    for (i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
        await mongo.insertOne(logger, 'users', { username: 'configuration',  email: 'value'   });

      }
    
  }

})