// Premium Navigation with Framer Motion-like animations
const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');

if (burger && menu) {
    const toggle = () => {
        const open = menu.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    
    burger.addEventListener('click', toggle);
    burger.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    });
    
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            menu.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        }
    });
}

// Enhanced Hero rotating word with premium animations
document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.flicker-word');
    if (!el) return;
    
    const raw = el.getAttribute('data-rotating-words') || '';
    const words = raw.split(',').map(s => s.trim()).filter(Boolean);
    if (!words.length) return;

    let i = 0;
    const applyWord = (w) => {
        // Enhanced glitch effect
        el.classList.remove('flicker-animate');
        void el.offsetWidth; // Force reflow
        el.textContent = w;
        el.setAttribute('data-text', w);
        el.classList.add('flicker-animate');
        
        // Add extra glow effect
        el.style.textShadow = '0 0 30px rgba(34, 197, 94, 0.8)';
        setTimeout(() => {
            el.style.textShadow = '0 0 20px rgba(34, 197, 94, 0.5)';
        }, 600);
    };

    // Initialize with first word
    const initial = el.textContent.trim() || words[0];
    const startIndex = Math.max(0, words.indexOf(initial));
    i = startIndex;
    applyWord(words[i]);

    // Rotate every 2.5s for better UX
    const intervalMs = 2500;
    setInterval(() => {
        i = (i + 1) % words.length;
        applyWord(words[i]);
    }, intervalMs);
});

// Premium loading screen with enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Enhanced loading sequence
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            loadingScreen.classList.add('hidden');
            
            // Remove from DOM after animation
            setTimeout(() => {
                loadingScreen.remove();
            }, 1000);
        }
    }, 3500);
});

// Premium slider with enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('[data-slider]');
    if (!root) return;
    
    const track = root.querySelector('[data-slides]');
    const slides = Array.from(track.children);
    const prev = root.querySelector('[data-prev]');
    const next = root.querySelector('[data-next]');
    const dotsWrap = root.querySelector('[data-dots]');
    let index = 0;
    let timer;
    const delay = 5000; // Increased for better viewing

    // Enhanced entrance animation with premium effects
    setTimeout(() => {
        root.classList.remove('loading');
        root.classList.add('loaded');
        
        // Add stagger animation to content with enhanced effects
        const content = root.querySelectorAll('.slide-content');
        content.forEach((item, i) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
                item.style.filter = 'blur(0px)';
            }, i * 300);
        });
        
        // Add floating particles effect
        createFloatingParticles(root);
    }, 1200);

    const setIndex = (n) => {
        index = (n + slides.length) % slides.length;
        update();
    };
    
    const update = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
        dotsWrap.querySelectorAll('button').forEach((b, i) => 
            b.setAttribute('aria-selected', i === index ? 'true' : 'false')
        );
        
        // Enhanced slide transition with premium effects
        track.style.transition = 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        // Add content animation on slide change
        const currentSlide = slides[index];
        const slideContent = currentSlide.querySelector('.slide-content');
        if (slideContent) {
            slideContent.style.opacity = '0';
            slideContent.style.transform = 'translateY(60px) scale(0.9)';
            
            setTimeout(() => {
                slideContent.style.opacity = '1';
                slideContent.style.transform = 'translateY(0) scale(1)';
                slideContent.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }, 300);
        }
        
        // Animate stats
        animateStats(currentSlide);
    };

    // Enhanced dots with animations
    slides.forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-label', `Go to slide ${i+1}`);
        b.addEventListener('click', () => {
            setIndex(i);
            restart();
        });
        
        // Add hover effects
        b.addEventListener('mouseenter', () => {
            b.style.transform = 'scale(1.3)';
            b.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.4)';
        });
        
        b.addEventListener('mouseleave', () => {
            if (!b.getAttribute('aria-selected') === 'true') {
                b.style.transform = 'scale(1)';
                b.style.boxShadow = 'none';
            }
        });
        
        dotsWrap.appendChild(b);
    });

    // Enhanced navigation buttons
    prev?.addEventListener('click', () => {
        setIndex(index - 1);
        restart();
    });
    
    next?.addEventListener('click', () => {
        setIndex(index + 1);
        restart();
    });

    const start = () => { 
        timer = setInterval(() => setIndex(index + 1), delay); 
    };
    const stop = () => { 
        if (timer) clearInterval(timer); 
    };
    const restart = () => { 
        stop(); 
        start(); 
    };

    // Enhanced hover/focus interactions
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    // Enhanced touch interactions
    let startX = 0;
    let dx = 0;
    let touching = false;
    
    const onStart = (x) => {
        touching = true;
        startX = x;
        dx = 0;
        stop();
    };
    
    const onMove = (x) => {
        if (!touching) return;
        dx = x - startX;
        track.style.transform = `translateX(calc(-${index*100}% + ${dx}px))`;
        track.style.transition = 'none';
    };
    
    const onEnd = () => {
        if (!touching) return;
        touching = false;
        const threshold = 80; // Increased threshold
        if (dx > threshold) setIndex(index - 1);
        else if (dx < -threshold) setIndex(index + 1);
        else update();
        start();
    };
    
    root.addEventListener('touchstart', e => onStart(e.touches[0].clientX), { passive: true });
    root.addEventListener('touchmove', e => onMove(e.touches[0].clientX), { passive: true });
    root.addEventListener('touchend', onEnd);

    // Initialize
    update();
    start();
});

