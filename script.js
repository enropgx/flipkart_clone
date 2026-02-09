document.addEventListener('DOMContentLoaded', () => {
    console.log("Flipkart Clone Loaded");

    const track = document.querySelector('.slider-track');
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    let currentIndex = 0;

    const updateSlidePosition = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    // Auto Slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }, 3000);

    // Initial resize fix
    window.addEventListener('resize', updateSlidePosition);
    // Login Modal Logic
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.querySelector('.login-btn');
    const closeBtn = document.getElementById('closeModal');

    // Open Modal
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        loginModal.style.display = 'flex';
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Close on Outside Click
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});

