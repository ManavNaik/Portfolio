const typewriter = document.getElementById('typewriter');
const words = ['Full-Stack Developer', 'Tech Enthusiast', 'Problem Solver', 'Software Tester'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
const currentWord = words[wordIndex];

if (!isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex);
    charIndex++;
    if (charIndex > currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    } else {
    setTimeout(type, 100);
    }
} else {
    typewriter.textContent = currentWord.substring(0, charIndex);
    charIndex--;
    if (charIndex < 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    charIndex = 0;
    setTimeout(type, 200);
    } else {
    setTimeout(type, 50);
    }
}
}

document.addEventListener('DOMContentLoaded', () => {
type();
});

document.addEventListener('DOMContentLoaded', () => {
        AOS.init({
        duration: 800, 
        easing: 'ease-in-out', 
        once: true, 
        offset: 100 
        });
    });


// Navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      navMenu.classList.toggle('translate-x-0');
      if (navMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
        navMenu.classList.remove('translate-x-0');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      });
    });
  });