const fs = require('fs')
const path = require('path')

const enginePath = path.join(__dirname, 'some-engine')

if (!fs.existsSync(enginePath)) {
  fs.writeFileSync(enginePath, 'wow there is some tension around this engine')
  console.log(`just wrote a rhyme to ${enginePath}`)
} else {
  console.log(`${enginePath} is already here!`)
}
