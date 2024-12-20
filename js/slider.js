const slides = ['images/img-1.jpg', 'images/img-2.jpg', 'images/img-3.jpg', 'images/img-4.jpg']

let viewImage = document.getElementById('viewImage');

let numberSlide = 0;

let nextSlide = document.getElementById("next").addEventListener("click", () => {
    if (numberSlide === 3) {
        numberSlide = 0;
        viewImage.setAttribute('src', slides[numberSlide]);
    } else {
        numberSlide += 1;
        viewImage.setAttribute('src', slides[numberSlide]);
    }
}); 