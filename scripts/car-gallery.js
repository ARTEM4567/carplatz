let viewGalleryButtons = document.querySelectorAll('.img-car-view-gallery');
let galleryButtons = document.querySelectorAll('.gallery-img-car');
let body = document.querySelector('body');
let gallery = document.querySelector('.gallery');
let closeButton = document.querySelector('.close-button');
let imgs = document.querySelector('.imgs');
let slider = document.querySelector('.slider');
let carouselItems = document.querySelectorAll('.carousel-item');

viewGalleryButtons.forEach(button => {
    button.addEventListener('click', () => {
        gallery.classList.add('gallery-active');
        body.style.overflow = 'hidden';
    })
});

closeButton.addEventListener('click', () => {
    gallery.classList.remove('gallery-active');
    body.style.overflow = 'auto';
    galleryButtons.forEach(button => {
        button.style.display = 'inline-block';
    });
    slider.style.display = 'none';
    carouselItems.forEach(item => {
        item.classList.remove('active');
    })
})

for(let i = 0; i < galleryButtons.length; i++){
    galleryButtons[i].addEventListener('click', () => {
        galleryButtons.forEach(button => {
            button.style.display = 'none';
        });
        slider.style.display = 'inline-block';
        carouselItems[i].classList.add('active');
    })
}