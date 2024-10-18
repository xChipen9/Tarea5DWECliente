// Variables que almacenan las elecciones posibles
const opciones = ['piedra', 'papel', 'tijeras'];

// Asignar eventos a los botones de elección
document.getElementById('piedra').addEventListener('click', () => jugar('piedra'));
document.getElementById('papel').addEventListener('click', () => jugar('papel'));
document.getElementById('tijeras').addEventListener('click', () => jugar('tijeras'));

function jugar(eleccionJugador) {
    // Elección aleatoria de la computadora
    const eleccionOrdenador = opciones[Math.floor(Math.random() * opciones.length)];

    // Determinar el resultado del juego
    const resultado = determinarGanador(eleccionJugador, eleccionOrdenador);

    // Mostrar las elecciones
    mostrarElecciones(eleccionJugador, eleccionOrdenador);

    // Mostrar el resultado del juego
    mostrarResultado(resultado);
}

function determinarGanador(jugador, ordenador) {
    if (jugador === ordenador) {
        return 'empate';
    } else if (
        (jugador === 'piedra' && ordenador === 'tijeras') ||
        (jugador === 'papel' && ordenador === 'piedra') ||
        (jugador === 'tijeras' && ordenador === 'papel')
    ) {
        return 'victoria';
    } else {
        return 'derrota';
    }
}

function mostrarElecciones(jugador, ordenador) {
    const emojis = {
        piedra: '🪨',
        papel: '📄',
        tijeras: '✂️'
    };

    document.getElementById('eleccionJugador').textContent = emojis[jugador];
    document.getElementById('eleccionOrdenador').textContent = emojis[ordenador];
}

function mostrarResultado(resultado) {
    const mensaje = document.getElementById('mensaje');
    
    if (resultado === 'victoria') {
        mensaje.textContent = '¡Ganaste!';
        mensaje.className = 'ganar';
    } else if (resultado === 'derrota') {
        mensaje.textContent = 'Perdiste.';
        mensaje.className = 'perder';
    } else {
        mensaje.textContent = 'Es un empate.';
        mensaje.className = 'dibujar';
    }
}