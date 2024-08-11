const otherSocialsBtn = document.getElementById('other-socials-btn');
const otherSocialsModal = document.getElementById('other-socials-modal');
const closeBtn = document.querySelectorAll('.close-btn');
const doubleClickModal = document.getElementById('double-click-modal');
const carouselImages = document.querySelectorAll('.carousel-item img');
const backToTopBtn = document.getElementById('back-to-top');

// Modal display logic
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

// Double-click modal
carouselImages.forEach(function (img) {
    img.addEventListener('dblclick', function () {
        doubleClickModal.style.display = 'block';
    });
});

// Back to Top button logic
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
