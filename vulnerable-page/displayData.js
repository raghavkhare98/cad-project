document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#phishing-table');
    const phishingData = JSON.parse(localStorage.getItem('phishingData' || []));
    console.log(phishingData);
    phishingData.forEach((element) => {
        const row = document.createElement('tr');
        const emailCell = document.createElement('th');
        const passCell = document.createElement('th');

        emailCell.textContent = element.email;
        passCell.textContent = element.password;

        row.appendChild(emailCell);
        row.appendChild(passCell);

        tableBody.appendChild(row);
    });
})