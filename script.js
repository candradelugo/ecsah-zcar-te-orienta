// ============================================
// ECSAH ZCAR Te Orienta - Micrositio
// Contenido para estudiantes y docentes
// ============================================

// 📚 CONTENIDO PARA ESTUDIANTES
const contenidoEstudiantes = [
    {
        titulo: "📌 Matrícula 2026",
        descripcion: "Toda la información sobre el proceso de matrícula: fechas, requisitos, pasos y documentación necesaria.",
        enlaces: [
            { texto: "📅 Calendario Académico 2026", ruta: "documentos/Calendario-Académico-2026.pdf" }
        ]
    },
    {
        titulo: "🎓 Opciones de grado",
        descripcion: "Conoce las diferentes opciones para tu trabajo de grado: proyecto aplicado, diplomado, artículo, etc.",
        enlaces: [
            { texto: "📘 Opciones de Grado - Guía completa", ruta: "documentos/Opciones-de-Grado.pdf" },
            { texto: "📖 Información General Sobre Grado", ruta: "https://academia.unad.edu.co/pregrado-posgrado/proximos-a-graduarse/grados" }
        ]
    },
    {
        titulo: "💼 Prácticas profesionales",
        descripcion: "Documentación, seguimiento, convenios, informe final y carta de presentación para tu práctica.",
        enlaces: [
            { texto: "📋 Guía de práctica profesional", ruta: "#" },
            { texto: "📝 Formatos de seguimiento", ruta: "#" },
            { texto: "🤝 Convenios activos", ruta: "#" }
        ]
    },
    {
        titulo: "🔄 Homologaciones - SIHO",
        descripcion: "Proceso de homologación de asignaturas a través del Sistema SIHO.",
        enlaces: [
            { texto: "📖 Manual SIHO - Rol Estudiante", ruta: "documentos/MANUAL-SHIO-Rol-Estudiante.pdf" },
            { texto: "📝 Pruebas de suficiencia", ruta: "#" }
        ]
    },
    {
        titulo: "📰 Noticias Saber Pro / TyT",
        descripcion: "Información actualizada sobre las pruebas Saber Pro y TyT: fechas, novedades, resultados y recursos de preparación.",
        enlaces: [
            { texto: "📰 Noticias oficiales Saber Pro", ruta: "https://noticias.unad.edu.co/index.php/saber-pro" },
            { texto: "📋 Inscripción 2026-1", ruta: "documentos/Proceso de Inscripción Pruebas Saber Primer Semestre 2026.pdf" },
            { texto: "❓ Preguntas frecuentes", ruta: "https://academia.unad.edu.co/pregrado-posgrado/proximos-a-graduarse/pruebas-icfes" }
        ]
    },
    {
        titulo: "🔄 Cambios de malla curricular",
        descripcion: "Resoluciones, planes de transición y equivalencias entre mallas antiguas y nuevas.",
        enlaces: [
            { texto: "📄 Documento de transición 16-04", ruta: "documentos/Equivalencias 3443 para 16-04.pdf" },
            { texto: "⚖️ Resolución vigente", ruta: "#" }
        ]
    },
    {
        titulo: "🎫 Eventos de fortalecimiento disciplinar",
        descripcion: "Socialización y divulgación de los eventos académicos de la ECSAH en la Zona Caribe. Conferencias, talleres, seminarios y encuentros.",
        enlaces: [
            { texto: "📅 Calendario de eventos", ruta: "#" },
            { texto: "📋 Próximos eventos", ruta: "#" },
            { texto: "📸 Galería de eventos pasados", ruta: "#" },
            { texto: "📝 Inscripción a eventos", ruta: "#" }
        ]
    },
    {
        titulo: "🎙️ Programas radiales",
        descripcion: "Espacios de diálogo, entrevistas y contenido académico producido por la ECSAH Zona Caribe para toda la comunidad.",
        enlaces: [
            { texto: "📻 Escuchar programas grabados", ruta: "#" },
            { texto: "📅 Próximas transmisiones", ruta: "#" },
            { texto: "🎧 Podcasts disponibles", ruta: "#" },
            { texto: "📝 Participar como invitado", ruta: "#" }
        ]
    },
    {
        titulo: "🌐 Redes Sociales",
        descripcion: "Síguenos en nuestras redes sociales oficiales y mantente conectado con la ECSAH Zona Caribe.",
        enlaces: [
            { texto: "📷 Instagram", ruta: "https://www.instagram.com/unad.zcar?igsh=d2llZGJmaTJlcnk=" },
            { texto: "📘 Facebook", ruta: "https://www.facebook.com/share/14fm1HT8Paf/" },
            { texto: "📧 Correo ECSAH ZCAR", ruta: "mailto:ecsah.zcar@unad.edu.co" }
        ]
    }
];

