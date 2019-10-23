const express = require('express')


function startMockServer(port = 3001) {
    const app = express()
    app.get('*', function (req, res) {
        const { path } = req
        const fileName = path.replace(/\//g, '-')
        const data = require(`./mock-data/${fileName}.json`)
        res.json(data)
    })

    const server = app.listen(port)
    console.log('Mock server listening on: ', port)
    return server
}

startMockServer()