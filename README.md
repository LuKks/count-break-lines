# count-break-lines

Calculate break lines by columns, compatible with ANSI and non-ASCII inputs.

```
npm i count-break-lines
```

## Usage
```javascript
const countBreakLines = require('count-break-lines')
const columns = process.stdout.columns || 80

countBreakLines('hey', columns) // => 0
countBreakLines('hey\njump', columns) // => 1

countBreakLines('\x1B[31mA\x1B[39m'.repeat(80), columns) // => 0
countBreakLines('한'.repeat(80), columns) // => 1
```

## License
MIT
