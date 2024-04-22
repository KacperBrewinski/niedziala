function renderPage() {
    return `<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
    <title>Add Car</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/add-car">Add car</a></li>
                <li><a href="/car">Last added car</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <form action="/add-car" method="POST">
            <label for="make">Make:</label><br>
            <input type="text" id="make" name="make"><br>
            <label for="model">Model:</label><br>
            <input type="text" id="model" name="model"><br>
            <label for="year">Year:</label><br>
            <input type="number" id="year" name="year"><br>
            <label for="color">Color:</label><br>
            <input type="text" id="color" name="color"><br>
            <button type="submit">Add car</button>
        </form>
    </main>
</body>
</html>`;
}
module.exports = {
    renderPage
};
