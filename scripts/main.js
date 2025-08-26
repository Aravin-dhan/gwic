// Modern GWIC App - Lightweight & Fast
// Performance-first implementation with dark/light mode

class GWICApp {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setupTheme();
        this.setupNavigation();
        this.setupPerformance();
        this.setupInteractions();
    }

    // Theme Management
    setupTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
            this.updateThemeIcon();
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            }
        }
    }

    // Navigation
    setupNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => this.toggleMobileMenu());
            
            // Close menu when clicking links
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.closeMobileMenu());
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
        }

        // Scroll navbar effect
        this.setupScrollNavbar();
    }

    toggleMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    closeMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    setupScrollNavbar() {
        let ticking = false;
        
        const updateNavbar = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            }
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateNavbar();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // Performance Optimizations
    setupPerformance() {
        // Lazy load images
        this.setupLazyLoading();
        
        // Preload critical resources
        this.preloadCritical();
        
        // Setup intersection observer for animations
        this.setupScrollAnimations();
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    preloadCritical() {
        // Preload fonts
        const fontLink = document.createElement('link');
        fontLink.rel = 'preconnect';
        fontLink.href = 'https://fonts.googleapis.com';
        document.head.appendChild(fontLink);
    }

    setupScrollAnimations() {
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        animationObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.card, section').forEach(el => {
                animationObserver.observe(el);
            });
        }
    }

    // Interactions
    setupInteractions() {
        this.setupButtonEffects();
        this.setupFormHandling();
        this.setupBackToTop();
    }

    setupButtonEffects() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (e) => {
                // Simple ripple effect
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    setupFormHandling() {
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showNotification('Form submitted successfully!', 'success');
                form.reset();
            });
        });
    }

    setupBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.className = 'back-to-top';
        backToTop.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTop);
        
        // Show/hide based on scroll
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    backToTop.classList.toggle('visible', window.scrollY > 500);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Notifications
    showNotification(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });
        
        // Auto remove
        const autoRemove = setTimeout(() => {
            this.removeNotification(notification);
        }, duration);
        
        // Manual remove
        notification.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(autoRemove);
            this.removeNotification(notification);
        });
    }

    removeNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }
}

// Enhanced Styles for Performance
const performantStyles = `
/* Ripple Effect */
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background: var(--primary-blue);
    color: var(--white);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: var(--shadow-lg);
    transform: translateY(100px) scale(0);
    transition: all var(--transition-normal);
    z-index: 1000;
}

.back-to-top.visible {
    transform: translateY(0) scale(1);
}

.back-to-top:hover {
    background: var(--primary-blue-dark);
    transform: translateY(-2px) scale(1.1);
}

/* Notifications */
.notification {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--bg-tertiary);
    border-radius: var(--radius-lg);
    padding: 1rem 1.25rem;
    box-shadow: var(--shadow-xl);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform var(--transition-normal);
    max-width: 400px;
    color: var(--text-primary);
}

.notification.show {
    transform: translateX(0);
}

.notification.success {
    border-left: 4px solid var(--accent-green);
}

.notification.error {
    border-left: 4px solid #dc2626;
}

.notification.warning {
    border-left: 4px solid #d97706;
}

.notification.info {
    border-left: 4px solid var(--primary-blue);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.notification-close {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-secondary);
    margin-left: auto;
    padding: 0.25rem;
    border-radius: var(--radius-sm);
    transition: background-color var(--transition-fast);
}

.notification-close:hover {
    background: var(--bg-tertiary);
}

/* Menu Open State */
body.menu-open {
    overflow: hidden;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .notification {
        left: 1rem;
        right: 1rem;
        max-width: none;
        transform: translateY(-100px);
    }
    
    .notification.show {
        transform: translateY(0);
    }
    
    .back-to-top {
        bottom: 1rem;
        right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 0.875rem;
    }
}

/* Performance GPU Acceleration */
.gpu-accelerate {
    transform: translateZ(0);
    will-change: transform;
}
`;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Inject performance styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = performantStyles;
    document.head.appendChild(styleSheet);
    
    // Initialize app
    window.gwicApp = new GWICApp();
    
    // Mark as loaded after everything is ready
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GWICApp;
}