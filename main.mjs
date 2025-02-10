
/*
req (request): Contiene información sobre la solicitud del cliente.
res (response): Permite enviar una respuesta al cliente.
statusCode: Indica si la solicitud fue exitosa (200), fallida (404, 500), etc.
setHeader: Define el tipo de contenido de la respuesta.
res.end: Envía la respuesta y finaliza la conexión.
*/

import http from 'http';

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hola mundo!');

});

server.listen(port, hostName, () => {

    console.log('Servidor Corriendo');
    
});