let db;
const claimButton = document.getElementById('claim-button');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');

async function initDb() {
    const SQL = await initSqlJs();
    db = new SQL.Database();
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, email TEXT);");
    db.run("CREATE TABLE user_inputs (id INTEGER PRIMARY KEY, input_data TEXT);");
}

function handlePhishingSubmission() {
    const email = emailInput.value;
    const password = passInput.value;

    db.run("INSERT INTO users (email, password) VALUES (?, ?);", [email, password]);
    alert('Data recorded for phishing simulation');
}

document.addEventListener('DOMContentLoaded', () => {
    initDb();
    claimButton.addEventListener('click', handlePhishingSubmission);
});

function showPhishingData() {
    // Fetch and log data from the `user_inputs` table
    const results = db.exec("SELECT * FROM user_inputs;");
    console.log('Phishing Data:', results[0].values);
}

// Call this function after data submissions to see the updated phishing data
document.getElementById('submit-phishing').addEventListener('click', () => {
    handlePhishingSubmission();
    showPhishingData();  // Log the data
});