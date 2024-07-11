const claimButton = document.getElementById('claim-button');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');
claimButton.addEventListener('click', (e) => {
    if(emailInput.value == "" || passInput.value == ""){
        alert("Please enter your email and password to claim coupon");
    } else{
    alert("Thank you for claiming the coupon! You will receive your exclusive coupon code shortly on your email");
    }
})
