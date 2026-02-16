/**
 * Función para navegar hacia una sección específica
 * @param {string} id - El ID del elemento HTML a mostrar
 */
function irA(id) {
    // Escondemos el menú principal con una animación suave
    const menu = document.getElementById('menu-principal');
    menu.classList.add('hidden');

    // Esperamos 300ms (tiempo de la transición CSS) para mostrar la nueva sección
    setTimeout(() => {
        const seccionDestino = document.getElementById(id);
        seccionDestino.classList.remove('hidden');
        
        // Desplazamos la vista hacia arriba por si el usuario estaba abajo
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 300);
}

/**
 * Función para regresar al menú principal
 */
function volver() {
    // Buscamos todas las secciones abiertas y las ocultamos
    const secciones = document.querySelectorAll('.view-section');
    secciones.forEach(s => s.classList.add('hidden'));

    // Mostramos el menú principal tras la animación
    setTimeout(() => {
        const menu = document.getElementById('menu-principal');
        menu.classList.remove('hidden');
    }, 300);
}
