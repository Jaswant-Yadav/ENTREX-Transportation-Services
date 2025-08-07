const express = require('express');
const router = express.Router();
const { submitTalkForm } = require('../controllers/talkController');

router.post('/', submitTalkForm);

module.exports = router;
