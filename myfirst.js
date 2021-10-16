const fs = require('fs')

const k = fs.readFileSync(process.argv[2])
const lines = k.toString().split('\n').length -1

console.log(lines);