// JS simplificado e estável para o site Villa Parrilla

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');

            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1600);
        }, 2600);
    }
});

const header = document.getElementById('header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');
        const target = document.querySelector(targetSelector);

        if (!target) return;

        e.preventDefault();

        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.reveal-element').forEach(element => {
    element.classList.add('revealed');
});

console.log('Villa Parrilla carregado com JS simplificado.');

// Made with Bob
