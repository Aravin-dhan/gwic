// Main JavaScript file for GWIC website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));

    // Add scroll-animate class to cards and sections for animation
    const cardsToAnimate = document.querySelectorAll('.feature-card, .quick-card, .update-card, .value-card, .advantage-card, .activity-card, .timeline-item');
    cardsToAnimate.forEach((card, index) => {
        card.classList.add('scroll-animate');
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Show success message (in a real implementation, this would send to a server)
                showNotification('Thank you for subscribing! We\'ll keep you updated with our wellness content.', 'success');
                this.reset();
            }
        });
    }

    // Contact form handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success message (in a real implementation, this would send to a server)
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                this.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }

    // Feedback form handling
    const feedbackForm = document.querySelector('#feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const feedback = formData.get('feedback');
            
            if (feedback && feedback.trim().length > 10) {
                showNotification('Thank you for your feedback! Your input helps us improve.', 'success');
                this.reset();
            } else {
                showNotification('Please provide more detailed feedback (at least 10 characters).', 'error');
            }
        });
    }

    // Utility function to show notifications
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
        
        // Remove on click
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
        
        // Show animation
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });
    }

    // Add some interactive effects to cards
    const interactiveCards = document.querySelectorAll('.quick-card, .feature-card, .community-card, .opportunity-card');
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Floating animation for hero cards
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        const delay = index * -1000; // Different delay for each card
        card.style.animationDelay = `${delay}ms`;
    });

    // Progress indicators for forms
    const progressForms = document.querySelectorAll('form');
    progressForms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        const progressBar = form.querySelector('.form-progress');
        
        if (progressBar) {
            inputs.forEach(input => {
                input.addEventListener('input', updateProgress);
                input.addEventListener('change', updateProgress);
            });
            
            function updateProgress() {
                const filledInputs = Array.from(inputs).filter(input => input.value.trim() !== '').length;
                const progress = (filledInputs / inputs.length) * 100;
                progressBar.style.width = `${progress}%`;
            }
        }
    });

    // Tab functionality (if needed)
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const content = document.querySelector(`[data-tab-content="${tabName}"]`);
            if (content) {
                content.classList.add('active');
            }
        });
    });

    // Search functionality (if implemented)
    const searchInput = document.querySelector('#search-input');
    const searchResults = document.querySelector('#search-results');
    
    if (searchInput && searchResults) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 300);
        });
        
        function performSearch(query) {
            // This would connect to a search API in a real implementation
            const mockResults = [
                { title: 'Mental Health Resources', url: 'resources.html', description: 'Comprehensive support and counseling services' },
                { title: 'Weekly Unwind Sessions', url: 'events.html', description: 'Regular meditation and relaxation activities' },
                { title: 'Contact GWIC', url: 'contact.html', description: 'Get in touch with our wellness team' }
            ];
            
            const filteredResults = mockResults.filter(result => 
                result.title.toLowerCase().includes(query.toLowerCase()) ||
                result.description.toLowerCase().includes(query.toLowerCase())
            );
            
            displaySearchResults(filteredResults);
        }
        
        function displaySearchResults(results) {
            if (results.length === 0) {
                searchResults.innerHTML = '<div class="no-results">No results found</div>';
            } else {
                searchResults.innerHTML = results.map(result => `
                    <div class="search-result">
                        <a href="${result.url}">
                            <h4>${result.title}</h4>
                            <p>${result.description}</p>
                        </a>
                    </div>
                `).join('');
            }
            
            searchResults.style.display = 'block';
        }
        
        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }

    // Loading animations
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => {
        setTimeout(() => {
            el.classList.remove('loading');
            el.classList.add('loaded');
        }, Math.random() * 1000 + 500);
    });

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Add CSS for notifications and back-to-top button
const additionalStyles = `
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    padding: 16px 20px;
    z-index: 10000;
    transform: translateX(400px);
    transition: all 0.3s ease;
    max-width: 400px;
}

.notification.show {
    transform: translateX(0);
}

.notification.success {
    border-left: 4px solid #10b981;
}

.notification.error {
    border-left: 4px solid #ef4444;
}

.notification.info {
    border-left: 4px solid #3b82f6;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.notification-close {
    background: none;
    border: none;
    cursor: pointer;
    color: #6b7280;
    margin-left: auto;
}

.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    transform: translateY(100px);
    transition: all 0.3s ease;
    z-index: 1000;
}

.back-to-top.visible {
    transform: translateY(0);
}

.back-to-top:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
}

.form-progress {
    height: 3px;
    background: #2563eb;
    border-radius: 2px;
    transition: width 0.3s ease;
    margin-bottom: 20px;
}

.search-result {
    padding: 15px;
    border-bottom: 1px solid #e5e7eb;
}

.search-result:last-child {
    border-bottom: none;
}

.search-result a {
    text-decoration: none;
    color: inherit;
}

.search-result h4 {
    color: #2563eb;
    margin-bottom: 5px;
}

.search-result p {
    color: #6b7280;
    font-size: 14px;
}

.no-results {
    padding: 20px;
    text-align: center;
    color: #6b7280;
}

#search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    z-index: 1000;
    max-height: 300px;
    overflow-y: auto;
}

@media (max-width: 768px) {
    .notification {
        left: 20px;
        right: 20px;
        max-width: none;
    }
    
    .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 16px;
    }
}
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);