const express = require('express');

const controller = require('../Controllers/mathController');

const router = express.Router();

router.post('/addition', controller.add);

router.post('/subtraction', controller.subtract);

router.post('/multiplication', controller.multiply);

router.post('/division', controller.divide);

router.post('/maximum', controller.maximum);

router.post('/prime', controller.prime);

module.exports = router;
