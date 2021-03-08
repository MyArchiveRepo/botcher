import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/price' , {
    useMongoClient : true
});
mongoose.Promise = global.Promise;


const Schema = mongoose.Schema;

const priceSchema = new Schema({
  price: {
    type: String
  },

});

const priceModel = mongoose.model('Price', priceSchema);

export default PriceModel;
