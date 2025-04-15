document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('header nav a, .footer-content a, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the href attribute has a hash
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Close mobile menu if open
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
                    }
                    
                    // Scroll to the target section
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Account for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form Validation and Submission
    const appointmentForm = document.getElementById('appointment-form');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            // Basic form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Reset error states
            const fields = [name, email, phone, message];
            fields.forEach(field => {
                field.style.borderColor = '#ddd';
            });
            
            // Validate required fields
            if (!name.value.trim()) {
                name.style.borderColor = 'red';
                isValid = false;
                e.preventDefault();
            }
            
            if (!email.value.trim()) {
                email.style.borderColor = 'red';
                isValid = false;
                e.preventDefault();
            } else {
                // Basic email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    email.style.borderColor = 'red';
                    isValid = false;
                    e.preventDefault();
                }
            }
            
            if (!phone.value.trim()) {
                phone.style.borderColor = 'red';
                isValid = false;
                e.preventDefault();
            }
            
            // If form is not valid, show error message
            if (!isValid) {
                alert('يرجى ملء جميع الحقول المطلوبة بشكل صحيح.');
                e.preventDefault();
            }
            // If valid, formsubmit.co will handle the submission
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Current year for copyright
    const currentYear = new Date().getFullYear();
    const copyrightYear = document.querySelector('.copyright p');
    
    if (copyrightYear) {
        copyrightYear.innerHTML = copyrightYear.innerHTML.replace('2025', currentYear);
    }
});
