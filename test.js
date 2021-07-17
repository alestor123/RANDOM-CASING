const tap = require('tap')
const randomCasing = require('./App')
tap.throws(() => randomCasing(), new TypeError('Expected a string'))
tap.throws(() => randomCasing(''), new TypeError('Expected a string'))
tap.throws(() => randomCasing(1), new TypeError('Expected a string'))
tap.equal(typeof randomCasing('this is some awesome casing that kk bravo echo 11 '), 'string')
