const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.3
    }
);

document.querySelectorAll(".animate").forEach(el => {
    observer.observe(el);
});
const carousel = document.getElementById('carousel');

carousel.addEventListener('scroll', () => {
    const width = carousel.offsetWidth;
    const scrollPos = carousel.scrollLeft;
    
    // Calculate which slide is active based on scroll position

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.detail-row').forEach(row => {
    // Initial state before scroll
    row.style.opacity = "0";
    row.style.transform = "translateY(40px)";
    row.style.transition = "all 0.8s ease-out";
    observer.observe(row);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});