// express is server 
// body parser - Parse incoming request bodies in a middleware before your handlers, available under the req.body property

const express_server = require('express');
const body_parser = require('body-parser');
const app = express_server();
const utils = require('./utility/utility')
app.use(body_parser.urlencoded({ extended: true }))
var fs = require('fs');
const server_port = 3001

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

app.use(express_server.json({
  inflate: true,
  limit: '200kb',
  reviver: null,
  strict: true,
  type: 'application/json',
  verify: undefined
}))


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.post('/api/bmi', function (req, res) {
  var result = utils.calculate_bmi(req)
  res.send(result)
})



 app.get('api/status', (req, res) => {
  res.send('server is running')
}
)

app.listen(server_port, () => {
  console.log('Example app listening at http://localhost:${server_port}')
})