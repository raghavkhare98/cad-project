const reviewSubmitButton = document.querySelector('#review-submit-btn');
const reviewInputBox = document.querySelector('.review-input-box');
const reviewSection = document.querySelector('.reviews-section');
reviewSubmitButton.addEventListener('click', () => {
    let addHtml = 
    reviewSection.innerHTML += `<div class="review">
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
                <p>${reviewInputBox.value}</p>
            </div>
        </div>`;
    reviewInputBox.value = '';  
});