// Enhanced scroll reveal with premium animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.reveal');
    if (!sections.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Add stagger animation to cards
                const cards = entry.target.querySelectorAll('.card');
                cards.forEach((card, i) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, i * 150);
                });
                
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(s => io.observe(s));
});

// Premium navigation scroll effects
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/show nav on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
});

// Premium button hover effects
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px) scale(1.02)';
            button.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(34, 197, 94, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
            button.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.25)';
        });
    });
});

// Premium card hover effects
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.03)';
            card.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)';
            
            // Animate icon
            const icon = card.querySelector('.card-icon');
            if (icon) {
                icon.style.opacity = '1';
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)';
            
            // Reset icon
            const icon = card.querySelector('.card-icon');
            if (icon) {
                icon.style.opacity = '0';
                icon.style.transform = 'scale(0.5) rotate(-10deg)';
            }
        });
    });
});

// Premium stats counter animation
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number, .hero-stat .stat-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target.toString().includes('$')) {
                element.textContent = `$${Math.floor(current)}M+`;
            } else if (target.toString().includes('%')) {
                element.textContent = `${Math.floor(current)}%`;
            } else {
                element.textContent = `${Math.floor(current)}+`;
            }
        }, 20);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                let target = 0;
                
                if (text.includes('$2M')) target = 2;
                else if (text.includes('50')) target = 50;
                else if (text.includes('99.9')) target = 99.9;
                else if (text.includes('24/7')) return;
                
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
});

// Premium parallax effects
document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('.hero-particles, .hero::before, .hero::after');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            if (element) {
                element.style.transform = `translateY(${rate}px)`;
            }
        });
    });
});

// Premium typing effect for hero subtitle
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.hero-sub');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    setTimeout(typeWriter, 2000);
});

// Premium smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Premium loading states for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('button, .btn, .card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', () => {
            element.style.transform = 'scale(0.95)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Premium error handling and fallbacks
window.addEventListener('error', (e) => {
    console.log('Premium error handling activated:', e.message);
    // Graceful degradation for animations
    document.body.classList.add('animations-disabled');
});

// Premium helper functions
function createFloatingParticles(container) {
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
            animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
        `;
        
        container.appendChild(particle);
    }
}

function animateStats(slide) {
    const stats = slide.querySelectorAll('.stat-number');
    
    stats.forEach((stat, index) => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        
        if (number) {
            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                
                if (text.includes('$')) {
                    stat.textContent = `$${Math.floor(current)}M+`;
                } else if (text.includes('%')) {
                    stat.textContent = `${Math.floor(current)}%`;
                } else {
                    stat.textContent = `${Math.floor(current)}+`;
                }
            }, 30);
        }
    });
}

// Premium performance optimization
document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const criticalResources = [
        '/assets/css/style.css',
        '/assets/js/main.js'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
    });
});