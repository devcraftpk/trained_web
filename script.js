    document.getElementById('mobileMenu').addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('active');
    });

    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Welcome to IronForge! Our team will contact you within 24 hours to schedule your free trial.');
      e.target.reset();
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.getElementById('navLinks')?.classList.remove('active');
        }
      });
    });