const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('きかだぞお!')
  })

  var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})


