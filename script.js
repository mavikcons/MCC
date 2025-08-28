// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Service Card Toggle Functionality
function toggleService(serviceId) {
    const serviceContent = document.getElementById(serviceId);
    const serviceHeader = serviceContent.previousElementSibling;
    const icon = serviceHeader.querySelector('i');

    // Close all other service contents
    document.querySelectorAll('.service-content').forEach(content => {
        if (content.id !== serviceId) {
            content.classList.remove('active');
            const otherIcon = content.previousElementSibling.querySelector('i');
            otherIcon.style.transform = 'rotate(0deg)';
        }
    });

    // Toggle the clicked service
    serviceContent.classList.toggle('active');

    if (serviceContent.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(117, 94, 74, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(117, 94, 74, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, .service-card, .sector-card');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Contact button click analytics (optional)
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnText = e.target.textContent.trim();
        console.log(`Contact button clicked: ${btnText}`);
        // You can add analytics tracking here if needed
    });
});

// Form validation for external contact form (if needed)
// This is a placeholder for future enhancements

// Loading animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Add a slight delay to hero content animation
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 300);
});

// Add loaded class for CSS animations
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
});

// Dropdown menu handling for mobile
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown > .nav-link');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 700) {
                e.preventDefault();
                const dropdown = e.target.closest('.dropdown');
                const menu = dropdown.querySelector('.dropdown-menu');

                // Close other dropdowns
                dropdownToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        const otherDropdown = otherToggle.closest('.dropdown');
                        const otherMenu = otherDropdown.querySelector('.dropdown-menu');
                        otherMenu.style.display = 'none';
                    }
                });

                // Toggle current dropdown
                if (menu.style.display === 'block') {
                    menu.style.display = 'none';
                } else {
                    menu.style.display = 'block';
                }
            }
        });
    });
});

// Close mobile dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 700) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    }
});

// Resize event handler
window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        // Reset mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');

        // Reset dropdown displays
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = '';
        });
    }
});

// Preloader functionality (optional)
// Uncomment if you want to add a loading screen
/*
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});
*/

// Error handling for external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add any external link tracking here if needed
        console.log(`External link clicked: ${e.target.href}`);
    });
});

// Back to top functionality (optional enhancement)
// Uncomment if you want to add a back-to-top button
/*
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.display = 'none';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
*/