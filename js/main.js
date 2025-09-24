document.addEventListener('DOMContentLoaded', () => {

    // Lógica para el menú de hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // Lógica para el carrusel/slider de index.html
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slide-arrow.prev');
    const nextBtn = document.querySelector('.slide-arrow.next');

    if (slides.length > 0 && prevBtn && nextBtn) {
        let currentSlide = 0;

        const goToSlide = (slideIndex) => {
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
            });
        };

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            goToSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(currentSlide);
        });

        goToSlide(0);
    }

    // Lógica para los botones "LEER MÁS" en artistas.html
    function setupReadMore(buttonId, textId) {
        const readMoreBtn = document.getElementById(buttonId);
        const hiddenText = document.getElementById(textId);

        if (readMoreBtn && hiddenText) {
            readMoreBtn.addEventListener('click', () => {
                const isVisible = hiddenText.classList.toggle('visible');
                readMoreBtn.textContent = isVisible ? 'LEER MENOS' : 'LEER MÁS';
            });
        }
    }

    setupReadMore('leer-mas-btn', 'texto-oculto');
    setupReadMore('leer-mas-btn-gino', 'texto-oculto-gino');
    setupReadMore('leer-mas-btn-luigi', 'texto-oculto-luigi');

    // Lógica para el carrusel de leyes en vanguardia.html
    const lawsSlides = document.querySelectorAll('.laws-slide');
    const prevLawBtn = document.querySelector('.prev-law');
    const nextLawBtn = document.querySelector('.next-law');

    if (lawsSlides.length > 0 && prevLawBtn && nextLawBtn) {
        let currentLawSlide = 0;

        const showLawSlide = (slideIndex) => {
            lawsSlides.forEach((slide, index) => {
                slide.classList.remove('active');
                if (index === slideIndex) {
                    slide.classList.add('active');
                }
            });
        };

        nextLawBtn.addEventListener('click', () => {
            currentLawSlide = (currentLawSlide + 1) % lawsSlides.length;
            showLawSlide(currentLawSlide);
        });

        prevLawBtn.addEventListener('click', () => {
            currentLawSlide = (currentLawSlide - 1 + lawsSlides.length) % lawsSlides.length;
            showLawSlide(currentLawSlide);
        });

        showLawSlide(0);
    }

    // Lógica para lightGallery en galeria.html
    const galleryContainer = document.getElementById('my-gallery');
    if (galleryContainer) {
        lightGallery(galleryContainer, {
            plugins: [lgZoom, lgThumbnail],
            speed: 500,
            download: false,
            licenseKey: '0000-0000-000-0000', // Clave de licencia de ejemplo
            cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            controls: true,
            mobileSettings: {
                controls: true,
                showCloseIcon: true,
                download: false
            }
        });
    }

});