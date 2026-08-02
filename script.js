// ==========================================================================
// MAVIK Construction Consultancy - Static Interactive Script
// Pure client-side UI interactions (No backend dependencies required)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Drawer Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking any nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Smooth Scrolling for Anchor Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header')?.offsetHeight || 85;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Header Auto-Hide on Scroll Down & Reveal on Scroll Up
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (header) {
            if (scrollTop > 80) {
                if (scrollTop > lastScrollTop && !navMenu?.classList.contains('active')) {
                    // Scrolling down -> hide header
                    header.classList.add('header-hidden');
                } else {
                    // Scrolling up -> reveal header
                    header.classList.remove('header-hidden');
                }
                header.style.backgroundColor = 'rgba(7, 37, 27, 0.96)';
                header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.3)';
            } else {
                // Near top of page -> show header
                header.classList.remove('header-hidden');
                header.style.backgroundColor = 'rgba(7, 37, 27, 0.92)';
                header.style.boxShadow = 'none';
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // 4. Scroll Reveal Animations (IntersectionObserver)
    const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply scroll reveal animations to key cards and sections
    const elementsToReveal = document.querySelectorAll(
        '.about-text, .about-image-wrapper, .service-card, .sector-item, .contact-info, .contact-image-wrapper'
    );

    elementsToReveal.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(32px)';
        el.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index % 4 * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index % 4 * 0.08}s`;
        revealObserver.observe(el);
    });

    // Reset mobile navigation on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