// 👩‍🏫 CONTENIDO PARA DOCENTES (CORREGIDO)
const contenidoDocentes = [
    {
        titulo: "🔬 CIPAS",
        descripcion: "Lineamientos, formato guía CIPAS para proyectos de investigación e innovación.",
        enlaces: [
            { texto: "📄 Lineamientos CIPAS", ruta: "#" },
            { texto: "📋 Primera Matrícula", ruta: "#" },
            { texto: "📋 Cursos de Alta Complejidad", ruta: "#" },
            { texto: "📋 CIPAS Territoriales", ruta: "#" }
        ]
    },
    {
        titulo: "🔄 Sistema de Homologación (SIHO)",
        descripcion: "Construcción de procuradores e instructivo técnico y administrativo.",
        enlaces: [
            { texto: "📋 Responsables", ruta: "#" },
            { texto: "🎥 Vídeo tutorial", ruta: "#" }
        ]
    },
    {
        titulo: "✅ Ruta de admisión Psicología",
        descripcion: "Proceso de admisión para el programa de Psicología: requisitos, fechas y documentación.",
        enlaces: [
            { texto: "📅 Calendario de admisión", ruta: "#" },
            { texto: "📋 Requisitos", ruta: "#" },
            { texto: "📝 Formulario de inscripción", ruta: "#" }
        ]
    },
    {
        titulo: "🔍 Investigación",
        descripcion: "Convocatorias internas, semilleros de investigación y recursos para proyectos.",
        enlaces: [
            { texto: "📋 Semilleros de Investigación", ruta: "#" },
            { texto: "📢 Convocatorias vigentes", ruta: "#" }
        ]
    }
];

// ============================================
// FUNCIONES DEL MICROSITIO
// ============================================

function crearTarjeta(item) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerText = item.titulo;
    
    const body = document.createElement('div');
    body.className = 'card-body';
    
    const desc = document.createElement('p');
    desc.innerText = item.descripcion;
    body.appendChild(desc);
    
    const lista = document.createElement('ul');
    if (item.enlaces && item.enlaces.length > 0) {
        item.enlaces.forEach(enlace => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = enlace.ruta;
            link.className = 'btn-enlace';
            link.innerText = enlace.texto;
            link.target = "_blank";
            li.appendChild(link);
            lista.appendChild(li);
        });
        body.appendChild(lista);
    }
    
    card.appendChild(header);
    card.appendChild(body);
    return card;
}

function renderizarGrid(contenido, contenedorId) {
    const grid = document.getElementById(contenedorId);
    if (!grid) return;
    grid.innerHTML = '';
    contenido.forEach(item => {
        const tarjeta = crearTarjeta(item);
        grid.appendChild(tarjeta);
    });
}

function filtrarTarjetas(contenido, textoBusqueda) {
    if (!textoBusqueda.trim()) return contenido;
    const lowerQuery = textoBusqueda.toLowerCase();
    return contenido.filter(item => 
        item.titulo.toLowerCase().includes(lowerQuery) || 
        item.descripcion.toLowerCase().includes(lowerQuery) ||
        (item.enlaces && item.enlaces.some(e => e.texto.toLowerCase().includes(lowerQuery)))
    );
}

let currentTab = 'estudiantes';
let allEstudiantes = [...contenidoEstudiantes];
let allDocentes = [...contenidoDocentes];

