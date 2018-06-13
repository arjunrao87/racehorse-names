var racehorses = require('./names.json');

var all = racehorses;
var random = function () { return racehorses[Math.floor(Math.random()*racehorses.length)] };

module.exports = {
    random,
    all,
}