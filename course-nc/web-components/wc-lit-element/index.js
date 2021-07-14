
//import './App'
//import './components/MyCounter'

const express = require('express')
const app = express()
const port = 3000

/*
// View engine setup
app.set('view engine', 'ejs');

// With middleware
app.use('/', function(req, res, next){
  res.render('App')
  next();
});
*/

app.get('/', (req, res) => {
  console.log("Render Working")
  res.sendFile(__dirname + '/index.html')
  res.render(__dirname + '/index.html')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})