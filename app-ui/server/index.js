const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/api/state/cache', (request, response) => {
    if (request.method === 'POST') {
        const data = require('./basicConnection')
        response.status(204).jsonp(data())
    }
})
server.listen(port, () => {
    console.log('JSON Server is running')
})