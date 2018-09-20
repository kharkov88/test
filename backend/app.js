let
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./lib/routes'),
    port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

routes.configRoutes(app)

app.listen(port, () => console.log('open on ' + port))
