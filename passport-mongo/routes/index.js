var express = require('express');
var router = express.Router();
var crud = require('../crud');


module.exports = function (passport) {

  router.post('/login', function (req, res) {
    res.send(req.body)
  });

  router.get('/employers', (req, res) => crud.read(text => res.json(text)))

  router.post('/employer', (req, res) => crud.create(req.body, text => res.json(text)))

  router.put('/employer/:id', (req, res) => {
    let {id} = req.params
    crud.update(id, req.body, text => res.json(text))
  })

  router.delete('/employer/:id', (req, res) => {
    let {id} = req.params
    crud.destroy(id, text => res.json(text))
  })
  return router;
};
