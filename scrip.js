// Navbar toggle
// Selecciona el ícono del botón de navegación
const icon = document.querySelector('i.navbar-toggler');

// Agrega un evento de clic al ícono para alternar entre dos estados
icon.addEventListener('click', function () {
    // Cambia la clase del ícono entre 'bx-x' y 'bx-menu' según su estado actual
    this.classList.contains('collapsed') ? 
    this.classList.replace('bx-x', 'bx-menu') : this.classList.replace('bx-menu', 'bx-x');
});

// Selecciona todos los enlaces de navegación
const allMenu = document.querySelectorAll('nav .navbar-nav a');
// Selecciona todas las secciones excepto la sección de contacto
const sections = document.querySelectorAll('section:not(#contact)');

// Agrega un evento de desplazamiento a la ventana
window.addEventListener('scroll', function() {
    let current = ''; // Variable para almacenar el ID de la sección visible
    sections.forEach(function(sect) {
        // Comprueba si la posición desplazada es mayor que la posición superior de la sección
        if (this.pageYOffset + 50 > sect.offsetTop) {
            current = sect.getAttribute('id'); // Actualiza la sección actual
        }
    });

    // Itera sobre cada elemento de navegación
    allMenu.forEach(function(nav) {
        nav.classList.remove('active'); // Elimina la clase 'active' de todos los enlaces
        // Si el enlace coincide con la sección actual, añade la clase 'active'
        if (nav.classList.contains(current)) {
            nav.classList.add('active');
        }
    });
});

// Selecciona el elemento con la clase 'loading' para el indicador de carga
const loader = $('.loading');
// Agrega un evento de carga a la ventana
$(window).on('load', function() {
    loader.fadeOut(); // Oculta el indicador de carga con una transición
});

// Agrega un evento al cargar el contenido del documento
document.addEventListener('DOMContentLoaded', function () {
    // Configuración para el efecto de escritura
    var options = {
        strings: ["Desarrollador", "Programador", "Diseñador"], // Títulos a mostrar
        typeSpeed: 50, // Velocidad de escritura
        backSpeed: 25, // Velocidad de borrado
        loop: true // Repetir el ciclo
    };
    // Crea una nueva instancia de Typed para animar los subtítulos
    var typed = new Typed('.typed', options);
});