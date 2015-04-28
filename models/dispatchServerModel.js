var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
    vehicleId: {type: Number, required: true},
    isNAGSId: {type: Boolean, default: true, required: true},
    year: {type: Number, min: 1900, max: 2050, required: true},
    make: {type: String, required: true},
    model: {type: String, required: true},
    style: {type: String, required: true}
});

var addressSchema = new Schema({
    description: String,
    address: String,
    city: String,
    state: String,
    province: String,
    postalCode: String
});

var phoneSchema = new Schema({
    phone: Number,
    description: String,
    isTextable: {type: Boolean, default: true}
});

var claimantSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    addresses: [addressSchema],
    phones: {type: [phoneSchema], required: true},
    //TODO: Put on a regex for a valid e-mail address.
    emailAddress: String
});

var glassVendorSchema = new Schema({
    name: String,
    addresses: [addressSchema],
    phones: [phoneSchema]
});

var eScheduleSchema = new Schema({
    startTime: {type: Number, min: 0, max: 2400},
    endTime: {type: Number, min: 0, max: 2400}
});

var insurerSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    iswClaimIndicator: {type: Boolean, required: true}
});

var tpaSchema = new Schema({
    name: {type: String, required: true},
    address: {type: [addressSchema], required: true},
    phone: {type: [phoneSchema], required: true},
    //TODO: Put on a regex for a valid e-mail address.
    emailAddress: {type: String, required: true},
    //TODO: Put on a regex for a valid URL.
    URL: {type: String, required: true}
});

var agentSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: [phoneSchema]
});

var dispatchSchema = new Schema({
    environment: {type: String, enum: ['DEV', 'TEST', 'PROD'], default: 'TEST'},
    tpaId: {type: Number, required: true},
    //branchId: {type: Number, required: true},
    //transactionLastSent: {type: Date, required: true},
    //dateOfLoss: {type: Date, required: true},
    //lossId: String,
    //vehicleInfo: [vehicleSchema],
    //claimantInfo: [claimantSchema],
    //deductible: {type: Number, min: 0.00, required: true},
    //lossReferenceId: {type: Number, required: true},
    //glassVendor: [glassVendorSchema],
    //maxRepairs: {type: Number, min: 0.00, required: true},
    //insuranceAlertMessage: {type: String, required: true},
    //VIN: {type: String, required: true}, //TODO: Only display last 4 when sending out.
    //insurerComments: String,
    //claimType: {type: Number, min: 1, max: 5},
    //claimTypeDescription: String,
    //isRecreationalVehicle: {type: Boolean, default: false, required: true},
    //eScheduleIndicator: {type: Boolean, required: true},
    //eSchedule: [eScheduleSchema],
    ////TODO: Put on a regex for a valid postal code? Also, is this necessary moving forward?
    //workLocationPostalCode: {type: String, required: true},
    //mobileIndicator: {type: Boolean, required: true},
    //mobileLocationDescription: String,
    //insurer: {type: [insurerSchema], required: true},
    //tpaInfo: {type: [tpaSchema], required: true},
    //agentInfo: [agentSchema],
    //fixedBidAmount: Number, //TODO: What is this for?
    //causeOfLossCode: Number,
    //causeOfLossCodeDescription: String

    //NOTE: customData is allowed by all, it will need to be parsed
    //      into specific information before a save is done somehow.
    customData: Schema.Types.Mixed
    //TODO: Add more here.
});

//NOTE: Use the [Schema].add() function to define different required schemas for different
//      situations. For example, utilize the eScheduleIndicator bool to require eSchedule, etc...

module.exports = mongoose.model('Dispatch', dispatchSchema, 'dispatches');