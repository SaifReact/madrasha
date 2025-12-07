// ========================================
// Custom JavaScript for Islamic Madrasa Website
// ========================================

(function() {
    'use strict';

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // ========================================
    // Date/Time and Prayer Time Display
    // ========================================
    const prayerTimes = [
        { name: 'তাহাজ্জুদ', time: '01:00' },
        { name: 'ফজর', time: '05:15' },
        { name: 'যোহর', time: '12:15' },
        { name: 'আসর', time: '16:30' },
        { name: 'মাগরিব', time: '17:45' },
        { name: 'এশা', time: '19:00' }
    ];

    function updateDateTime() {
        const now = new Date();
        const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
        const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
        
        const dayName = days[now.getDay()];
        const date = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const dateTimeDisplay = document.getElementById('dateTimeDisplay');
        if (dateTimeDisplay) {
            dateTimeDisplay.innerHTML = `<i class="bi bi-calendar3"></i> ${dayName}, ${date} ${month} ${year} | <i class="bi bi-clock"></i> ${hours}:${minutes}:${seconds}`;
        }
    }

    function getCurrentPrayer() {
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        let currentPrayer = prayerTimes[prayerTimes.length - 1];
        let nextPrayer = prayerTimes[0];
        
        for (let i = 0; i < prayerTimes.length; i++) {
            if (currentTime < prayerTimes[i].time) {
                nextPrayer = prayerTimes[i];
                currentPrayer = i > 0 ? prayerTimes[i - 1] : prayerTimes[prayerTimes.length - 1];
                break;
            }
        }
        
        const prayerTimeDisplay = document.getElementById('prayerTimeDisplay');
        if (prayerTimeDisplay) {
            prayerTimeDisplay.innerHTML = `<i class="bi bi-moon-stars"></i> পরবর্তী: ${nextPrayer.name} - ${nextPrayer.time}`;
        }
    }

    // Update every second
    updateDateTime();
    getCurrentPrayer();
    setInterval(updateDateTime, 1000);
    setInterval(getCurrentPrayer, 60000);

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('mainNav');
    const scrollTop = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            scrollTop.classList.add('show');
        } else {
            navbar.classList.remove('scrolled');
            scrollTop.classList.remove('show');
        }
    });

    // ========================================
    // Smooth Scrolling for Navigation Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // ========================================
    // Scroll to Top Button
    // ========================================
    if (scrollTop) {
        scrollTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // Active Menu Item on Scroll
    // ========================================
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ========================================
    // Gallery Lightbox Effect
    // ========================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const src = img.getAttribute('src');
            
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'gallery-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${src}" alt="Gallery Image">
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Add fade-in effect
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
            
            // Close modal
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                modal.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(modal);
                    document.body.style.overflow = 'auto';
                }, 300);
            });
            
            // Close on background click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(modal);
                        document.body.style.overflow = 'auto';
                    }, 300);
                }
            });
        });
    });

    // ========================================
    // Contact Form Validation & Submission
    // ========================================
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                // Show success message
                showNotification('আপনার বার্তা সফলভাবে পাঠানো হয়েছে!', 'success');
                
                // Reset form
                this.reset();
            } else {
                showNotification('অনুগ্রহ করে সকল ক্ষেত্র পূরণ করুন!', 'error');
            }
        });
    }

    // ========================================
    // Notification Function
    // ========================================
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Hide and remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // ========================================
    // Counter Animation for Statistics
    // ========================================
    const counters = document.querySelectorAll('.info-card h3');
    const speed = 200;
    let animated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const text = counter.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            
            if (!isNaN(number)) {
                const updateCount = () => {
                    const target = number;
                    const count = +counter.getAttribute('data-count') || 0;
                    const increment = target / speed;

                    if (count < target) {
                        counter.setAttribute('data-count', Math.ceil(count + increment));
                        counter.textContent = Math.ceil(count + increment) + (text.includes('+') ? '+' : '');
                        setTimeout(updateCount, 1);
                    } else {
                        counter.textContent = text;
                    }
                };
                updateCount();
            }
        });
    };

    // Trigger counter animation when in viewport
    const counterSection = document.querySelector('.quick-info');
    if (counterSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animateCounters();
                    animated = true;
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counterSection);
    }

    // ========================================
    // Islamic Pattern Background Animation
    // ========================================
    const createIslamicPattern = () => {
        const pattern = document.createElement('div');
        pattern.className = 'floating-pattern';
        pattern.style.left = Math.random() * 100 + '%';
        pattern.style.animationDuration = (Math.random() * 3 + 2) + 's';
        pattern.style.opacity = Math.random() * 0.5 + 0.1;
        
        document.body.appendChild(pattern);
        
        setTimeout(() => {
            pattern.remove();
        }, 5000);
    };

    // Create patterns periodically
    setInterval(createIslamicPattern, 3000);

    // ========================================
    // Prayer Times Update (Example - Static for now)
    // ========================================
    const updatePrayerTimes = () => {
        const now = new Date();
        const hours = now.getHours();
        
        // Highlight current prayer time
        const prayerElements = document.querySelectorAll('.prayer-times small');
        prayerElements.forEach(el => {
            el.style.color = 'inherit';
        });
        
        // This is a simplified example - in real implementation, 
        // you would calculate actual prayer times based on location
        if (hours >= 5 && hours < 12) {
            // Fajr to Dhuhr
            console.log('Current: Fajr period');
        } else if (hours >= 12 && hours < 16) {
            // Dhuhr to Asr
            console.log('Current: Dhuhr period');
        }
    };

    updatePrayerTimes();
    setInterval(updatePrayerTimes, 60000); // Update every minute

    // ========================================
    // Preloader (Optional)
    // ========================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // ========================================
    // Add styles for dynamically created elements
    // ========================================
    const style = document.createElement('style');
    style.textContent = `
        /* Gallery Modal */
        .gallery-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .gallery-modal .modal-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }

        .gallery-modal img {
            max-width: 100%;
            max-height: 90vh;
            border-radius: 10px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        }

        .close-modal {
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 40px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .close-modal:hover {
            color: #d4af37;
            transform: rotate(90deg);
        }

        /* Notification */
        .notification {
            position: fixed;
            top: 100px;
            right: -400px;
            background: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 9999;
            transition: right 0.3s ease;
            min-width: 300px;
        }

        .notification.show {
            right: 30px;
        }

        .notification.success {
            border-left: 4px solid #1a5632;
        }

        .notification.error {
            border-left: 4px solid #dc3545;
        }

        .notification i {
            font-size: 1.5rem;
        }

        .notification.success i {
            color: #1a5632;
        }

        .notification.error i {
            color: #dc3545;
        }

        /* Floating Pattern */
        .floating-pattern {
            position: fixed;
            width: 50px;
            height: 50px;
            background: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0 L30 15 L45 15 L33 24 L38 39 L25 30 L12 39 L17 24 L5 15 L20 15 Z' fill='%231a5632' opacity='0.3'/%3E%3C/svg%3E");
            pointer-events: none;
            animation: float-up 5s linear forwards;
            z-index: 1;
        }

        @keyframes float-up {
            from {
                top: 100%;
                transform: rotate(0deg);
            }
            to {
                top: -100px;
                transform: rotate(360deg);
            }
        }

        /* Navbar Scrolled Effect */
        .navbar.scrolled {
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        /* Loading State */
        body:not(.loaded) {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Certificate Modal View
    // ========================================
    window.viewCertificate = function() {
        const certificateImg = document.getElementById('certificateImg');
        const imgSrc = certificateImg.src;
        
        // Create modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
        `;
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.cssText = `
            max-width: 100%;
            max-height: 90vh;
            border-radius: 10px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        `;
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
        closeBtn.style.cssText = `
            position: absolute;
            top: -15px;
            right: -15px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background: white;
            color: #1a5632;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        `;
        
        closeBtn.onclick = function() {
            document.body.removeChild(modal);
        };
        
        modal.onclick = function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        };
        
        modalContent.appendChild(img);
        modalContent.appendChild(closeBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    };

    console.log('Islamic Madrasa Website - JavaScript Loaded Successfully');

})();
