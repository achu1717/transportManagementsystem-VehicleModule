const mongoose = require('mongoose');
const CONFIG = require("../config/config");
const VehicleSchema = new mongoose.Schema({
        // userId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User',
        //     // required: true
        // },
        regNo: {
            type: String,
        },
        vehicleType: {
            type: String,
        },
        vehicleId:{
            type: String,
            unique:true
        },
        seatingCap: {
            type: String,
        },
    
    }, { timestamps: true }
    
    
);

module.exports = new mongoose.model('Vehicle', VehicleSchema);