function renderPage() {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
    <title>Home</title>
</head>
<body>
    <main>Welcome to the car app home page!</main>
    <header>
    <nav>
        <ul> 
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/add-car">Add car</a>
        </li>
        <li>
            <a href="/car">Last added car</a>
        </li>
        </ul>
    </nav>
    </header>
</body>
</html>`;
}
module.exports = {
    renderPage
};