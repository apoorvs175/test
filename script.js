// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Booking form handling
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    const roomType = document.getElementById('roomType');
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    const roomRate = document.getElementById('roomRate');
    const nightCount = document.getElementById('nightCount');
    const addOnsTotal = document.getElementById('addOnsTotal');
    const totalPrice = document.getElementById('totalPrice');

    const calculateTotal = () => {
        const rates = {
            single: 49,
            double: 79,
            dorm: 29,
            family: 119
        };

        const selectedRoom = roomType.value;
        const rate = rates[selectedRoom] || 0;

        const start = new Date(checkIn.value);
        const end = new Date(checkOut.value);
        const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) || 0;

        const addOns = document.querySelectorAll('input[type="checkbox"]:checked');
        let addOnsSum = 0;
        addOns.forEach(addon => {
            switch(addon.value) {
                case 'breakfast':
                    addOnsSum += 10 * nights;
                    break;
                case 'airport':
                    addOnsSum += 30;
                    break;
                case 'late':
                    addOnsSum += 20;
                    break;
            }
        });

        roomRate.textContent = `$${rate}`;
        nightCount.textContent = nights;
        addOnsTotal.textContent = `$${addOnsSum}`;
        totalPrice.textContent = `$${(rate * nights) + addOnsSum}`;
    };

    [roomType, checkIn, checkOut].forEach(input => {
        input.addEventListener('change', calculateTotal);
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your booking! We will confirm your reservation shortly.');
        bookingForm.reset();
        calculateTotal();
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Tour form handling
const tourForm = document.getElementById('tourForm');
if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for scheduling a tour! We will confirm your appointment shortly.');
        tourForm.reset();
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Image gallery lightbox
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        }
    });
});