function updateSearch() {
    const searchTerm = document.getElementById('searchInput')?.value || '';
    if (currentTab === 'estudiantes') {
        const filtrados = filtrarTarjetas(allEstudiantes, searchTerm);
        renderizarGrid(filtrados, 'gridEstudiantes');
    } else {
        const filtrados = filtrarTarjetas(allDocentes, searchTerm);
        renderizarGrid(filtrados, 'gridDocentes');
    }
}

function initTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            currentTab = tabId;
            updateSearch();
        });
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderizarGrid(allEstudiantes, 'gridEstudiantes');
    renderizarGrid(allDocentes, 'gridDocentes');
    initTabs();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', updateSearch);
    }
    currentTab = 'estudiantes';
});
// ============================================
// PROTECCIÓN PARA SECCIÓN DOCENTES
// ============================================

// Cambia esta contraseña por la que quieras
const DOCENTE_PASSWORD = "docentesECSAH2026";  // <-- MODIFICA AQUÍ LA CONTRASEÑA

let docenteUnlocked = false;

function checkDocenteAccess() {
    const docenteContent = document.getElementById('docenteContent');
    const lockScreen = document.getElementById('docenteLockScreen');
    
    if (docenteUnlocked) {
        docenteContent.style.display = 'block';
        lockScreen.style.display = 'none';
        // Renderizar contenido docente solo la primera vez
        if (document.getElementById('gridDocentes').children.length === 0) {
            renderizarGrid(allDocentes, 'gridDocentes');
        }
    } else {
        docenteContent.style.display = 'none';
        lockScreen.style.display = 'flex';
    }
}

function unlockDocente() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    
    if (passwordInput.value === DOCENTE_PASSWORD) {
        docenteUnlocked = true;
        errorMsg.textContent = '';
        passwordInput.value = '';
        checkDocenteAccess();
        // Limpiar búsqueda si estaba activa
        updateSearch();
    } else {
        errorMsg.textContent = '❌ Contraseña incorrecta. Acceso denegado.';
        passwordInput.value = '';
    }
}

// Modificar la función initTabs para proteger la pestaña docentes
const originalInitTabs = initTabs;
function enhancedInitTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Si intenta acceder a docentes sin desbloquear
            if (tabId === 'docentes' && !docenteUnlocked) {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                contents.forEach(content => content.classList.remove('active'));
                document.getElementById(tabId).classList.add('active');
                checkDocenteAccess();
                currentTab = tabId;
                return;
            }
            
            // Si ya está desbloqueado o es estudiantes
            if (tabId === 'docentes' && docenteUnlocked) {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                contents.forEach(content => content.classList.remove('active'));
                document.getElementById(tabId).classList.add('active');
                currentTab = tabId;
                updateSearch();
            } else if (tabId === 'estudiantes') {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                contents.forEach(content => content.classList.remove('active'));
                document.getElementById(tabId).classList.add('active');
                currentTab = tabId;
                updateSearch();
            }
        });
    });
}

// Modificar updateSearch para manejar docentes bloqueados
const originalUpdateSearch = updateSearch;
function enhancedUpdateSearch() {
    const searchTerm = document.getElementById('searchInput')?.value || '';
    if (currentTab === 'estudiantes') {
        const filtrados = filtrarTarjetas(allEstudiantes, searchTerm);
        renderizarGrid(filtrados, 'gridEstudiantes');
    } else if (currentTab === 'docentes' && docenteUnlocked) {
        const filtrados = filtrarTarjetas(allDocentes, searchTerm);
        renderizarGrid(filtrados, 'gridDocentes');
    }
}

// Reemplazar funciones
window.updateSearch = enhancedUpdateSearch;
window.initTabs = enhancedInitTabs;

// Evento para el botón de desbloqueo
document.addEventListener('DOMContentLoaded', () => {
    renderizarGrid(allEstudiantes, 'gridEstudiantes');
    enhancedInitTabs();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', enhancedUpdateSearch);
    }
    currentTab = 'estudiantes';
    
    const unlockBtn = document.getElementById('unlockBtn');
    if (unlockBtn) {
        unlockBtn.addEventListener('click', unlockDocente);
    }
    
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                unlockDocente();
            }
        });
    }
    
    checkDocenteAccess();
});
