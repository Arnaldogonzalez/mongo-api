var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var Anime = require('./models/anime.js');

console.log('database ', Anime);
mongoose.connect( "mongodb://localhost/database1");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/test', function (req, res) {
    Anime.findOne({'name':req.body.data},function(err,anime){
        if(err){
            console.log(err);
        }
        if(!anime){
            var newAnime = new Anime();
            newAnime.name = 'Luis';
            newAnime.hero = 'Arrow';
            newAnime.type = 'Good';
            newAnime.episode = 'Season 5';
            newAnime.date = new Date();

            newAnime.save();
            console.log(req.body);
            res.send({
                data: "success created",
                anime: newAnime
            })
        }
        if(anime){
            vconsole.log(req.body);
            res.send({
                data: "success found",
                anime: anime
            })
        }
    })
})

app.listen(3500)
