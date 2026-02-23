// JavaScript personnalisé Food Brand Partner

// Calcule la hauteur occupée par les éléments fixes en haut
function getHeaderOffset() {
    let offset = 0;
    // Banniere fixe (div.fixed en haut)
    const banner = document.querySelector('div.fixed.top-0');
    if (banner) offset += banner.offsetHeight;
    // Nav sticky
    const nav = document.querySelector('nav');
    if (nav) offset += nav.offsetHeight;
    return offset + 20; // +20px marge visuelle
}

// Scroll vers un élément avec compensation du header
function scrollToElement(element) {
    if (!element) return;
    const offset = getHeaderOffset();
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: top, behavior: 'smooth' });
}

// Fonction pour scroller vers la section de détails/problèmes
function scrollToDetails() {
    const problemsSection = document.querySelector('section h2');
    if (problemsSection) scrollToElement(problemsSection);
}

// Fonction pour scroller vers le formulaire de contact
function scrollToContact() {
    const section = document.getElementById('contact');
    if (section) {
        scrollToElement(section.querySelector('h2') || section);
        setTimeout(() => {
            const firstInput = section.querySelector('input, textarea');
            if (firstInput) firstInput.focus();
        }, 700);
    }
}

// Fonction pour scroller vers la section "Vos bénéfices clés"
function scrollToBenefits() {
    const headings = document.querySelectorAll('h1, h2, h3');
    for (let el of headings) {
        if (el.textContent && el.textContent.includes('Vos bénéfices clés')) {
            const section = el.closest('section') || el;
            scrollToElement(section.querySelector('h2') || section);
            return;
        }
    }
}

// Fonction pour toggle le menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Fonction pour toggle les FAQ
function toggleFaq(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        answer.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

// Smooth scrolling pour les liens d'ancrage (ex: #faq)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) scrollToElement(target);
        });
    });
});

// Animation au scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card-hover');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 150) {
            element.classList.add('animate-fade-in-up');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            console.log('Données du formulaire:', data);
            alert('Merci pour votre demande ! Nous vous contacterons très rapidement.');
            this.reset();
        });
    }
});

// Fermer le menu mobile quand on clique sur un lien
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a, #mobile-menu button');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});

// Lazy loading animation au scroll
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.card-hover').forEach(card => observer.observe(card));
});
