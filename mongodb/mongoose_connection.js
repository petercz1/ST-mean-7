var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27500/people';
mongoose.connect(url, {useMongoClient: true});

var contact_structure = {
    email: String,
    cell: String,
    city: String
}

//var contact_schema = new mongoose.Schema(contact_structure);

var employee_structure = {
    name: String,
    gender: String,
    contact: contact_schema
}

var employee_schema = new mongoose.Schema(employee_structure);

var EMPLOYEECLASS = mongoose.model('employees', employee_schema);

module.exports = EMPLOYEECLASS;