function processImageNavigation(evt) {
    if(evt.target.classList.contains('next')) {
        console.log('next');
    } else {
        console.log('prev');
    }
}

let clickers = document.querySelectorAll('.content-2 .clicker');
//clickers.forEach(el => el.addEventListener('click', processImageNavigation));
clickers.forEach(el => {
    el.addEventListener('click', evt => {
        processImageNavigation(evt)
    })
});