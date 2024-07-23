const reviewSubmitButton = document.querySelector('#review-submit-btn');
const reviewInputBox = document.querySelector('.review-input-box');
const reviewSection = document.querySelector('.reviews-section');
const errorMessage = document.querySelector('#error-message');

// Function to check for obfuscated links using regex
function containsObfuscatedLinks(text) {
    const obfuscatedLinkRegex = /((https?:\/\/)?(www\.)?[^\s]+\.[^\s]+|[^\s]+@[^\s]+\.[^\s]+)/g;
    return obfuscatedLinkRegex.test(text.replace(/\s+/g, ''));
}

// Function to check for standard links and emails using Linkify
function containsLinksOrEmails(text) {
    const linkified = linkify.find(text);
    return linkified.length > 0;
}

reviewSubmitButton.addEventListener('click', () => {
    // Get the review text from the input box
    let reviewText = reviewInputBox.value;

    // Check if the review text contains any URLs or email addresses
    if (containsLinksOrEmails(reviewText) || containsObfuscatedLinks(reviewText)) {
        // Display an error message
        errorMessage.textContent = 'Your review cannot contain links or email addresses.';
        errorMessage.style.display = 'block';
    } else {
        // Hide the error message
        errorMessage.style.display = 'none';

        // Add the new review to the reviews section
        reviewSection.innerHTML += `
            <div class="review">
                <div class="review-header">
                    <div class="review-author">A User</div>
                    <div class="review-rating">
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9734;</span>
                    </div>
                </div>
                <div class="review-body">
                    <p>${reviewText}</p>
                </div>
            </div>`;

        // Clear the input box
        reviewInputBox.value = '';
    }
});
