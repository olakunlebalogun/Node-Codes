const app = require('./app')
const http = require('http');
const server = http.createServer(app)
const PORT = process.env.PORT || 7000


server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
});