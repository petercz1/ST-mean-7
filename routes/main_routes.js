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
router.post('/api/v7/read', do_read);
router.get('/api/v7/read', do_read);
router.get('/api/v7/read', do_read);
