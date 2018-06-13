# Racehorse Names

![](racehorse.jpg)

Gives you names of racing horses 🏇🏻 🎠 🐴

List of names includes horses that have won the Kentucky Derby and the Belmont Stakes as well as a whole bunch of other famous stallions of lore.

Can be used as an NPM library or CLI

# NPM usage

```
yarn add racehorse-names
```
```
const racehorses = require('racehorse-names');

racehorses.random;
//=> 'Secretariat'

racehorses.all;
//=> Get back 500 horses in alphabetical order
```

# CLI usage

```
yarn add --global racehorse-names
```

```
$ racehorse-names --help

  Examples
    $ racehorse-names
    Secretariat

    $ racehorse-names --all
    A.P. Indy
    Adios Butler
    ...

  Options
    --all   Get all names instead of a picking a random one
```