let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;console.log("Workin");

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('rotatingForward');
        pages[currentPage].classList.add('rotatingBackward');
        console.log("Working pre");
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
    pages[currentPage].classList.add('rotatingForward');
    pages[currentPage].classList.remove('rotatingBackward');
    currentPage++;
    console.log("Working nxt");
}
});
