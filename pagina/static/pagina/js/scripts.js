// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Search functionality
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.querySelector('.search-btn').addEventListener('click', performSearch);

function performSearch() {
    const searchTerm = document.querySelector('.search-input').value;
    if (searchTerm.trim()) {
        alert(`Buscando: ${searchTerm}`);
        // Aquí implementarías la lógica de búsqueda real
        // Por ejemplo: window.location.href = `catalogo.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Scroll indicator functionality
window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const dots = document.querySelectorAll('.scroll-dot');
    const sections = document.querySelectorAll('section, header');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id') || 'header';
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === Math.floor(window.pageYOffset / (document.body.scrollHeight / dots.length))) {
            dot.classList.add('active');
        }
    });
});

// Add hover effects for interactive elements
document.querySelectorAll('.nav-links a, .user-icon, .cart-icon').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Navigation active state management
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'inicio.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavigation();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Cart functionality (placeholder)
document.querySelector('.cart-icon').addEventListener('click', function() {
    alert('Carrito de compras - Funcionalidad por implementar');
    // Aquí implementarías la funcionalidad del carrito
});

// User icon functionality (placeholder)
document.querySelector('.user-icon').addEventListener('click', function() {
    alert('Panel de usuario - Funcionalidad por implementar');
    // Aquí implementarías el login/registro o perfil de usuario
});