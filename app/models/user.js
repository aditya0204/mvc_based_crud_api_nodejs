const mongoose = require('mongoose');
const uuid = require('uuid');

mongoose.connect("mongodb://localhost/user",{useNewUrlParser : true});


const Schema = mongoose.Schema;

const userSchema = new Schema({
    id : String,
    name: String,
    email : String

})

const userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;