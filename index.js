// Bring in the express server and create application
let express = require('express')
let app = express()

// Use the express Router object
let router = express.Router()
let phones = [
  { id: 1, name: 'iphone 12 mini' },
  { id: 2, name: 'iphone 12' },
  { id: 3, name: 'iphone 12 pro' },
]

// Create GET to return a list of all pies
router.get('/', function (req, res, next) {
  res.send(phones)
})

// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router)

// Create server to listen on port 5000
var server = app.listen(5000, function () {
  console.log('Node server is running on http://localhost:5000..')
})
