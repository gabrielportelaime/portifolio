// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'mooth' });
    });
});

// Add animation to hero section
document.getElementById('hero').addEventListener('mouseover', () => {
    document.getElementById('hero').classList.add('animate');
});

document.getElementById('hero').addEventListener('mouseout', () => {
    document.getElementById('hero').classList.remove('animate');
});

// Add animation to project grid
document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('mouseover', () => {
        project.classList.add('animate');
    });

    project.addEventListener('mouseout', () => {
        project.classList.remove('animate');
    });
});

// Add animation to social media links
document.querySelectorAll('#social-media a').forEach((link) => {
    link.addEventListener('mouseover', () => {
        link.classList.add('animate');
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('animate');
    });
});

// Add animation to contact form
document.getElementById('contact').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    form.classList.add('animate');
    setTimeout(() => {
        form.classList.remove('animate');
    }, 2000);
});