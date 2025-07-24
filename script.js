// Website loaded message
console.log('Clixio Dental Marketing Website loaded successfully!');

// Typing Animation for Hero Headline
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.querySelector('.typing-cursor');
    const textOptions = [
        "Performance Marketing pro",
        "Dental PPC Specialists", 
        "Dental SEO Experts"
    ];
    
    if (!typingElement || !cursorElement) return;
    
    let currentText = '';
    let currentIndex = 0;
    let currentTextIndex = 0;
    let isDeleting = false;
    let isVisible = true;
    let animationTimeout = null;
    const typingSpeed = 100; // milliseconds per character
    const deletingSpeed = 50; // faster deleting
    const pauseTime = 2000; // pause between words
    
    // Initially hide the text and show cursor
    typingElement.innerHTML = '';
    cursorElement.style.display = 'inline';
    
    function typeText() {
        if (!isVisible) return; // Stop animation if not visible
        
        const currentFullText = textOptions[currentTextIndex];
        
        if (!isDeleting) {
            // Typing mode
            if (currentIndex < currentFullText.length) {
                currentText = currentFullText.substring(0, currentIndex + 1);
                typingElement.innerHTML = currentText;
                currentIndex++;
                animationTimeout = setTimeout(typeText, typingSpeed);
            } else {
                // Finished typing, pause then start deleting
                animationTimeout = setTimeout(() => {
                    isDeleting = true;
                    typeText();
                }, pauseTime);
            }
        } else {
            // Deleting mode
            if (currentIndex > 0) {
                currentText = currentFullText.substring(0, currentIndex - 1);
                typingElement.innerHTML = currentText;
                currentIndex--;
                animationTimeout = setTimeout(typeText, deletingSpeed);
            } else {
                // Finished deleting, move to next text
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % textOptions.length;
                animationTimeout = setTimeout(typeText, typingSpeed);
            }
        }
    }
    
    // Intersection Observer to pause/resume animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isVisible = true;
                if (!animationTimeout) {
                    typeText(); // Resume animation
                }
            } else {
                isVisible = false;
                if (animationTimeout) {
                    clearTimeout(animationTimeout);
                    animationTimeout = null;
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe the typing element
    observer.observe(typingElement);
    
    // Start typing animation after a brief delay
    setTimeout(() => {
        typeText();
    }, 800);
}

// Initialize typing animation when DOM is loaded
document.addEventListener('DOMContentLoaded', initTypingAnimation);

// Typing Animation for Marketing Pro Section
function initMarketingProAnimation() {
    const animatedElement = document.getElementById('animated-title');
    const cursorElement = document.querySelector('.typing-cursor-2');
    const titles = [
        "Dental Marketing pro",
        "Dental PPC Experts", 
        "Dental SEO Experts"
    ];
    
    if (!animatedElement || !cursorElement) return;
    
    let currentText = '';
    let currentIndex = 0;
    let currentTitleIndex = 0;
    let isDeleting = false;
    let isVisible = true;
    let animationTimeout = null;
    const typingSpeed = 120; // milliseconds per character
    const deletingSpeed = 60; // faster deleting
    const pauseTime = 2500; // pause between titles
    
    // Initially show first title
    animatedElement.innerHTML = titles[0];
    cursorElement.style.display = 'inline';
    
    function typeTitle() {
        if (!isVisible) return; // Stop animation if not visible
        
        const currentFullTitle = titles[currentTitleIndex];
        
        if (!isDeleting) {
            // Typing mode
            if (currentIndex < currentFullTitle.length) {
                currentText = currentFullTitle.substring(0, currentIndex + 1);
                animatedElement.innerHTML = currentText;
                currentIndex++;
                animationTimeout = setTimeout(typeTitle, typingSpeed);
            } else {
                // Finished typing, pause then start deleting
                animationTimeout = setTimeout(() => {
                    isDeleting = true;
                    typeTitle();
                }, pauseTime);
            }
        } else {
            // Deleting mode
            if (currentIndex > 0) {
                currentText = currentFullTitle.substring(0, currentIndex - 1);
                animatedElement.innerHTML = currentText;
                currentIndex--;
                animationTimeout = setTimeout(typeTitle, deletingSpeed);
            } else {
                // Finished deleting, move to next title
                isDeleting = false;
                currentTitleIndex = (currentTitleIndex + 1) % titles.length;
                animationTimeout = setTimeout(typeTitle, typingSpeed);
            }
        }
    }
    
    // Intersection Observer to pause/resume animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isVisible = true;
                if (!animationTimeout) {
                    typeTitle(); // Resume animation
                }
            } else {
                isVisible = false;
                if (animationTimeout) {
                    clearTimeout(animationTimeout);
                    animationTimeout = null;
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe the animated element
    observer.observe(animatedElement);
    
    // Start animation after a delay to let the page load
    setTimeout(() => {
        // Reset and start cycling
        currentIndex = 0;
        currentTitleIndex = 0;
        typeTitle();
    }, 1500);
}

// Initialize marketing pro animation when DOM is loaded
document.addEventListener('DOMContentLoaded', initMarketingProAnimation);

// Hero Image Click Effect
function initHeroImageEffect() {
    const imageContainer = document.getElementById('hero-image-container');
    
    if (!imageContainer) return;
    
    imageContainer.addEventListener('click', function(e) {
        // Add enhanced click effect
        this.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Create additional ripple effect
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 107, 53, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add CSS for ripple animation
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize hero image effect when DOM is loaded
document.addEventListener('DOMContentLoaded', initHeroImageEffect);

// Hero Image Cycling with Steps
function initHeroImageCycling() {
    const heroImage = document.getElementById('heroImage');
    const stepOverlay = document.getElementById('stepOverlay');
    
    if (!heroImage || !stepOverlay) return;
    
    const heroImages = [
        {
            src: './images/hero/1.photo click.png',
            step: 'Step 1: Photo & Click Strategy',
            description: 'Professional dental photography that converts visitors into patients'
        },
        {
            src: './images/hero/3.plan.png',
            step: 'Step 2: Strategic Planning',
            description: 'Comprehensive digital marketing plan tailored for your practice'
        },
        {
            src: './images/hero/4.plan.png',
            step: 'Step 3: Execution',
            description: 'Implementing and launching your marketing campaigns effectively'
        },
        {
            src: './images/hero/6.patient.png',
            step: 'Step 4: Patient Acquisition',
            description: 'Real patients, real appointments, real growth for your practice'
        }
    ];
    
    let currentImageIndex = 0;
    
    function switchHeroImage() {
        // Blink effect: fade out current image and step
        heroImage.style.opacity = '0';
        stepOverlay.style.opacity = '0';
        
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            const currentItem = heroImages[currentImageIndex];
            
            // Update image and step while invisible
            heroImage.src = currentItem.src;
            stepOverlay.textContent = currentItem.step;
            
            // Blink effect: fade back in
            setTimeout(() => {
                heroImage.style.opacity = '1';
                stepOverlay.style.opacity = '1';
            }, 100);
            
        }, 200);
    }
    
    // Add blink transition CSS
    heroImage.style.transition = 'opacity 0.3s ease-in-out';
    stepOverlay.style.transition = 'opacity 0.3s ease-in-out';
    
    // Initialize first image with blink effect
    function initializeFirstImage() {
        // Start with image invisible
        heroImage.style.opacity = '0';
        stepOverlay.style.opacity = '0';
        
        // Blink in after a brief delay
        setTimeout(() => {
            heroImage.style.opacity = '1';
            stepOverlay.style.opacity = '1';
        }, 500);
    }
    
    // Initialize first image animation
    initializeFirstImage();
    
    // Switch image every 4 seconds for slower, more sophisticated cycling
    setInterval(switchHeroImage, 4000);
}

// Initialize hero image cycling when DOM is loaded
document.addEventListener('DOMContentLoaded', initHeroImageCycling);

// Create Ripple Effect Function
function createRipple(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 107, 53, 0.4)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple-effect 0.8s ease-out';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '10';
    
    // Make sure parent container has relative positioning
    if (element.parentElement) {
        element.parentElement.style.position = 'relative';
        element.parentElement.style.overflow = 'hidden';
        element.parentElement.appendChild(ripple);
    }
    
    // Add scale effect to the image
    element.style.transform = 'scale(0.98)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 150);
    
    // Remove ripple after animation
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 800);
}

// Add CSS for ripple effect
if (!document.getElementById('ripple-effect-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-effect-style';
    style.textContent = `
        @keyframes ripple-effect {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Hero Video Background Cycling
function initVideoBackground() {
    const heroVideo = document.getElementById('heroVideo');
    const videoSources = [
        './videos/2.mp4',
        './videos/1.mp4',
        './videos/3.mp4'
    ];
    let currentVideoIndex = 0;

    function switchVideo() {
        if (heroVideo) {
            // Create smooth transition effect
            heroVideo.style.opacity = '0.7';
            
            setTimeout(() => {
                currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
                heroVideo.src = videoSources[currentVideoIndex];
                heroVideo.load();
                
                // Restore opacity when video is ready
                heroVideo.addEventListener('canplaythrough', function() {
                    heroVideo.style.opacity = '1';
                }, { once: true });
                
                // Fallback to restore opacity even if canplaythrough doesn't fire
                setTimeout(() => {
                    heroVideo.style.opacity = '1';
                }, 1000);
            }, 300);
        }
    }

    if (heroVideo) {
        // Add smooth transition CSS
        heroVideo.style.transition = 'opacity 0.3s ease-in-out';
        
        // Switch video every 20 seconds for a sophisticated feel
        setInterval(switchVideo, 20000);
        
        // Ensure video plays automatically on load
        heroVideo.addEventListener('loadeddata', function() {
            this.play().catch(e => {
                console.log('Video autoplay was prevented:', e);
            });
        });
        
        // Handle video errors gracefully
        heroVideo.addEventListener('error', function() {
            console.log('Video failed to load, trying next video...');
            switchVideo();
        });
    }
}

// Initialize critical functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu(); // Initialize mobile menu first
    initVideoBackground();
});

// Mobile Menu Initialization Function
function initMobileMenu() {
    // DOM Elements
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');
    const header = document.querySelector('header');

    // Mobile Menu Toggle with Enhanced Animation
    if (mobileMenuBtn && mobileMenu) {
        let isMenuOpen = false;
        
        // Mark this button as handled to prevent other event listeners
        mobileMenuBtn.setAttribute('data-menu-button', 'true');
        
        // Remove any existing event listeners
        const newMobileMenuBtn = mobileMenuBtn.cloneNode(true);
        mobileMenuBtn.parentNode.replaceChild(newMobileMenuBtn, mobileMenuBtn);
        
        newMobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            toggleMobileMenu();
            return false; // Extra prevention
        }, true); // Use capture phase

        function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Open menu
            mobileMenu.classList.remove('hidden');
            mobileMenu.style.maxHeight = '0px';
            mobileMenu.style.opacity = '0';
            
            // Animate menu opening
            requestAnimationFrame(() => {
                mobileMenu.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                mobileMenu.style.opacity = '1';
            });
            
            // Animate hamburger to X
            animateHamburgerToX();
            
            // Prevent body scroll on mobile
            document.body.style.overflow = 'hidden';
        } else {
            // Close menu
            mobileMenu.style.transition = 'max-height 0.3s ease-in, opacity 0.3s ease-in';
            mobileMenu.style.maxHeight = '0px';
            mobileMenu.style.opacity = '0';
            
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            
            // Animate X back to hamburger
            animateXToHamburger();
            
            // Restore body scroll
            document.body.style.overflow = '';
        }
    }

    function animateHamburgerToX() {
        const line1 = document.getElementById('menu-line-1');
        const line2 = document.getElementById('menu-line-2');
        const line3 = document.getElementById('menu-line-3');
        
        if (line1 && line2 && line3) {
            line1.style.transform = 'rotate(45deg) translateY(6px)';
            line2.style.opacity = '0';
            line3.style.transform = 'rotate(-45deg) translateY(-6px)';
        }
    }

    function animateXToHamburger() {
        const line1 = document.getElementById('menu-line-1');
        const line2 = document.getElementById('menu-line-2');
        const line3 = document.getElementById('menu-line-3');
        
        if (line1 && line2 && line3) {
            line1.style.transform = 'rotate(0deg) translateY(0px)';
            line2.style.opacity = '1';
            line3.style.transform = 'rotate(0deg) translateY(0px)';
        }
    }

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMobileMenu();
            }
        });
    });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !newMobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                toggleMobileMenu();
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMobileMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && isMenuOpen) {
                // Close mobile menu on desktop
                toggleMobileMenu();
            }
        });
    }
}

// Header Scroll Effect with Mobile Optimization
function handleScroll() {
    if (header) {
        const scrollY = window.scrollY;
        const isMobile = window.innerWidth < 768;
        
        if (scrollY > (isMobile ? 50 : 100)) {
            header.classList.remove('bg-white/95');
            header.classList.add('bg-white/98', 'shadow-lg');
        } else {
            header.classList.remove('bg-white/98', 'shadow-lg');
            header.classList.add('bg-white/95');
        }
    }
}

// Scroll handler removed

// Smooth scrolling for navigation links removed

// Touch-friendly interactions
function addTouchSupport() {
    // Add touch feedback to buttons
    document.querySelectorAll('button, .btn, .clickable').forEach(element => {
        // Skip mobile menu button
        if (element.getAttribute('data-menu-button') === 'true' || 
            element.id === 'mobile-menu-btn') {
            return;
        }
        
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Prevent iOS zoom on form inputs
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('focus', function() {
            if (window.innerWidth < 768) {
                this.style.fontSize = '16px';
            }
        });
    });
}

// Initialize touch support
addTouchSupport();

// Animated Counter for Statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            if (target === 450) {
                element.textContent = '450%';
            } else if (target === 500) {
                element.textContent = '500+';
            } else if (target === 350) {
                element.textContent = '350%';
            } else if (target === 98) {
                element.textContent = '98%';
            } else {
                element.textContent = Math.floor(target);
            }
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Intersection Observer for Animations with Mobile Optimization
const observerOptions = {
    threshold: window.innerWidth < 768 ? 0.05 : 0.1,
    rootMargin: window.innerWidth < 768 ? '0px 0px -25px 0px' : '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation classes
            entry.target.classList.add('animate-fade-in-up');
            
            // Animate stat counters when they come into view
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                if (target && !entry.target.classList.contains('animated')) {
                    animateCounter(entry.target, target);
                    entry.target.classList.add('animated');
                }
            }

            // Animate testimonial results
            if (entry.target.querySelector('.testimonial-results')) {
                const resultNumbers = entry.target.querySelectorAll('.text-lg.font-bold');
                resultNumbers.forEach(numberEl => {
                    if (!numberEl.classList.contains('animated')) {
                        const text = numberEl.textContent;
                        const target = parseInt(text.replace(/[^\d]/g, '')) || 0;
                        if (target > 0) {
                            animateCounter(numberEl, target, 1500);
                            numberEl.classList.add('animated');
                        }
                    }
                });
            }
        }
    });
}, observerOptions);

// Enhanced Button Interactions with Mobile Support
document.querySelectorAll('button').forEach(button => {
    // Skip mobile menu button
    if (button.getAttribute('data-menu-button') === 'true' || 
        button.id === 'mobile-menu-btn') {
        return;
    }
    
    button.addEventListener('click', function(e) {
        // Skip ripple effect on mobile for better performance
        if (window.innerWidth >= 768) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }
    });
});

// Mobile optimizations removed

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
    }
    
    /* Mobile-specific styles */
    @media (max-width: 768px) {
        .mobile-device .hover-lift:hover,
        .mobile-device .service-card:hover,
        .mobile-device .testimonial-card:hover {
            transform: none !important;
        }
        
        .mobile-device .animate-bounce,
        .mobile-device .animate-pulse {
            animation: none !important;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Service Card Interactions
document.querySelectorAll('.group').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});



// Service Button Click Tracking
document.querySelectorAll('button').forEach(btn => {
    // Skip mobile menu button
    if (btn.getAttribute('data-menu-button') === 'true' || 
        btn.id === 'mobile-menu-btn') {
        return;
    }
    
    if (btn.textContent.includes('Learn More')) {
        btn.addEventListener('click', (e) => {
            const serviceCard = e.target.closest('.bg-white');
            const serviceName = serviceCard?.querySelector('h3')?.textContent || 'Service';
            console.log(`Service clicked: ${serviceName}`);
        });
    }
});



// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu FIRST before any other button handlers
    initMobileMenu();
    
    // Initialize contact modal
    initContactModal();
    
    // Observe stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => observer.observe(stat));
    
    // Observe service cards
    const serviceCards = document.querySelectorAll('#services .bg-white');
    serviceCards.forEach(card => observer.observe(card));
    
    // Observe testimonial cards
    const testimonialCards = document.querySelectorAll('#testimonials .bg-white');
    testimonialCards.forEach(card => observer.observe(card));
    
    // Add scroll animations to other elements
    const elementsToAnimate = [
        'h1', 'h2', 'h3', '.text-lg', '.grid'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            if (!el.classList.contains('observed')) {
                observer.observe(el);
                el.classList.add('observed');
            }
        });
    });

    // Open contact modal for footer links with class 'open-contact-modal'
    document.querySelectorAll('.open-contact-modal').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var modal = document.getElementById('contactModal');
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Make all CTA buttons open the contact modal
    document.querySelectorAll('button, a').forEach(function(btn) {
        var text = (btn.textContent || '').toLowerCase();
        if (
            btn.classList.contains('btn-primary') ||
            btn.classList.contains('btn-secondary') ||
            btn.classList.contains('bg-primary') ||
            btn.classList.contains('bg-white') ||
            text.includes('free') ||
            text.includes('audit') ||
            text.includes('contact') ||
            text.includes('get started') ||
            text.includes('book') ||
            text.includes('call') ||
            text.includes('watch') ||
            text.includes('download') ||
            text.includes('Careers') ||
            text.includes('Contact') ||
            text.includes('subscribe')
        ) {
            btn.addEventListener('click', function(e) {
                var href = btn.getAttribute('href') || '';
                // Only prevent default if it's not an anchor or external link
                if (
                    btn.tagName === 'A' && href &&
                    (href.startsWith('#') ||
                     href.includes('.html') ||
                     href.startsWith('mailto:') ||
                     href.startsWith('tel:') ||
                     href.startsWith('https://wa.me/') ||
                     href.startsWith('https://') ||
                     href.startsWith('http://'))
                ) {
                    // If it's a nav link to #contact, index.html#contact, or text includes 'get started', open modal and prevent default
                    if (href === '#contact' || href === 'index.html#contact' || text.includes('get started')) {
                        e.preventDefault();
                        var modal = document.getElementById('contactModal');
                        if (modal) {
                            modal.classList.remove('hidden');
                            document.body.style.overflow = 'hidden';
                        }
                    }
                    return;
                }
                e.preventDefault();
                var modal = document.getElementById('contactModal');
                if (modal) {
                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
    });
});

// Performance Monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Website loaded in ${Math.round(loadTime)}ms`);
    
    if (loadTime > 3000) {
        console.warn('Website loading time is above 3 seconds');
    }
});

