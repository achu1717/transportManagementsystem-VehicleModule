const  Vehicle  = require("../models/Vehicle");
const authService = require("../services/auth.service");
const { to, ReE, ReS, isNull, isEmpty } = require("../services/util.service");
const ObjectId = require("mongoose").Types.ObjectId;
const moment = require("moment");
const CONFIG = require("../config/config");
const HttpStatus = require("Http-status");

//create vehicle
module.exports.createVehicle= async function (req,res) {

    const vehicle = new Vehicle(req.body);
    
        vehicle.save((err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({
                success: true
            });
        });


    // let body=req.body
    // let user=req.user
 
    // let newVehicle = {
    //     userId: user._id,
    //     regNo: body.regNo,
    //     vehicleType: body.vehicleType,
    //     vehicleId: body.vehicleId,
    //     seatingCap: body.seatingCap,

    // }; 
  
    // let err, vehicle;
  
    // [err, vehicle] = await to(Vehicle.create(newVehicle));
  
    // if (err) {
    //   return ReE(res, err, HttpStatus.INTERNAL_SERVER_ERROR);
    // }
  
    // return ReS(res, { message: "Vehicle Details Added", data: vehicle }, HttpStatus.Ok);
  };

  //Get Vehicle
  module.exports.getVehicle = async(req, res) =>{
    let  user = req.user;
    let err, vehicle;
  
    [err, vehicle] = await to(Vehicle.find({userId:user._id}));
  
    if (err) {
      return ReE(res, err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  
    return ReS(res, { message: "Vehicle Details", data: vehicle }, HttpStatus.Ok);
}

//Update vehicle
module.exports.updateVehicle = async function (req, res) {
    // let err, vehicle, data
    // user = req.user
    // data = req.body

    //  vehicle =await to(Vehicle.updateOne({ _id:data.id },{ $set: data}));
    //  if (vehicle.nModified === 0) {
    //     return ReS(res, { message: "Vehicle Details Updated",data: vehicle }, HttpStatus.OK)
    //   } else {
    //     return ReS(res, { message: "Vehicle Details not Updated",data: vehicle }, HttpStatus.OK)
    //   }

    
      Vehicle.findOneAndUpdate({regNo:req.body.regNo},{$set: req.body}, function (err, vehicle) {
          if (err) return next(err);
          res.send('Vehicle updated.')
          res.json()
      });
  };



//Get all vehicle
module.exports.getAllVehicle = async(req, res) =>{
  Vehicle.find().then(vehi =>{
    res.json({
        vehi,
    })
    console.log("Get all Vehicle success!")
})
.catch(error =>{
    res.json({
        message:'An error Occured !',
        msg:error,
    })
})

      //   let  user = req.user;
      //   let err, vehicle;
      // let body =req.body;
      //   [err, vehicle] = await to(Vehicle.findOne({_id:body.id}));
      
      //   if (err) {
      //     return ReE(res, err, HttpStatus.INTERNAL_SERVER_ERROR);
      //   }
      
      //   return ReS(res, { message: "Vehicle Details", data: vehicle }, HttpStatus.Ok);
    }

    //delete vehicle
    exports.deleteVehicle = function (req, res) {
      Vehicle.findByIdAndRemove(req.params.id, function (err) {
          if (err) return next(err);
          res.send('Deleted successfully!');
      })
  };
