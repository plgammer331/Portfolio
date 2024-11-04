const homeLink = document.getElementById('home-link');
const dropdown = document.getElementById('dropdown');

homeLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    if (dropdown.classList.contains('show')) {
        // Close dropdown
        dropdown.classList.remove('show');
        setTimeout(() => {
            dropdown.style.maxHeight = '0'; // Collapse height after animation
        }, 300); // Match this with the CSS transition duration
    } else {
        // Show dropdown
        dropdown.classList.add('show');
        dropdown.style.maxHeight = '200px'; // Set to max height
    }
});

// Hide dropdown if clicked outside
document.addEventListener('click', function (event) {
    if (!homeLink.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show'); // Hide if clicked outside
        dropdown.style.maxHeight = '0'; // Collapse height after animation
    }
});

// Resume button functionality
document.getElementById('resume-button').addEventListener('click', function() {
    window.location.href = "file:///C:/Users/oplga/OneDrive/Pictures/Omar%20ELHajjPDF.pdf";
});
document.addEventListener('DOMContentLoaded', function() {
    const comingSoonText = "Coming Soon";
    const comingSoonElement = document.querySelector('.coming-soon');
    let i = 0;
    let isAdding = true;

    function type() {
        if (isAdding) {
            // Typing effect
            comingSoonElement.textContent = comingSoonText.slice(0, i);
            i++;
            if (i > comingSoonText.length) {
                isAdding = false; // Start erasing after full text is displayed
                setTimeout(type, 1500); // Wait before erasing
                return;
            }
        } else {
            // Erasing effect
            comingSoonElement.textContent = comingSoonText.slice(0, i);
            i--;
            if (i === 0) {
                isAdding = true; // Start typing again after erasing
                setTimeout(type, 500); // Short pause before typing again
                return;
            }
        }
        setTimeout(type, isAdding ? 200 : 100); // Speed up erasing slightly
    }

    type(); // Start the typing animation
});