# Simple verions parser

## Built with Typescript ❤️

## Well tested with `jsverify`

```js
import { parseVersion } from 'versions-parser'

const parsed = parseVersion('7.17.37')

console.log(parsed)

{
  isEmpty: false,
  major: 7,
  minor: 17,
  parsed: [ 7, 17, 37 ],
  patch: 37,
  text: '7.17.37'
}
```