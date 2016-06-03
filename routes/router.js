'use strict'
let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/', (req, res) =>{
   res.sendFile(path.join(__dirname, '../html_templates', 'template.html'));
});

module.exports = router;
