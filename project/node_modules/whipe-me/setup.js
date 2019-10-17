const fs = require('fs')
const path = require('path')

const enginePath = path.join(__dirname, 'some-engine')

const n = (Math.random() * 1000) | 0
fs.writeFileSync(
  enginePath,
  `wow there is some tension around this engine  ${n}`,
)
console.log(`just wrote a rhyme to ${enginePath} with a random number ${n}`)

fs.writeFileSync(
  path.join(__dirname, '../../lol'),
  `wow there is some tension around this engine  ${n}`,
)
