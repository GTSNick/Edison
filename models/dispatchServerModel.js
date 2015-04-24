var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var dispatchSchema = new Schema({
    environment: {type: String, enum: ['DEV', 'TEST', 'PROD']},
    tpaId: Number,
    branchId: Number,
    transactionLastSent: Date,
    dateOfLoss: Date
    //TODO: Add more here.
});