const imags = document.querySelectorAll(".header-slider ul img");
const prevButton = document.querySelector(".control_prev");
const nextButton = document.querySelector(".control_next");

let n = 0;

function changeSlide(){
    for (let i = 0; i < imags.length; i++){
        imags[i].style.display = 'none';
    }
    imags[n].style.display = 'block';
}
changeSlide();

prevButton.addEventListener('click', (e) => {
    if (n>0){
        n--;
    } else{
        n = imags.length - 1;
    }

    changeSlide();
})

nextButton.addEventListener('click', (e) => {
    if(n < imags.length - 1){
        n++;
    } else{
        n = 0
    }
    changeSlide();
})

