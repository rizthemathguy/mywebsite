const otherSocialsBtn = document.getElementById('other-socials-btn');
const otherSocialsModal = document.getElementById('other-socials-modal');
const closeBtn = document.querySelectorAll('.close-btn');

otherSocialsBtn.addEventListener('click', function () {
    otherSocialsModal.style.display = 'block';
});

closeBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        otherSocialsModal.style.display = 'none';
        doubleClickModal.style.display = 'none';
    });
});

window.addEventListener('click', function (e) {
    if (e.target == otherSocialsModal) {
        otherSocialsModal.style.display = 'none';
    }
});

const carouselImages = document.querySelectorAll('.carousel-item img');
const doubleClickModal = document.getElementById('double-click-modal');

carouselImages.forEach(function (img) {
    img.addEventListener('dblclick', function () {
        doubleClickModal.style.display = 'block';
    });
});
