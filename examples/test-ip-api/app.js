
let express = require('express');
let app = express();

const port = 4000;

// Template Engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {subtitulo: 'SubTitulo dinamico'});
});

app.use((req, res, next) => {
    res.status(404).sendFile(dirname + '/public/404.html')
})

app.listen(port, () => 
console.log('Server listening on port 4000!'),
console.log('server url: http://localhost:4000/'),
);