// Add loading state for buttons
document.querySelectorAll('button').forEach(button => {
    // Skip mobile menu button and other excluded buttons
    if (button.id === 'mobile-menu-btn' || 
        button.classList.contains('mobile-menu') ||
        button.id === 'closeModal' || 
        button.classList.contains('close')) {
        return;
    }
    
    button.addEventListener('click', function() {
        if (this.textContent.includes('Get Free') || this.textContent.includes('Schedule')) {
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Parallax effect removed

// Contact Modal Functionality
function initContactModal() {
    const modal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('closeModal');
    const freeTrialBtn = document.getElementById('freeTrialBtn');

    // Function to open modal
    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close button event
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Only the 30-Day Free Trial button opens the modal
    if (freeTrialBtn) {
        freeTrialBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }
}

// Bottom popup close logic
const closePopupBtn = document.getElementById('close-popup-btn');
const bottomPopup = document.getElementById('bottom-popup');
if (closePopupBtn && bottomPopup) {
  closePopupBtn.addEventListener('click', () => {
    bottomPopup.style.display = 'none';
  });
}

// Show bottom popup after 3 seconds
setTimeout(() => {
  const bottomPopup = document.getElementById('bottom-popup');
  if (bottomPopup) {
    bottomPopup.style.display = 'block';
  }
}, 3000);

console.log('Enhanced Clixio features loaded with Tailwind CSS!');
