const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController');
const VehicleController = require('../controllers/VehicleController');

const passport = require('passport')
const path = require('path')
const jwtAuth = require('../middleware/passport')

const authUser = jwtAuth(passport).authenticate("jwt", { session: false });

router.post('/user/signup', UserController.userRegister)
router.post('/user/signin', UserController.login)
router.post('/vehicle/create', VehicleController.createVehicle)
router.get('/vehicle/getAll', VehicleController.getAllVehicle)
// router.put('/vehicle/update', VehicleController.updateVehicle)
router.put('/vehicle/update', VehicleController.updateVehicle)
router.post('/vehicle/get', VehicleController.getVehicle)
router.delete('/vehicle/:id/delete', VehicleController.deleteVehicle)
module.exports = router