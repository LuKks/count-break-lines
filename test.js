const test = require('brittle')
const countBreakLines = require('./')
const columns = 80

test('basic', function (t) {
  t.is(countBreakLines('hey', columns), 0)
  t.is(countBreakLines('hey\njump', columns), 1)

  t.is(countBreakLines('\x1B[31mA\x1B[39m'.repeat(80), columns), 0)
  t.is(countBreakLines('한'.repeat(80), columns), 1)
})
