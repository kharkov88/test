const express = require('express');
const router = express.Router();
const crud = require('../crud');

router.post('/', (req, res) => crud.create(req.body, text => res.json(text)))

router.put('/:id', (req, res) => {
  let {id} = req.params
  crud.update(id, req.body, text => res.json(text))
})

router.delete('/:id', (req, res) => {
  let {id} = req.params
  crud.destroy(id, text => res.json(text))
})

module.exports = router

