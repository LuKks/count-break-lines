const ansi = require('ansi-match')
const wcwidth = require('tiny-wcwidth')

module.exports = function countBreakLines (input = '', columns = Infinity) {
  input = input.replace(ansi, '')

  let count = 0
  for (const line of input.split('\n')) {
    count += Math.max(1, Math.ceil(wcwidth(line) / columns))
  }
  return count
}
