const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const companySchema = new Schema({
    title: {
        type: String,
        maxlenght: 150
    }
}, {
    timestamps: true
});


const Company = mongoose.model('Company', companySchema)
//const Company = mongoose.model('Company', companySchema, 'company')

module.exports = Company