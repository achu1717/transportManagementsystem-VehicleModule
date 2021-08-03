const { to } = require('await-to-js');
const pe = require('parse-error');
const validator = require('validator')
const { isEmail } = validator
module.exports.to = async (promise) => {
    let err, res;
    [err, res] = await to(promise);
    if (err) return [err];

    return [null, res];
};

module.exports.ReE = function (res, err, code) { // Error Web Response

    let errorCode = err.code

    // console.log(err)

    if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json({ success: false, error: err, code: errorCode });
};

module.exports.ReS = function (res, data, code) { // Success Web Response
    let send_data = { success: true };

    if (typeof data == 'object') {
        send_data = Object.assign(data, send_data);//merge the objects
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json(send_data)
};

module.exports.TE = function (err_message, log) { // TE stands for Throw Error
    if (log === true) {
        console.error(err_message);
    }

    throw new Error(err_message);
};

module.exports.isNull = (field) => {
    return typeof field === 'undefined' || field === '' || field === null
}

module.exports.isEmpty = (obj) => {
    return !Object.keys(obj).length > 0;
}


String.prototype.capitalize = function () {
    return this
        .toLowerCase()
        .replace(/^\w|\s\w/g, (letter) => letter.toUpperCase())
};

function capitalizeFirstLetters(str) {
    return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    })
}


module.exports.getOtpMessage = function (otp, returning) {

    if (returning) {
        return encodeURIComponent(otp +
            ' is the Verification code for Whistle Freights. Welcome back.');
    } else {
        return encodeURIComponent(
            otp + ' is the Verification code for Whistle Freights.')
    }
}


module.exports.getUniqueField =  (body) => {// this is so they can send in 3 options unique_key, email, or phone and it will work
    var unique_key;
        if (typeof body.email != 'undefined') {
            unique_key = body.email
            if(!isEmail(body.email)){
              unique_key = 'not_email'
            }
        } else if (typeof body.name != 'undefined') {
            unique_key = body.name
        } else {
            unique_key = null
        }
    
    return unique_key
  }