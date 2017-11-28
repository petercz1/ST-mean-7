var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27500/employees';
mongoose.connect(url, {useMongoClient: true});

var contact_structure = {
    email: String,
    cell: String,
    city: String
}
