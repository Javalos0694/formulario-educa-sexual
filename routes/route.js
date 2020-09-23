const express = require('express');
const controller = require('../controller/controller')
const multer = require('multer');
const upload = multer({dest:'uploads/'});

const router = express.Router();

//Router methods

router.post('/formAnswer',upload.none(), controller.saveAnswers)



module.exports = router;