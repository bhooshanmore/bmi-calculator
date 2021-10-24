// express is server 
// body parser - Parse incoming request bodies in a middleware before your handlers, available under the req.body property

const express_server = require('express')
const body_parser = require('body-parser')
const app = express_server()
const utils = require('./utility/utility')
app.use(body_parser.urlencoded({ extended: true }))
const server_port = 3001

app.use(express_server.json({
  inflate: true,
  limit: '200kb',
  reviver: null,
  strict: true,
  type: 'application/json',
  verify: undefined
}))



app.post('/bmi', function (req, res) {
  // console.log(req.body);
  // for(var item of req.body) {
  //   console.log('Gender: ', [item.Gender] , 'HeightCm: ', [item.HeightCm] ,'WeightKg: ', [item.WeightKg] );
  // }

  var result = utils.calculate_bmi(req)
  res.send(result)
})



 app.get('/status', (req, res) => {
  res.send('server is running')
}
)

app.listen(server_port, () => {
  console.log('Example app listening at http://localhost:${server_port}')
})