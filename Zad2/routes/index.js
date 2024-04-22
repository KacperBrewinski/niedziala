const { renderPage: renderHomePage } = require('../views/home');
const { renderPage: renderCarPage } = require('../views/car');
const { renderPage: renderAddCarPage } = require('../views/add-car');

let lastAddedCarData = "";

const handleHome = (response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(renderHomePage());
    response.end();
};

const handleAddCar = (response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(renderAddCarPage());
    response.end();
};

const handleAddCarSubmit = (request, response) => {
    lastAddedCarData = "Dane dla ostatnio dodanego samochodu";
    response.writeHead(302, { 'Location': '/car' });
    response.end();
};

const handleCar = (response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(renderCarPage(lastAddedCarData));
    response.end();
};

const handlePageNotFound = (response) => {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write('404 Page Not Found');
    response.end();
};

module.exports = {
    handleHome,
    handleAddCar,
    handleAddCarSubmit,
    handleCar,
    handlePageNotFound
};
