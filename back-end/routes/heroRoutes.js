const express = require('express');
const router = express.Router();
const { submitHeroForm } = require('../controllers/heroController');

router.post('/', submitHeroForm);

module.exports = router;
