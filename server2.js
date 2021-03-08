const { logger, mongo } = require('./helpers');

const { market,marketccxt } = require('./trade');

const { startTrade } = require('./globals');

// const now = new Date();
// const { runCronjob } = require('./server-cronjob');
// const { runFrontend } = require('./server-frontend');

(async () => {
    //   این کدها برای اجرای اولیه هست مثل لوگ گرفتن اولیه

//   await mongo.connect(logger) //******************************************* */

  console.log( 'getprice ccxt *********** :' + await marketccxt.getprice() )

  console.time('test time');

   console.log( 'getprice :' + await market.getprice() )
    // await mongo.insertOne(logger, 'users', { username: 'configuration',  email: 'value'   });
    console.timeEnd('test time');

  // await runCronjob(logger);
  // await runFrontend(logger);

})();

// DEPENDENCIES -------------------------------------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var request = require("request");
var PORT = process.env.PORT || 8080;
var dbManager = require("./models/dbManager.js");
// var dbManager = require("./models/PriceModel");

var moment = require("moment")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/public'));

// Allows us to overide PUT and GET methods
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Brings in the routes URLs from our controllers
var routes = require("./controllers/stock_controller.js")
app.use("/", routes);

// will make ajax calls for currency info.  
function bitCoinAjaxCall() {
    var BTCprice;
    var USDprice;
    console.time('test time1');

    request("https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,EUR", function(err, res, body) {
        var parsedBody = JSON.parse(body);
        // console.log(parsedBody.BTC);
        BTCprice = parsedBody.BTC;
        request("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,ETH,EUR", function(err, res, body) {
            // Subtract 7 hours on server. 
            // var moment_tstamp = moment().subtract(7, "Hours").format("YYYY-MM-DD+HH:mm:ss");
            var moment_tstamp = moment().format("YYYY-MM-DD+HH:mm:ss");
            console.log(moment_tstamp)
            var parsedBody = JSON.parse(body);
            console.log(parsedBody.USD);
            USDprice = parsedBody.USD;

            // mongo.insertOne(logger, 'price', { BTCprice, USDprice });    //****************** */
            // dbManager.addToCurrencyTable(BTCprice, USDprice, moment_tstamp.toString());
        });
    });
    console.timeEnd('test time1');

};
setInterval(bitCoinAjaxCall, 5000);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

