const mongoose = require('mongoose')
const Schema = mongoose.Schema


const DeveloperSchema = new Schema({
    name : String,
    location : String,
    jobTitle : String
  
})


module.exports = Developer = mongoose.model('developer' , DeveloperSchema )