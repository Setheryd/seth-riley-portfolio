// Visual Effects Utility - Handles scroll animations and mouse follow

// Intersection Observer for scroll animations
const createScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Wait a bit for the page to settle, then observe elements
  setTimeout(() => {
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .text-reveal, .section-transition'
    );

    animatedElements.forEach(el => observer.observe(el));
  }, 100);
};

// Mouse follow effect
const createMouseFollow = () => {
  const mouseFollow = document.createElement('div');
  mouseFollow.className = 'mouse-follow';
  document.body.appendChild(mouseFollow);

  let mouseX = 0;
  let mouseY = 0;
  let followX = 0;
  let followY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    mouseFollow.classList.add('active');
  });

  document.addEventListener('mouseleave', () => {
    mouseFollow.classList.remove('active');
  });

  // Smooth follow animation
  const animate = () => {
    followX += (mouseX - followX) * 0.1;
    followY += (mouseY - followY) * 0.1;
    
    mouseFollow.style.left = `${followX - 100}px`;
    mouseFollow.style.top = `${followY - 100}px`;
    
    requestAnimationFrame(animate);
  };
  
  animate();
};

// Scroll progress indicator
const createScrollProgress = () => {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-elegant';
  document.body.appendChild(progressBar);

  const updateProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
  };

  window.addEventListener('scroll', updateProgress);
  updateProgress(); // Initial call
};

// Subtle grid background animation
const createGridBackground = () => {
  const main = document.querySelector('.main');
  if (main) {
    main.classList.add('grid-bg-animated');
  }
};

// Initialize all visual effects
export const initializeVisualEffects = () => {
  // Wait for DOM to be ready and ensure we're on the client side
  if (typeof window === 'undefined') return;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      createScrollAnimations();
      createMouseFollow();
      createScrollProgress();
      createGridBackground();
    });
  } else {
    createScrollAnimations();
    createMouseFollow();
    createScrollProgress();
    createGridBackground();
  }
};

// Stagger animation delays for cards
export const staggerCards = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
};

// Smooth scroll to sections
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Parallax effect for hero section
export const createParallaxEffect = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  });
};


