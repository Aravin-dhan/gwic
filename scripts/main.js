// Modern Interactive JavaScript - GWIC 2024
// Optimized for performance and smooth animations

class GWICApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupInteractiveElements();
        this.setupPerformanceOptimizations();
        this.setupMobileOptimizations();
    }

    // Navigation System
    setupNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => this.toggleMobileMenu());
            
            // Close menu when clicking links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.closeMobileMenu());
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    toggleMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.classList.toggle('menu-open');
    }

    closeMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    // Scroll Effects
    setupScrollEffects() {
        let ticking = false;
        
        const updateNavbar = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                const scrolled = window.scrollY > 50;
                navbar.classList.toggle('scrolled', scrolled);
            }
        };

        const scrollHandler = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateNavbar();
                    this.updateBackToTop();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollHandler, { passive: true });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Advanced Animation System
    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: [0, 0.1, 0.5],
            rootMargin: '-20px'
        };

        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.dataset.animation || 'fadeInUp';
                    
                    element.classList.add('animate', animationType);
                    
                    // Stagger animation for child elements
                    const children = element.querySelectorAll('.card, .glass-card');
                    children.forEach((child, index) => {
                        child.style.animationDelay = `${index * 0.1}s`;
                        child.classList.add('animate');
                    });
                }
            });
        }, observerOptions);

        // Observe sections and cards
        document.querySelectorAll('section, .glass-card, .card').forEach(el => {
            el.classList.add('scroll-animate');
            animationObserver.observe(el);
        });

        // Parallax effect for hero section
        this.setupParallaxEffect();
        
        // Floating animations
        this.setupFloatingAnimations();
    }

    setupParallaxEffect() {
        const parallaxElements = document.querySelectorAll('.hero-graphic');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        }, { passive: true });
    }

    setupFloatingAnimations() {
        // Add floating animation to various elements
        document.querySelectorAll('.logo-circle, .card-icon').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });
    }

    // Interactive Elements
    setupInteractiveElements() {
        this.setupCardInteractions();
        this.setupButtonEffects();
        this.setupFormHandling();
        this.setupTooltips();
    }

    setupCardInteractions() {
        document.querySelectorAll('.glass-card, .card').forEach(card => {
            let timeout;
            
            card.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                card.style.transform = 'translateY(-15px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4)';
            });
            
            card.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                }, 100);
            });

            // Touch events for mobile
            card.addEventListener('touchstart', () => {
                card.classList.add('touched');
            });
            
            card.addEventListener('touchend', () => {
                setTimeout(() => card.classList.remove('touched'), 150);
            });
        });
    }

    setupButtonEffects() {
        document.querySelectorAll('.btn').forEach(button => {
            // Ripple effect
            button.addEventListener('click', (e) => {
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
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            // Enhanced validation
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(form);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value) || value.length < 10) {
                isValid = false;
                message = 'Please enter a valid phone number';
            }
        }
        
        this.updateFieldState(field, isValid, message);
        return isValid;
    }

    updateFieldState(field, isValid, message) {
        field.classList.toggle('error', !isValid);
        
        let errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
        
        if (!isValid && message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
    }

    handleFormSubmission(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            this.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            form.reset();
            
            // Add success animation to form
            form.classList.add('form-success');
            setTimeout(() => form.classList.remove('form-success'), 2000);
        } else {
            this.showNotification('Please correct the errors in the form.', 'error');
        }
    }

    setupTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.showTooltip(e.target, e.target.dataset.tooltip);
            });
            
            element.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.cssText = `
            position: fixed;
            top: ${rect.top - tooltip.offsetHeight - 10}px;
            left: ${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px;
            background: var(--bg-primary);
            color: var(--text-white);
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            z-index: 10000;
            pointer-events: none;
            animation: tooltipFadeIn 0.2s ease;
        `;
    }

    hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }

    // Performance Optimizations
    setupPerformanceOptimizations() {
        // Lazy loading for images
        this.setupLazyLoading();
        
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Optimize scroll performance
        this.optimizeScrollPerformance();
        
        // Setup service worker for caching (if needed)
        this.setupServiceWorker();
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    preloadCriticalResources() {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = 'styles/main.css';
        criticalCSS.as = 'style';
        document.head.appendChild(criticalCSS);
        
        // Preload fonts
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap';
        fontPreload.as = 'style';
        document.head.appendChild(fontPreload);
    }

    optimizeScrollPerformance() {
        // Use passive listeners for better scroll performance
        let rafId;
        const scrollCallbacks = [];
        
        window.addEventListener('scroll', () => {
            if (rafId) return;
            
            rafId = requestAnimationFrame(() => {
                scrollCallbacks.forEach(callback => callback());
                rafId = null;
            });
        }, { passive: true });
        
        // Add scroll callback registration method
        this.addScrollCallback = (callback) => {
            scrollCallbacks.push(callback);
        };
    }

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Mobile Optimizations
    setupMobileOptimizations() {
        // Touch gestures
        this.setupTouchGestures();
        
        // Viewport optimization
        this.optimizeViewport();
        
        // Mobile-specific interactions
        this.setupMobileInteractions();
    }

    setupTouchGestures() {
        let startY = 0;
        let startX = 0;
        
        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            const endY = e.changedTouches[0].clientY;
            const endX = e.changedTouches[0].clientX;
            const diffY = startY - endY;
            const diffX = startX - endX;
            
            // Implement swipe gestures if needed
            if (Math.abs(diffY) > Math.abs(diffX)) {
                if (diffY > 50) {
                    // Swipe up
                    this.handleSwipeUp();
                } else if (diffY < -50) {
                    // Swipe down
                    this.handleSwipeDown();
                }
            }
        }, { passive: true });
    }

    handleSwipeUp() {
        // Implement swipe up functionality
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            backToTop.click();
        }
    }

    handleSwipeDown() {
        // Implement swipe down functionality
        // Could be used for refreshing content or showing notifications
    }

    optimizeViewport() {
        // Add viewport meta tag if not present
        if (!document.querySelector('meta[name="viewport"]')) {
            const viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.head.appendChild(viewport);
        }
    }

    setupMobileInteractions() {
        // Add hover alternatives for touch devices
        document.querySelectorAll('.card, .glass-card, .btn').forEach(element => {
            element.addEventListener('touchstart', () => {
                element.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', () => {
                setTimeout(() => {
                    element.classList.remove('touch-active');
                }, 150);
            });
        });
    }

    // Utility Methods
    showNotification(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close" aria-label="Close notification">
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
        notification.classList.add('hide');
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

    // Back to Top
    updateBackToTop() {
        let backToTop = document.querySelector('.back-to-top');
        
        if (!backToTop) {
            backToTop = document.createElement('button');
            backToTop.className = 'back-to-top';
            backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
            backToTop.setAttribute('aria-label', 'Back to top');
            
            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            document.body.appendChild(backToTop);
        }
        
        const showButton = window.scrollY > 500;
        backToTop.classList.toggle('visible', showButton);
    }
}

