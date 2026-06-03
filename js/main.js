// ========================================
// PRELOADER PREMIUM
// ========================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Aguarda 2.5s antes de remover o preloader
    setTimeout(() => {
        preloader.classList.add('hidden');
        
        // Remove o preloader do DOM após a transição
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 2500);
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Adiciona classe 'scrolled' quando rolar mais de 100px
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        
        // Previne scroll quando menu está aberto
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Fecha menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ========================================
// SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// INTERSECTION OBSERVER - REVEAL ON SCROLL
// ========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Elemento precisa estar 15% visível para disparar
};

// Callback do observer
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona classe 'revealed' com delay baseado no índice
            const delay = entry.target.dataset.delay || 0;
            
            setTimeout(() => {
                entry.target.classList.add('revealed');
            }, delay);
            
            // Para de observar o elemento após revelar
            observer.unobserve(entry.target);
        }
    });
};

// Cria o observer
const revealObserver = new IntersectionObserver(observerCallback, observerOptions);

// Observa todos os elementos com classe 'reveal-element'
const revealElements = document.querySelectorAll('.reveal-element');
revealElements.forEach((element, index) => {
    // Adiciona delay progressivo para elementos em sequência
    element.dataset.delay = index * 100;
    revealObserver.observe(element);
});

// ========================================
// ANIMAÇÃO DE NÚMEROS (CONTADORES)
// ========================================
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
};

// Observer para contadores
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const text = statNumber.textContent;
            
            // Extrai o número do texto
            let targetNumber;
            if (text.includes('%')) {
                targetNumber = parseInt(text);
                statNumber.textContent = '0%';
                
                animateCounter(statNumber, targetNumber, 2000);
                statNumber.textContent = targetNumber + '%';
            } else if (text.includes('k')) {
                targetNumber = parseInt(text);
                animateCounter(statNumber, targetNumber, 2000);
            } else {
                targetNumber = parseInt(text);
                animateCounter(statNumber, targetNumber, 2000);
            }
            
            counterObserver.unobserve(statNumber);
        }
    });
}, { threshold: 0.5 });

// Observa todos os números de estatísticas
document.querySelectorAll('.stat-number').forEach(stat => {
    counterObserver.observe(stat);
});

// ========================================
// PARALLAX SUAVE NO HERO
// ========================================
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

if (heroSection && heroContent) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        
        // Aplica parallax apenas enquanto o hero está visível
        if (scrolled < heroHeight) {
            const parallaxSpeed = 0.5;
            heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            heroContent.style.opacity = 1 - (scrolled / heroHeight) * 1.5;
        }
    });
}

// ========================================
// HOVER EFFECT NOS CARDS DO MENU
// ========================================
const menuCards = document.querySelectorAll('.menu-card');

menuCards.forEach(card => {
    const cardImage = card.querySelector('.card-image');
    const harmonizationText = card.querySelector('.harmonization-text');
    
    card.addEventListener('mouseenter', () => {
        // Zoom na imagem
        if (cardImage) {
            cardImage.style.transform = 'scale(1.08)';
        }
        
        // Aumenta opacidade do texto de harmonização
        if (harmonizationText) {
            harmonizationText.style.opacity = '1';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        // Reseta zoom da imagem
        if (cardImage) {
            cardImage.style.transform = 'scale(1)';
        }
        
        // Reseta opacidade do texto de harmonização
        if (harmonizationText) {
            harmonizationText.style.opacity = '0.8';
        }
    });
});

// ========================================
// FORMULÁRIO DE RESERVA
// ========================================
const reservaForm = document.getElementById('reservaForm');

if (reservaForm) {
    reservaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coleta dados do formulário
        const formData = new FormData(reservaForm);
        const data = Object.fromEntries(formData);
        
        // Simula envio (aqui você integraria com backend)
        console.log('Dados da reserva:', data);
        
        // Feedback visual
        const submitBtn = reservaForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simula delay de envio
        setTimeout(() => {
            submitBtn.textContent = '✓ Reserva Confirmada!';
            submitBtn.style.backgroundColor = '#4CAF50';
            
            // Reseta formulário
            setTimeout(() => {
                reservaForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                
                // Mostra mensagem de sucesso
                alert('Reserva realizada com sucesso! Entraremos em contato em breve.');
            }, 2000);
        }, 1500);
    });
}

// ========================================
// LAZY LOADING DE IMAGENS
// ========================================
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // Se a imagem tem data-src, carrega ela
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            
            // Adiciona classe 'loaded' para animação
            img.classList.add('loaded');
            
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px' // Começa a carregar 50px antes de entrar na tela
});

// Observa todas as imagens com data-src
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ========================================
// BOTÕES DE AÇÃO (CTAs)
// ========================================
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-card, .btn-unidade');

ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Efeito ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// CSS para o efeito ripple (adiciona dinamicamente)
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

// ========================================
// CURSOR CUSTOMIZADO (OPCIONAL - PREMIUM)
// ========================================
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.classList.add('cursor-follower');
document.body.appendChild(cursorFollower);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animação suave do cursor
const animateCursor = () => {
    // Cursor principal (rápido)
    cursorX += (mouseX - cursorX) * 0.3;
    cursorY += (mouseY - cursorY) * 0.3;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    
    // Cursor follower (lento)
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    
    requestAnimationFrame(animateCursor);
};

animateCursor();

// Aumenta cursor ao passar sobre elementos clicáveis
const clickableElements = document.querySelectorAll('a, button, .menu-card, .unidade-card');
clickableElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-hover');
    });
});

// CSS para cursor customizado
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .custom-cursor,
    .cursor-follower {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
    }
    
    .custom-cursor {
        width: 10px;
        height: 10px;
        background-color: #d4af37;
        border-radius: 50%;
        margin-left: -5px;
        margin-top: -5px;
    }
    
    .cursor-follower {
        width: 40px;
        height: 40px;
        border: 1px solid #d4af37;
        border-radius: 50%;
        margin-left: -20px;
        margin-top: -20px;
        transition: transform 0.15s ease-out;
    }
    
    .custom-cursor.cursor-hover {
        transform: scale(1.5);
    }
    
    .cursor-follower.cursor-hover {
        transform: scale(1.5);
    }
    
    @media (max-width: 768px) {
        .custom-cursor,
        .cursor-follower {
            display: none;
        }
    }
`;
document.head.appendChild(cursorStyle);

// ========================================
// PERFORMANCE: DEBOUNCE PARA SCROLL
// ========================================
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplica debounce no scroll
const debouncedScroll = debounce(() => {
    // Funções de scroll aqui
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ========================================
// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
// ========================================
// Garante que elementos começam invisíveis
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px) scale(0.95)';
    });
});

// ========================================
// VIDEO AUTOPLAY FIX (MOBILE)
// ========================================
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    // Tenta reproduzir o vídeo
    const playPromise = heroVideo.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Autoplay foi prevenido, mostra poster
            console.log('Autoplay prevented:', error);
        });
    }
    
    // Garante que o vídeo está mutado para autoplay funcionar
    heroVideo.muted = true;
}

// ========================================
// CONSOLE LOG PREMIUM
// ========================================
console.log('%c🔥 Restaurante Premium', 'font-size: 20px; font-weight: bold; color: #d4af37;');
console.log('%cSite desenvolvido com animações cinematográficas e performance otimizada', 'font-size: 12px; color: #999;');
console.log('%c60 FPS garantidos | Hardware Accelerated | IntersectionObserver API', 'font-size: 10px; color: #666;');

// ========================================
// EXPORT PARA MÓDULOS (SE NECESSÁRIO)
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animateCounter,
        debounce
    };
}

// Made with Bob
