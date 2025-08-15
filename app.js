// Animación de fade-in al hacer scroll en secciones principales
// Aplica la clase 'fade-in' cuando el elemento entra en pantalla

document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in-scroll');
    const options = {
        threshold: 0.2
    };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
