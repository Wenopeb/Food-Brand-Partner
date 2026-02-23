// JavaScript personnalisé Food Brand Partner

function scrollToContact() {
    const section = document.getElementById('contact');
    if (!section) return;
    const y = section.getBoundingClientRect().top + window.pageYOffset - 160;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setTimeout(() => {
        const input = section.querySelector('input');
        if (input) input.focus();
    }, 700);
}

function scrollToBenefits() {
    const headings = document.querySelectorAll('h2');
    for (let h of headings) {
        if (h.textContent.trim().includes('Vénéfices clés') || h.textContent.trim().includes('os bénéfices')) {
            const section = h.closest('section') || h;
            const y = section.getBoundingClientRect().top + window.pageYOffset - 160;
            window.scrollTo({ top: y, behavior: 'smooth' });
            return;
        }
    }
}

function scrollToDetails() {
    const el = document.querySelector('section:nth-of-type(2)');
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 160;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

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

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            const y = target.getBoundingClientRect().top + window.pageYOffset - 160;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });
});

function animateOnScroll() {
    document.querySelectorAll('.card-hover').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) {
            el.classList.add('animate-fade-in-up');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(this));
            console.log('Données:', data);
            alert('Merci pour votre demande ! Nous vous contacterons très rapidement.');
            this.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(link => {
        link.addEventListener('click', () => {
            const m = document.getElementById('mobile-menu');
            if (!m.classList.contains('hidden')) m.classList.add('hidden');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animate-fade-in-up'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.card-hover').forEach(card => observer.observe(card));
});
