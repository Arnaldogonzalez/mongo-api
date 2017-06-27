var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimeSchema = new Schema({
  name: String,
  hero: String,
  type: String,
  episode: Array,
  date: Date
});

module.exports = mongoose.model('Anime', AnimeSchema);
