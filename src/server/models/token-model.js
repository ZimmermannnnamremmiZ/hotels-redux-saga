const {Schema, model} = require('mongoose');

const TokenSchema = new Schema({
    isActivated: {type: Boolean, required: false},
    activationLink: {type: String},
})

module.exports = model('Token', TokenSchema)