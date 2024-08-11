document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const otherSocialsBtn = document.getElementById('other-socials-btn');
    const otherSocialsModal = document.getElementById('other-socials-modal');
    const closeBtn = document.querySelectorAll('.close-btn');
    const doubleClickModal = document.getElementById('double-click-modal');
    const carouselImages = document.querySelectorAll('.carousel-item img');
    const backToTopBtn = document.getElementById('back-to-top');

    function updateButtonText() {
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for dark mode
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for light mode
        }
    }

    // Check for dark mode preference in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        }
        updateButtonText();
    });

    // Initialize button text on load
    updateButtonText();

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

    // Add spinning effect to images
    document.querySelectorAll('.image-container img').forEach(img => {
        img.classList.add('spinning-img');
    });
});
