const express = require('express');
const router = express.Router();
const crud = require('../crud');

router.get('/', (req, res) => crud.read(text => res.json(text)))

module.exports = router
