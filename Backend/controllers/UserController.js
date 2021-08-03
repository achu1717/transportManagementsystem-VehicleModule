const User = require('../models/User')
const { to, ReE, ReS, getUniqueField } = require('../services/util.service')
const CONFIG = require('../config/config')
const { isNull } = require('../services/util.service')
const authService = require('../services/auth.service')
const HttpStatus = require('http-status')
const validator = require('validator')
const httpStatus = require('http-status')
const { isEmail } = validator

module.exports.userRegister = async (req, res) =>{
 

        // const user = new User(req.body);
    
        // user.save((err, doc) => {
        //     if (err) return res.json({ success: false, err });
        //     return res.status(200).json({
        //         success: true
        //     });
        // });
  
    let body= req.body;
    let err, existingUser, newUser

    let fields = [
        'email',
        'name',
        'password'
    ]

    let invalidFields = fields.filter(field =>{
        if(isNull(body[field])){
            return true
        }
    })

    if (invalidFields.length !== 0) {
        return ReE(res, {message: `Please enter ${invalidFields}`},
            HttpStatus.BAD_REQUEST)
    }
    if (body.name.length < 3) {
        return ReE(res, 'Please enter a name with minimum 3 characters',
            HttpStatus.BAD_REQUEST)
    }
    
    if(!isEmail(body.email)) {return await  ReE(res, 'Please enter valid Email Id', HttpStatus.BAD_REQUEST)}
    
    [err, existingUser] = await to(User.findOne({email:body.email,name:body.name}))
  
if(existingUser){
    let takenFields = fields.filter(field =>{
        if(existingUser[field]){
            return true
        }
    })
    
    if (takenFields.length !== 0) {
        return ReE(res, {message: `${takenFields} already taken`},
            HttpStatus.BAD_REQUEST)
    }
}
  
    await console.log('body', body);
    [err, newUser] = await to(User.create(body));
    await console.log('user', newUser);
    if(err)return ReE(res, 'unable to create',err, HttpStatus.INTERNAL_SERVER_ERROR)
    if(!newUser)return ReE(res, 'user doesn\'t created', HttpStatus.BAD_REQUEST)

    if(newUser){
    return ReS(res, {
        message: 'Register Succesfull',
        user:newUser
    }, 201)
    }
}

module.exports.login = async(req, res) =>{
    const body = req.body
    let{password} = body
    let err, compare, existingUser, setActive,user
    
    let uniqueKey = await getUniqueField(body);
   
    if(uniqueKey === 'not_email') return ReE(res, {message:'please Enter Valid Email'}, httpStatus.BAD_REQUEST);
    if(uniqueKey === null) return ReE(res, {message:'please Enter user name or Email Id'}, httpStatus.BAD_REQUEST);

    [err, existingUser] = await to(User.findOne({ $or: [ { email: uniqueKey}, { name: uniqueKey } ] } ))
    console.log(existingUser);
    if(err) return ReE(res, {message:'unable to fetch user'},err, httpStatus.INTERNAL_SERVER_ERROR)
    if((!existingUser)){
        return ReE(res, 'User not yet registered', httpStatus.BAD_REQUEST)
    }
    if((existingUser.password == null)){
        return ReE(res, 'User not yet registered', httpStatus.BAD_REQUEST)
    }

    [err, compare] = await to(existingUser.comparePassword(password))
    if(err) return ReE(res, {message:'unable to compare password'},err, httpStatus.INTERNAL_SERVER_ERROR)
    if (!compare) {
        return ReE(res,
            {message: 'Invalid Username or password. please try again.'},
             httpStatus.BAD_REQUEST)
    }


        existingUser.password = undefined;
        user={email:existingUser.email,uid:existingUser.uid}

        return ReS(res,
             {message:'signed In successfully',user:existingUser, token:existingUser.getJWT()},
              httpStatus.OK )
 
   
}