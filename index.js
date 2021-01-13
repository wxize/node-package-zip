const fs = require('fs')
const archiver = require('archiver')

let output = fs.createWriteStream(__dirname + '/a.zip')
let archive = archiver('zip')

archive.on('error', err => {
    throw err
})

archive.pipe(output)
archive.directory('dir/', false)

archive.finalize()