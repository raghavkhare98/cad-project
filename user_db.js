let db;

async function initDb() {
    const SQL = await initSqlJs();
    db = new SQL.Database();
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, email TEXT);");
    db.run("CREATE TABLE user_inputs (id INTEGER PRIMARY KEY, input_data TEXT);");
}

function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    db.run("INSERT INTO users (username, password, email) VALUES (?, ?, ?);", [username, password, email]);
    alert('User registered');
}