var router = require('express').Router();
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('doing homepage');
    res.render('index');
}

// api

router.get('/api/v7/read', do_read);
router.get('/api/v7/read/:_id',do_single_read);
router.post('/api/v7/read', do_create);
router.put('/api/v7/read', do_update);
router.delete('/api/v7/read', do_delete);

function do_read(req, res) {
    console.log('getting all records');

}

function do_single_read(req, res) {
    console.log('getting single record');
    console.log(req.params);

}

function do_create(req, res) {
    console.log('creating employee');
}

function do_update(res, req) {
    console.log(res.body);
}