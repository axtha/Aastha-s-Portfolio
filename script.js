// Highlight the current section's nav link as the page is scrolled.
// (Smooth scrolling itself is handled by CSS: html { scroll-behavior: smooth; })

const navLinks = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
                const a = link.querySelector('a');
                if (!a) return;
                link.classList.toggle('active', a.getAttribute('href') === `#${id}`);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach((section) => observer.observe(section));
