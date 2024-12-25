function toggleDetails(button) {
    const details = button.parentElement.querySelector('.extra-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.innerText = 'Show Less';
    } else {
        details.style.display = 'none';
        button.innerText = 'Learn More';
    }
}

function openFullScreen(imgElement) {
    const modal = document.getElementById('fullscreenModal');
    const modalImg = document.getElementById('fullscreenImage');
    modal.style.display = 'flex';
    modalImg.src = imgElement.src;
}

function closeFullScreen() {
    const modal = document.getElementById('fullscreenModal');
    modal.style.display = 'none';
}
