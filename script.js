// --- LÓGICA DE CONTROL DE PESTAÑAS (TABS) PARA EL PORTAFOLIO ---
function switchTab(type, button) {
    // Desactiva todos los botones de pestañas
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // Oculta todos los paneles de la galería
    document.querySelectorAll('.gallery-panel').forEach(panel => panel.classList.remove('active'));
    
    // Activa la pestaña donde el usuario hizo clic
    button.classList.add('active');
    
    // Muestra el panel correspondiente
    if(type === 'bodas') {
        document.getElementById('panel-bodas').classList.add('active');
    } else {
        document.getElementById('panel-xv').classList.add('active');
    }
}

// --- LÓGICA DE ACORDEÓN PARA LAS PREGUNTAS FRECUENTES (FAQ) ---
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        
        // Si el elemento ya está abierto, lo cerramos
        if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            // Cerramos cualquier otro acordeón que esté abierto actualmente
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Abrimos el elemento actual calculando dinámicamente su altura
            faqItem.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});