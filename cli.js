var stallionNames = require('./');
var meow = require('meow');

var cli = meow([
	'Examples',
	'  $ stallion-names',
	'  Secretariat',
	'',
	'  $ stallion-names --all',
	'  A.P. Indy',
	'  Adios Butler',
	'  ...',
	'',
	'Options',
	'  --all   Get all names instead of a picking a random one'
]);

console.log(cli.flags.all ? stallionNames.all.join('\n') : stallionNames.random());