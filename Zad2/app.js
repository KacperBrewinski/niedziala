const http = require('http');
const url = require('url');
const routes = require('./routes/index');
const PORT = 3000;
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;
    const method = req.method;

    console.log(`Request received for ${pathname}`);

    res.on('finish', () => {
        console.log(`Response sent for ${pathname}`);
    });

    if (pathname === '/' && method === 'GET') {
        routes.handleHome(res);
    } else if (pathname === '/add-car' && method === 'GET') {
        routes.handleAddCar(res);
    } else if (pathname === '/add-car' && method === 'POST') {
        routes.handleAddCarSubmit(req, res);
    } else if (pathname === '/car' && method === 'GET') {
        routes.handleCar(res);
    } else {
        routes.handlePageNotFound(res);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
