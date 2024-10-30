// Get the menu icon and navigation menu elements
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');

// Add an event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the active class on the navigation menu
    navMenu.classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', function() {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Update active class
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                this.closest('.nav-item').classList.add('active');
            }
        });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            if (section.offsetTop <= scrollPosition + 100 && 
                section.offsetTop + section.offsetHeight > scrollPosition + 100) {
                const id = section.getAttribute('id');
                document.querySelector(`.navbar-nav a[href="#${id}"]`).closest('.nav-item').classList.add('active');
            } else {
                const id = section.getAttribute('id');
                document.querySelector(`.navbar-nav a[href="#${id}"]`).closest('.nav-item').classList.remove('active');
            }
        });
    });
});

//animation
const text=document.querySelector('.animated-text');
const textArray=text.getAttribute('data-text').split('');
text.innerHTML='';

textArray.forEach((letter,index) =>{
 const span=document.createElement('span');
 span.textContent=letter;
 span.style.animationDelay=$
 {index*0.2}s;
 span.style.animationDuration='2s';
 text.appendChild(span);
});