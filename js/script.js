// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            mobileMenu.classList.add('hidden');
        }
    });
});

// Toggle section functionality
function toggleSection(header) {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('open');

    // Close all other sections
    document.querySelectorAll('.toggle-content.open').forEach(openContent => {
        if (openContent !== content) {
            openContent.classList.remove('open');
            openContent.previousElementSibling.classList.remove('active');
        }
    });

    // Toggle current section
    if (isOpen) {
        content.classList.remove('open');
        header.classList.remove('active');
    } else {
        content.classList.add('open');
        header.classList.add('active');
    }
}