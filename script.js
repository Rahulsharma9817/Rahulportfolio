if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function resetScrollPosition() {
    const root = document.documentElement;
    const scrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = scrollBehavior;
}

resetScrollPosition();
window.addEventListener('load', resetScrollPosition, { once: true });

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeToggle.innerHTML = isLight ? '☾' : '☼';
});

const roles = ['Software Quality', 'Python Development', 'AI / ML Engineering'];
const currentEl = document.getElementById('roleText');
let rIdx = 0;
let cIdx = 0;
let isDel = false;

function typeEffect() {
    const curRole = roles[rIdx];
    if (isDel) {
        currentEl.textContent = curRole.substring(0, cIdx - 1);
        cIdx--;
    } else {
        currentEl.textContent = curRole.substring(0, cIdx + 1);
        cIdx++;
    }
    
    let speed = isDel ? 50 : 100;
    if (!isDel && cIdx === curRole.length) {
        speed = 2000;
        isDel = true;
    } else if (isDel && cIdx === 0) {
        isDel = false;
        rIdx = (rIdx + 1) % roles.length;
        speed = 500;
    }
    setTimeout(typeEffect, speed);
}
setTimeout(typeEffect, 1000);

const contactForm = document.getElementById('contactForm');
const contactConfirmation = document.getElementById('contactConfirmation');
contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const subject = `Portfolio contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    contactConfirmation.textContent = "Thank you! Your email app is opening with your message. Please send it there, and I'll contact you shortly.";
    contactForm.hidden = true;
    contactConfirmation.hidden = false;
    contactConfirmation.focus();
    window.location.href = `mailto:Rahulsharmajihcl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Added 3D Tilt Effect
document.querySelectorAll('.glass-card:not(.contact-panel), .float-chip, .project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'none';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    });
});
