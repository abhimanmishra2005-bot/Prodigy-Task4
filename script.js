document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // --- Header Style on Scroll ---
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-slate-900/90', 'backdrop-blur-sm', 'shadow-lg');
        } else {
            header.classList.remove('bg-slate-900/90', 'backdrop-blur-sm', 'shadow-lg');
        }
    };
    window.addEventListener('scroll', handleScroll);

    // --- Mobile Menu Toggle ---
    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    };
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // --- Close Mobile Menu on Link Click ---
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });

    // --- Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    const words = ["I'm a Web Developer.", "I build things for the web.", "I love to code."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let displayText = '';

        if (isDeleting) {
            // Deleting characters
            displayText = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing characters
            displayText = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        typewriterElement.textContent = displayText;

        const typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at the end of the word
            setTimeout(() => { isDeleting = true; }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, typeSpeed);
    }

    // Start the typewriter effect
    type();
});
