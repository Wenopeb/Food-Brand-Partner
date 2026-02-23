// JavaScript personnalisé Food Brand Partner

// Fonction pour scroller vers la section de détails/problèmes
function scrollToDetails() {
    // Scrolle vers la section de détails/problèmes
    const problemsSection = document.querySelector('section h2');
    if (problemsSection) {
        problemsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Fallback: chercher des éléments liés aux détails
        const detailElements = document.querySelectorAll('h2, h3');
        let targetElement = null;

        for (let element of detailElements) {
            const text = element.textContent.toLowerCase();
            if (text.includes('problème') || text.includes('noyé') || text.includes('stagnent') || text.includes('plafonnent')) {
                targetElement = element;
                break;
            }
        }

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Fonction pour scroller vers le formulaire de contact
function scrollToContact() {
    const section = document.getElementById('contact');
    if (section) {
        const offset = 110; // bannière fixe (~40px) + nav sticky (~64px) + marge
        const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
        // Focus sur le premier champ du formulaire après le scroll
        setTimeout(() => {
            const firstInput = section.querySelector('input, textarea');
            if (firstInput) {
                firstInput.focus();
            }
        }, 600);
    }
}

// Fonction pour scroller vers la section "Vos bénéfices clés"
function scrollToBenefits() {
    const benefitsElements = document.querySelectorAll('h1, h2, h3');
    let benefitsSection = null;

    for (let element of benefitsElements) {
        if (element && element.textContent && element.textContent.includes('Vos bénéfices clés')) {
            benefitsSection = element.closest('section') || element;
            break;
        }
    }

    if (benefitsSection) {
        const offset = 110; // bannière fixe (~40px) + nav sticky (~64px) + marge
        const top = benefitsSection.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
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

// Smooth scrolling pour les liens d'ancrage
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 110;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });
});

// Animation au scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card-hover');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-fade-in-up');
        }
    });
}

// Event listeners pour l'animation
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Récupérer les données du formulaire
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Ici vous pouvez ajouter la logique d'envoi du formulaire
            // Par exemple, vers une API ou un service de gestion des leads

            console.log('Données du formulaire:', data);

            // Afficher un message de confirmation
            alert('Merci pour votre demande ! Nous vous contacterons très rapidement.');

            // Réinitialiser le formulaire
            this.reset();
        });
    }
});

// Gestion du menu mobile sur mobile
document.addEventListener('DOMContentLoaded', function() {
    // Fermer le menu mobile quand on clique sur un lien
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

// Performance: lazy loading pour les éléments animés
document.addEventListener('DOMContentLoaded', function() {
    // Observer pour l'animation des cards au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observer tous les éléments avec la classe card-hover
    document.querySelectorAll('.card-hover').forEach(card => {
        observer.observe(card);
    });
});
