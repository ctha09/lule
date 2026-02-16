:root {
    --fondo: #fffafb;
    --verde-lule: #95d5b2; 
    --pastel-rosa: #ffccd5;
    --pastel-azul: #bde0fe;
    --pastel-lila: #cdb4db;
    --texto: #5a5a5a;
    --whatsapp: #25d366;
}

body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: var(--fondo);
    background-image: radial-gradient(#f1d1d1 1px, transparent 1px);
    background-size: 30px 30px;
    font-family: 'Segoe UI', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header-title {
    font-size: clamp(3rem, 10vw, 6rem);
    color: var(--verde-lule);
    margin: 40px 0;
    font-family: 'Georgia', serif;
    text-shadow: 3px 3px 0px white;
}

.subtitulo {
    color: var(--texto);
    font-size: 2.5rem;
    margin-bottom: 30px;
}

.view-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: all 0.5s ease-in-out;
}

.hidden {
    display: none !important;
    opacity: 0;
    transform: translateY(20px);
}

/* Menu Principal */
.container-menu {
    display: flex;
    gap: 30px;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    width: 280px;
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    border-radius: 40px;
    cursor: pointer;
    padding: 30px;
    box-shadow: 0 10px 0px rgba(0,0,0,0.05), 0 15px 30px rgba(0,0,0,0.1);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 10px solid white;
}

.card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 0px rgba(0,0,0,0.03), 0 30px 50px rgba(0,0,0,0.15);
}

.card-digital { background-color: var(--pastel-rosa); }
.card-contacto { background-color: var(--pastel-azul); }
.card-productos { background-color: var(--pastel-lila); }

/* Interior Containers */
.interior-container {
    flex-direction: column;
    padding: 20px;
    text-align: center;
    width: 100%;
    max-width: 1200px;
}

.btn-volver {
    margin-bottom: 30px;
    padding: 12px 30px;
    background: white;
    border: 3px solid var(--verde-lule);
    border-radius: 50px;
    color: var(--verde-lule);
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.btn-volver:hover { background: var(--verde-lule); color: white; }

/* Productos Terminados */
.productos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    width: 90%;
    padding-bottom: 50px;
}

.maxi-card {
    background: white;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0,0,0,0.08);
    border: 12px solid white;
    transition: transform 0.4s ease;
}

.maxi-card:hover { transform: scale(1.03); }

.foto-producto {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
}

.info-producto { padding: 20px; }

/* Redes Sociales */
.opciones-flotantes {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    justify-content: center;
}

.btn-red-social {
    width: 220px;
    padding: 40px 20px;
    border-radius: 35px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.3rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: 0.3s;
}

.btn-red-social:hover { transform: translateY(-10px) rotate(-2deg); }
.bg-whatsapp { background-color: var(--whatsapp); }
.bg-instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #bc1888); }
