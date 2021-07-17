module.exports = str => {
  if (!(str && typeof str === 'string')) throw new TypeError('Expected a string')
  return str.split('').map(x => randomCase(x)).join('')
}
function randomCase (str) {
  return Math.round(Math.random()) ? str.toLowerCase() : str.toUpperCase()
}
