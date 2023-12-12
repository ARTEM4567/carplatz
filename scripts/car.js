let descriptions = document.querySelectorAll('.description');
let readMoreButton = document.querySelector('.read-more');
let readMoreButtonBool = true;

readMoreButton.addEventListener('click', () => {
    descriptions.forEach(element => {
        element.classList.toggle('display-none');
    })
    if (readMoreButtonBool){
        readMoreButton.innerHTML = 'Hide';
        readMoreButtonBool = false;
    } else {
        readMoreButton.innerHTML = 'Read more';
        readMoreButtonBool = true;
    }
})