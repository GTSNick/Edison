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
    email: String
});

var glassVendorSchema = new Schema({
    name: String,
    addresses: [addressSchema],
    phones: [phoneSchema]
});

var dispatchSchema = new Schema({
    environment: {type: String, enum: ['DEV', 'TEST', 'PROD'], default: 'TEST'},
    tpaId: {type: Number, required: true},
    branchId: {type: Number, required: true},
    transactionLastSent: {type: Date, required: true},
    dateOfLoss: {type: Date, required: true},
    lossId: String,
    vehicleInfo: vehicleSchema,
    claimantInfo: claimantSchema,
    deductible: {type: Number, min: 0.00, required: true},
    lossReferenceId: {type: Number, required: true},
    glassVendor: glassVendorSchema,
    maxRepairs: {type: Number, min: 0.00, required: true},
    insuranceAlertMessage: {type: String, required: true},
    VIN: {type: String, required: true}
    //TODO: Add more here.
});