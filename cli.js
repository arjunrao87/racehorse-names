#!/usr/bin/env node

var meow = require('meow');
var racehorses = require('./');

var cli = meow([
	'Examples',
	'  $ racehorse-names',
	'  Secretariat',
	'',
	'  $ racehorse-names --all',
	'  A.P. Indy',
	'  Adios Butler',
	'  ...',
	'',
	'Options',
	'  --all   Get all names instead of a picking a random one'
]);

console.log(cli.flags.all ? racehorses.all.join('\n') : racehorses.random());