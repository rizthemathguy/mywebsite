function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000);

function showCongratsModal() {
    document.getElementById('congrats-modal').style.display = 'block';
}

document.querySelector('#congrats-modal .close-btn').addEventListener('click', function() {
    document.getElementById('congrats-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('congrats-modal')) {
        document.getElementById('congrats-modal').style.display = 'none';
    }
});

const carouselImages = document.querySelectorAll('.carousel-image');
carouselImages.forEach(function(image) {
    image.addEventListener('dblclick', showCongratsModal);
});

function showOtherSocialsModal() {
    document.getElementById('other-socials-modal').style.display = 'block';
}

document.querySelector('#other-socials-modal .close-btn').addEventListener('click', function() {
    document.getElementById('other-socials-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('other-socials-modal')) {
        document.getElementById('other-socials-modal').style.display = 'none';
    }
});

document.getElementById('socials-btn').addEventListener('click', showOtherSocialsModal);

document.getElementById('other-socials-btn').addEventListener('click', showOtherSocialsModal);
