// script for nav bar
function toggleMenu() {
    const menu = document.querySelector('#menu-strip');
    menu.classList.toggle('menu-open');
    const icon = document.querySelector('.menu-icon i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// script for read more & less
function toggleText() {
    const moreText = document.getElementById('more-text');
    const btnText = document.getElementById('read-more-btn');

    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        btnText.innerHTML = 'Read Less';
    } else {
        moreText.style.display = 'none';
        btnText.innerHTML = 'Read More';
    }
}

// script for images background
const images = document.querySelectorAll('.stacked-image');
let currentIndex = 0;

// Function to show the next image
function showNextImage() {
    // Hide the current image
    images[currentIndex].style.opacity = 0;

    // Update the index to the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].style.opacity = 1;
}
setInterval(showNextImage, 3000); 
// Add click event to the image stack
document.querySelector('.image-stack').addEventListener('click', showNextImage);
// script gt
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}
// Function for smooth scroll to Product Categories
function scrollToProductCategories() {
    const screenWidth = window.innerWidth; // Get the screen width
    if (screenWidth <= 768) { // Check if it's a small screen
        document.querySelector('#product-categories').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Add click event for Products link
document.querySelector('.products-link').addEventListener('click', function(event) {
    const screenWidth = window.innerWidth; // Get the screen width
    if (screenWidth <= 768) { // Check if it's a small screen
        event.preventDefault(); // Prevent default link behavior on small screens
        scrollToProductCategories(); // Call smooth scroll function
    }
});

// Scroll to Product Categories when Products is clicked on small screens
document.querySelector('.products-link').addEventListener('click', function(event) {
    const screenWidth = window.innerWidth; // Get the screen width
    if (screenWidth <= 768) { // Check if it's a small screen
        event.preventDefault(); // Prevent the default link behavior
        document.querySelector('#product-categories').scrollIntoView({
            behavior: 'smooth'
        });
    }
});

