var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var vehicleSchema = new Schema ({
    NAGSId: Number,

});

var dispatchSchema = new Schema({
    environment: {type: String, enum: ['DEV', 'TEST', 'PROD']},
    tpaId: Number,
    branchId: Number,
    transactionLastSent: Date,
    dateOfLoss: Date,
    lossId: String,
    vehicleInfo:
    //TODO: Add more here.
});