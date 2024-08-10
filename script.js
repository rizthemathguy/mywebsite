// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toLocaleString();
}

// Call updateDateTime every second
setInterval(updateDateTime, 1000);

// Function to show the "Congratulations" modal
function showCongratsModal() {
    document.getElementById('congrats-modal').style.display = 'block';
}

// Close the modal when the close button is clicked
document.querySelector('#congrats-modal .close-btn').addEventListener('click', function() {
    document.getElementById('congrats-modal').style.display = 'none';
});

// Close modal if clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('congrats-modal')) {
        document.getElementById('congrats-modal').style.display = 'none';
    }
});

// Add double-click event listener to all images in the carousel
const carouselImages = document.querySelectorAll('.carousel-image');
carouselImages.forEach(function(image) {
    image.addEventListener('dblclick', showCongratsModal);
});

// Function to show the Other Socials modal
function showOtherSocialsModal() {
    document.getElementById('other-socials-modal').style.display = 'block';
}

// Close the Other Socials modal when the close button is clicked
document.querySelector('#other-socials-modal .close-btn').addEventListener('click', function() {
    document.getElementById('other-socials-modal').style.display = 'none';
});

// Close Other Socials modal if clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('other-socials-modal')) {
        document.getElementById('other-socials-modal').style.display = 'none';
    }
});

// Add click event listener to Socials button
document.getElementById('socials-btn').addEventListener('click', showOtherSocialsModal);

// Add click event listener to Other Socials button
document.getElementById('other-socials-btn').addEventListener('click', showOtherSocialsModal);
