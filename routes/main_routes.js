var router = require('express').Router();
var EMPLOYEECLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
  console.log('doing homepage');
  res.render('index');
}

// api

router.get('/api/v7/read', do_read);
router.get('/api/v7/read/:_id', do_single_read);
router.post('/api/v7/read', do_create);
router.put('/api/v7/read', do_update);
router.delete('/api/v7/read', do_delete);

function do_read(req, res) {
  console.log('getting all records');
  EMPLOYEECLASS.find({}, {
    name: 1,
    gender: 1
  }).then();
}

function do_single_read(req, res) {
  console.log('getting single record');
  console.log(req.params);
  EMPLOYEECLASS.findById(req.params._id).then();
}

function do_create(req, res) {
  console.log('creating employee');
  console.log(req.body);
  var data = {
    name: req.body.name,
    gender: req.body.gender,
    contact: {
        email: req.body.email,
        cell: req.body.cell,
        city: req.body.city
    }
  }
  var employee = new EMPLOYEECLASS(data);
  employee.save().then();
}

function do_update(req, res) {
  console.log('updating record');
  console.log(req.body);
}

function do_delete(req, res) {
  console.log('deleting employee');
  console.log(req.params);
}