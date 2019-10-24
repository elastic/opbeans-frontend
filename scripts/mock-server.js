const express = require('express')
const { readFileSync } = require('fs')
const { join } = require('path')


function startMockServer(port = 3001) {
    const app = express()
    app.get('*', function (req, res) {
        const { path } = req
        const fileName = path.replace(/\//g, '-')
        const data = JSON.parse(readFileSync(join(__dirname, `./mock-data/${fileName}.json`), 'utf8'))
        res.json(data)
    })

    const server = app.listen(port)
    console.log('Mock server listening on: ', port)
    return server
}

startMockServer()