const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db
var heads = 1;
var num = Math.ceil(Math.random());
MongoClient.connect('mongodb://data:monkey@ds157818.mlab.com:57818/cake', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
//this is loading our landing page
app.get('/', (req, res) => {
  db.collection('flips').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {messages: result})
  })
})
//handles when someone posts a message
app.post('/flips', (req, res) => {
  db.collection('flips').save({name: req.body.name, thumbUp:0, thumbDown:0}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
//handles when someone updates a message
app.put('/thumbsUp', (req, res) => {
  db.collection('flips')
  .findOneAndUpdate({name: req.body.name}, {
    $set: {
     thumbUp:req.body.thumbUp + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
app.put('/messagesto', (req, res) => {
  db.collection('flips')
  .findOneAndUpdate({name: req.body.name}, {
    $set: {
      thumbDown:req.body.thumbDown + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
//handles when some deletes a message
app.delete('/flips', (req, res) => {
  db.collection('flips').findOneAndDelete({name: req.body.name}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
