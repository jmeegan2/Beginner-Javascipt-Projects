const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

// Add event listener
closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedface.classList.remove('active');
    }
});

openFace/addEventListener('click', () => {
    if(closedface.classList.contains('closed')) {
        closedFace.classList.add('active')
        openFace.classList.remove('active')
    }
})