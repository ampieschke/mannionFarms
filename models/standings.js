const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const standingsSchema = new Schema({
    wins: {required: true},
    losses: {required: true},
    ties: {required: true}
})
const Article = mongoose.model('Standings', standingsSchema);
module.exports = Article;