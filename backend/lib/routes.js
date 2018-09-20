let
  crud = require('./crud'),
  configRoutes

configRoutes = function (app) {

  app.get('/employers', (req, res) => crud.read(text => res.json(text)))

  app.post('/employer', (req, res) => crud.create(req.body, text => res.json(text)))

  app.put('/employer/:id', (req, res) => {
    let { id } = req.params
    crud.update(id, req.body, text => res.json(text))
  })

  app.delete('/employer/:id', (req, res) => {
    let { id } = req.params
    crud.destroy(id, text => res.json(text))
  })
}

module.exports = {
  configRoutes
}
