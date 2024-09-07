document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const otherSocialsBtn = document.getElementById('other-socials-btn');
    const otherSocialsModal = document.getElementById('other-socials-modal');
    const closeBtn = document.querySelectorAll('.close-btn');
    const doubleClickModal = document.getElementById('double-click-modal');
    const carouselImages = document.querySelectorAll('.carousel-item img');
    const backToTopBtn = document.getElementById('back-to-top');

    // Function to update dark mode button text
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

    // Initialize button text on load
    updateButtonText();

    // Dark mode toggle event
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
        if (e.target === otherSocialsModal) {
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

    // Smooth Scroll for Navbar Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lightbox Effect for Photography
    const images = document.querySelectorAll('.photography img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.style.position = 'fixed';
            lightbox.style.top = 0;
            lightbox.style.left = 0;
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            lightbox.style.display = 'flex';
            lightbox.style.alignItems = 'center';
            lightbox.style.justifyContent = 'center';
            document.body.appendChild(lightbox);

            const img = document.createElement('img');
            img.src = image.src;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';
            lightbox.appendChild(img);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
});
