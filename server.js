const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('きかだぞお!')
})

app.get('/getfreshmendata', function (req, res) {

  var freshmendata = {
    "001": "新入生１",
    "002": "新入生２",
    "003": "新入生３",
    "004": "新入生４",
  }

  res.send(JSON.stringify(freshmendata))
})

app.get('/getcommentdata', function (req, res) {

  console.log(req.query.id)

  var commentdata = {
    "X/X オープンゼミ": [],
    "X/Y オープンゼミ": [],
    "Y/Y ランチ会": [],
    "Y/Z ランチ会": [],
    "Z/Z 合同説明会": [],
  }

  res.send(JSON.stringify(commentdata))
})


var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port' + port)
})


