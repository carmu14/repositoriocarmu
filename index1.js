const http = require('http')

http.createServer (function (req, res) {
    res.end ('Hola Mundo')
}).listen(3000, () => console.log('servidor en el puerto 3000'))