// Enhanced CSS Animations and Styles
const enhancedStyles = `
/* Performance optimizations */
* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Animation classes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes tooltipFadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Scroll animations */
.scroll-animate {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.animate {
    opacity: 1;
    transform: translateY(0);
}

/* Touch interactions */
.touch-active {
    transform: scale(0.95) !important;
    transition: transform 0.1s ease !important;
}

.touched {
    background: rgba(255, 255, 255, 0.1) !important;
}

/* Form states */
.form-success {
    animation: formSuccess 0.5s ease;
}

@keyframes formSuccess {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
}

/* Enhanced notifications */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-xl);
    padding: var(--space-4) var(--space-6);
    box-shadow: var(--shadow-2xl);
    border: 1px solid rgba(255, 255, 255, 0.2);
    z-index: 10000;
    transform: translateX(400px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 400px;
    color: var(--text-primary);
}

.notification.show {
    transform: translateX(0);
}

.notification.hide {
    transform: translateX(400px);
    opacity: 0;
}

.notification.success {
    border-left: 4px solid var(--success);
}

.notification.error {
    border-left: 4px solid var(--error);
}

.notification.warning {
    border-left: 4px solid var(--warning);
}

.notification.info {
    border-left: 4px solid var(--primary);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.notification-close {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-secondary);
    margin-left: auto;
    padding: var(--space-1);
    border-radius: var(--radius-sm);
    transition: var(--transition);
}

.notification-close:hover {
    background: rgba(0, 0, 0, 0.1);
}

/* Enhanced back to top button */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    color: var(--text-white);
    border: none;
    border-radius: var(--radius-full);
    cursor: pointer;
    font-size: 20px;
    box-shadow: var(--shadow-colored);
    transform: translateY(100px) scale(0);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    backdrop-filter: blur(10px);
}

.back-to-top.visible {
    transform: translateY(0) scale(1);
}

.back-to-top:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 25px 50px -5px rgba(99, 102, 241, 0.4);
}

/* Form enhancements */
.error-message {
    color: var(--error);
    font-size: 0.875rem;
    margin-top: var(--space-1);
    animation: fadeInUp 0.3s ease;
}

input.error,
textarea.error,
select.error {
    border-color: var(--error) !important;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
}

/* Loading states */
.loading {
    position: relative;
    overflow: hidden;
}

.loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { left: -100%; }
    100% { left: 100%; }
}

/* Menu open state */
body.menu-open {
    overflow: hidden;
}

/* Mobile optimizations */
@media (max-width: 768px) {
    .notification {
        left: 20px;
        right: 20px;
        max-width: none;
        transform: translateY(-100px);
    }
    
    .notification.show {
        transform: translateY(0);
    }
    
    .notification.hide {
        transform: translateY(-100px);
    }
    
    .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        font-size: 16px;
    }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* High contrast mode */
@media (prefers-contrast: high) {
    .notification {
        background: white;
        border: 2px solid black;
    }
    
    .back-to-top {
        background: black;
        border: 2px solid white;
    }
}
`;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Inject enhanced styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = enhancedStyles;
    document.head.appendChild(styleSheet);
    
    // Initialize the app
    window.gwicApp = new GWICApp();
    
    // Add loading animation removal
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Remove loading states after 1 second
        setTimeout(() => {
            document.querySelectorAll('.loading').forEach(el => {
                el.classList.remove('loading');
            });
        }, 1000);
    });
});

// Export for testing/debugging
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GWICApp;
}