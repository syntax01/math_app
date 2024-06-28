function processImageNavigation(evt) {

    var isDirectionNext = evt.target.classList.contains('next');
    var currentImageSrc = elImageImage.getAttribute('src');
    var currentImageId = Number(currentImageSrc.replace('./img/iphone_pro_max_','').replace('.png',''));
    var newImageId = 1;

    if(isDirectionNext) {
        if(currentImageId == 4) {
            newImageId = 1;
        } else {
            newImageId = ++currentImageId;
        }
    } else {
        if(currentImageId == 1) {
            newImageId = 4;
        } else {
            newImageId = --currentImageId;
        }
    }
    var newImageSrc = './img/iphone_pro_max_' + newImageId + '.png';
    elImageImage.setAttribute('src', newImageSrc);



}

let clickers = document.querySelectorAll('.content-2 .clicker');
let elImageImage = document.querySelector('#image_image');
let elImageText = document.querySelector('#image_text');
//clickers.forEach(el => el.addEventListener('click', processImageNavigation));
clickers.forEach(el => {
    el.addEventListener('click', evt => {
        processImageNavigation(evt)
    })
});