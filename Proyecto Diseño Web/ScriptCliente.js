let slideIndex = 0;
let slideTimer;

showSlides();

document.getElementById('prev-btn').addEventListener('click', () => {
    clearInterval(slideTimer);
    slideIndex -= 1;
    showSlides();
});

document.getElementById('next-btn').addEventListener('click', () => {
    clearInterval(slideTimer); 
    slideIndex += 1;
    showSlides();
});

function showSlides() {
    const slides = document.getElementsByClassName('image-container');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
    slideTimer = setTimeout(() => {
        slideIndex++;
        showSlides();
    }, 5000); 
}
