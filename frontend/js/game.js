const phases = [
    {
        id: 1,
        title: 'Os primeiros habitantes do Brasil',
        period: 'Antes de 1500',
        description: 'Povos indígenas, seus costumes, moradias, objetos e tradições.',
        emoji: '🪶',
        color: '#b97842',
        tint: '#fbefdf',
        pairs: [
            { id: 1, first: { title: 'Povos originários', emoji: '🪶' }, second: { title: 'Diversidade', detail: 'Centenas de povos, línguas e culturas existiam no território.', emoji: '🌿' } },
            { id: 2, first: { title: 'Maloca', emoji: '🛖' }, second: { title: 'Moradia coletiva', detail: 'Em alguns povos, grandes casas reuniam várias famílias.', emoji: '🏡' } },
            { id: 3, first: { title: 'Mandioca', emoji: '🥔' }, second: { title: 'Agricultura', detail: 'Era cultivada por diferentes povos indígenas.', emoji: '🌱' } },
            { id: 4, first: { title: 'Tradição oral', emoji: '🗣️' }, second: { title: 'Saberes', detail: 'Histórias e conhecimentos passavam entre gerações.', emoji: '🔥' } }
        ]
    },
    {
        id: 2,
        title: 'A chegada dos portugueses',
        period: '1500 e início da colonização',
        description: 'Cabral, a chegada portuguesa e os primeiros contatos entre os povos.',
        emoji: '⛵',
        color: '#3984a4',
        tint: '#e7f4f8',
        pairs: [
            { id: 1, first: { title: 'Pedro Álvares Cabral', emoji: '⛵' }, second: { title: 'Chegada em 1500', detail: 'A frota portuguesa alcançou o litoral em abril de 1500.', emoji: '🌊' } },
            { id: 2, first: { title: 'Pero Vaz de Caminha', emoji: '✒️' }, second: { title: 'Carta', detail: 'Relatou a viagem e o contato com os povos indígenas.', emoji: '📜' } },
            { id: 3, first: { title: 'Pau-brasil', emoji: '🌳' }, second: { title: 'Extração', detail: 'A madeira era valorizada por seu corante avermelhado.', emoji: '🪵' } },
            { id: 4, first: { title: 'Primeiros contatos', emoji: '🤝' }, second: { title: 'Encontro de povos', detail: 'A chegada marcou relações diversas e desiguais.', emoji: '🧭' } }
        ]
    },
    {
        id: 3,
        title: 'Brasil Colônia',
        period: 'Séculos XVI ao início do XIX',
        description: 'Engenhos, mineração, bandeirantes e trabalho escravizado.',
        emoji: '🏺',
        color: '#bc704d',
        tint: '#fbede5',
        pairs: [
            { id: 1, first: { title: 'Engenho', emoji: '🏚️' }, second: { title: 'Açúcar', detail: 'A produção açucareira marcou a economia colonial.', emoji: '🍬' } },
            { id: 2, first: { title: 'Mineração', emoji: '⛏️' }, second: { title: 'Ouro', detail: 'A descoberta de ouro impulsionou a ocupação do interior.', emoji: '🪙' } },
            { id: 3, first: { title: 'Bandeirantes', emoji: '🥾' }, second: { title: 'Expedições', detail: 'Entradas pelo interior ampliaram o território colonizado.', emoji: '🗺️' } },
            { id: 4, first: { title: 'Escravização', emoji: '⛓️' }, second: { title: 'Resistência', detail: 'Africanos e indígenas foram escravizados e resistiram de muitas formas.', emoji: '✊🏿' } }
        ]
    },
    {
        id: 4,
        title: 'A Independência e o Império',
        period: '1822–1889',
        description: 'Independência, reinados, Dom Pedro II e abolição da escravidão.',
        emoji: '👑',
        color: '#7561c9',
        tint: '#f0edff',
        pairs: [
            { id: 1, first: { title: 'Dom Pedro I', emoji: '👑' }, second: { title: 'Independência', detail: 'Proclamada em 7 de setembro de 1822.', emoji: '📜' } },
            { id: 2, first: { title: 'Primeiro Reinado', emoji: '🏛️' }, second: { title: '1822 a 1831', detail: 'Período em que Dom Pedro I governou o Brasil.', emoji: '📆' } },
            { id: 3, first: { title: 'Dom Pedro II', emoji: '🎩' }, second: { title: 'Segundo Reinado', detail: 'Período de governo de 1840 a 1889.', emoji: '🏰' } },
            { id: 4, first: { title: 'Lei Áurea', emoji: '🖋️' }, second: { title: 'Abolição em 1888', detail: 'Conquista após longa luta e resistência de pessoas escravizadas e abolicionistas.', emoji: '🕊️' } }
        ]
    },
    {
        id: 5,
        title: 'O início da República',
        period: 'A partir de 1889',
        description: 'A República, Marechal Deodoro e as mudanças no governo.',
        emoji: '🇧🇷',
        color: '#43966f',
        tint: '#e9f6ed',
        pairs: [
            { id: 1, first: { title: 'República', emoji: '🇧🇷' }, second: { title: '15 de novembro', detail: 'A República foi proclamada em 1889.', emoji: '📅' } },
            { id: 2, first: { title: 'Deodoro da Fonseca', emoji: '🪖' }, second: { title: 'Primeiro presidente', detail: 'Foi o primeiro presidente do Brasil republicano.', emoji: '🏛️' } },
            { id: 3, first: { title: 'Constituição', emoji: '📖' }, second: { title: '1891', detail: 'A primeira Constituição republicana foi promulgada nesse ano.', emoji: '⚖️' } },
            { id: 4, first: { title: 'Café', emoji: '☕' }, second: { title: 'Exportação', detail: 'O café teve grande importância econômica no período.', emoji: '🚢' } }
        ]
    },
    {
        id: 6,
        title: 'O Brasil se transforma',
        period: 'Século XX',
        description: 'Brasília, cidades, cultura e mudanças no cotidiano brasileiro.',
        emoji: '🏙️',
        color: '#398da0',
        tint: '#e7f5f6',
        pairs: [
            { id: 1, first: { title: 'Brasília', emoji: '🏙️' }, second: { title: 'Inaugurada em 1960', detail: 'A nova capital foi inaugurada durante o governo JK.', emoji: '🎉' } },
            { id: 2, first: { title: 'Juscelino Kubitschek', emoji: '🤵' }, second: { title: '50 anos em 5', detail: 'Seu governo ficou marcado por esse plano de desenvolvimento.', emoji: '📈' } },
            { id: 3, first: { title: 'Urbanização', emoji: '🏗️' }, second: { title: 'Cidades em expansão', detail: 'Muitas cidades cresceram ao longo do século XX.', emoji: '🚦' } },
            { id: 4, first: { title: 'Cultura brasileira', emoji: '🎶' }, second: { title: 'Novas expressões', detail: 'Música, rádio, cinema e televisão ganharam espaço.', emoji: '📻' } }
        ]
    },
    {
        id: 7,
        title: 'O Brasil de hoje',
        period: 'Atualidade',
        description: 'Símbolos nacionais, diversidade cultural, cidadania e Brasil atual.',
        emoji: '🌎',
        color: '#df8c3e',
        tint: '#fff3df',
        pairs: [
            { id: 1, first: { title: 'Bandeira', emoji: '🇧🇷' }, second: { title: 'Símbolo nacional', detail: 'Representa o país junto com outros símbolos oficiais.', emoji: '⭐' } },
            { id: 2, first: { title: 'Diversidade cultural', emoji: '🎭' }, second: { title: 'Muitas identidades', detail: 'Culturas e tradições variadas fazem parte do Brasil.', emoji: '🎨' } },
            { id: 3, first: { title: 'Cidadania', emoji: '🤝' }, second: { title: 'Direitos e deveres', detail: 'Participar da sociedade envolve direitos e responsabilidades.', emoji: '⚖️' } },
            { id: 4, first: { title: 'Território brasileiro', emoji: '🗺️' }, second: { title: 'Biomas', detail: 'Amazônia, Cerrado, Caatinga e outros biomas compõem o país.', emoji: '🌳' } }
        ]
    }
];

const board = document.getElementById('game-board');
const scoreElement = document.getElementById('score');
const movesElement = document.getElementById('moves');
const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');
const pairsFoundElement = document.getElementById('pairs-found');
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const victoryPanel = document.getElementById('victory');
const victoryMessage = document.getElementById('victory-message');
const nameScreen = document.getElementById('name-screen');
const phaseScreen = document.getElementById('phase-screen');
const gamePanel = document.getElementById('game-panel');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('player-name');
const nameError = document.getElementById('name-error');
const leaderboardList = document.getElementById('leaderboard-list');
const phaseGrid = document.getElementById('phase-grid');

const leaderboardStorageKey = 'bauDoTempoLeaderboard';
const maxLeaderboardEntries = 5;

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;
let moves = 0;
let matchedPairs = 0;
let secondsElapsed = 0;
let timerInterval = null;
let mismatchTimeout = null;
let playerName = '';
let currentPhase = null;
let resultSaved = false;

document.getElementById('restart').addEventListener('click', startGame);
document.getElementById('play-again').addEventListener('click', startGame);
document.getElementById('change-player').addEventListener('click', showNameScreen);
document.getElementById('change-phase').addEventListener('click', showPhaseScreen);
document.getElementById('phase-back').addEventListener('click', showNameScreen);
nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    playerName = nameInput.value.trim();

    if (!playerName) {
        nameError.textContent = 'Digite seu nome para começar.';
        nameInput.focus();
        return;
    }

    nameError.textContent = '';
    nameScreen.hidden = true;
    phaseScreen.hidden = false;
    document.getElementById('phase-player-name').textContent = playerName;
    renderPhases();
});

function renderPhases() {
    phaseGrid.replaceChildren();

    phases.forEach((phase) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'phase-card';
        button.style.setProperty('--phase-color', phase.color);
        button.style.setProperty('--phase-tint', phase.tint);
        button.setAttribute('aria-label', `Fase ${phase.id}: ${phase.title}. ${phase.period}. ${phase.description}`);

        const artwork = document.createElement('span');
        artwork.className = 'phase-art';
        artwork.setAttribute('aria-hidden', 'true');
        artwork.textContent = phase.emoji;

        const copy = document.createElement('span');
        copy.className = 'phase-copy';
        const number = document.createElement('span');
        number.className = 'phase-number';
        number.textContent = `FASE ${phase.id}`;
        const title = document.createElement('span');
        title.className = 'phase-title';
        title.textContent = phase.title;
        const period = document.createElement('span');
        period.className = 'phase-period';
        period.textContent = phase.period;
        const description = document.createElement('span');
        description.className = 'phase-description';
        description.textContent = phase.description;
        copy.append(number, title, period, description);

        button.append(artwork, copy);
        button.addEventListener('click', () => {
            currentPhase = phase;
            phaseScreen.hidden = true;
            gamePanel.hidden = false;
            startGame();
        });
        phaseGrid.append(button);
    });
}

function shuffle(array) {
    const shuffled = [...array];
    for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

function startTimer() {
    if (timerInterval !== null) return;
    timerInterval = window.setInterval(() => {
        secondsElapsed += 1;
        timerElement.textContent = formatTime(secondsElapsed);
    }, 1000);
}

function startGame() {
    if (!currentPhase) return;
    window.clearInterval(timerInterval);
    window.clearTimeout(mismatchTimeout);
    timerInterval = null;
    mismatchTimeout = null;
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    score = 0;
    moves = 0;
    matchedPairs = 0;
    secondsElapsed = 0;
    resultSaved = false;
    scoreElement.textContent = '0';
    movesElement.textContent = '0';
    timerElement.textContent = '00:00';
    pairsFoundElement.textContent = '0';
    progressFill.style.width = '0%';
    document.getElementById('pairs-total').textContent = currentPhase.pairs.length;
    progressBar.setAttribute('aria-valuemax', String(currentPhase.pairs.length));
    progressBar.setAttribute('aria-valuenow', '0');
    messageElement.textContent = 'Escolha uma carta para começar a aventura!';
    messageElement.className = 'message';
    victoryPanel.hidden = true;
    document.getElementById('current-player').textContent = playerName;
    document.getElementById('game-phase-title').textContent = currentPhase.title;
    document.getElementById('game-phase-description').textContent = currentPhase.description;
    renderBoard();
}

function renderBoard() {
    board.replaceChildren();
    const cards = shuffle(currentPhase.pairs.flatMap((pair) => [
        { ...pair.first, pairId: pair.id },
        { ...pair.second, pairId: pair.id }
    ]));

    cards.forEach((cardData) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'card';
        card.dataset.pair = String(cardData.pairId);
        card.setAttribute('aria-label', 'Carta fechada');
        card.setAttribute('aria-pressed', 'false');

        const back = document.createElement('span');
        back.className = 'card-back';
        back.setAttribute('aria-hidden', 'true');
        back.textContent = '?';
        card.append(back);
        card.addEventListener('click', () => flipCard(card, cardData));
        board.append(card);
    });
}

function flipCard(card, cardData) {
    if (lockBoard || card === firstCard || card.classList.contains('matched')) return;

    startTimer();
    revealCard(card, cardData);

    if (!firstCard) {
        firstCard = card;
        firstCard.cardData = cardData;
        return;
    }

    secondCard = card;
    secondCard.cardData = cardData;
    moves += 1;
    movesElement.textContent = String(moves);
    checkMatch();
}

function revealCard(card, cardData) {
    card.classList.add('flipped');
    card.setAttribute('aria-pressed', 'true');
    card.setAttribute('aria-label', `${cardData.title}${cardData.detail ? `: ${cardData.detail}` : ''}`);

    const face = document.createElement('span');
    face.className = 'card-front';
    const emoji = document.createElement('span');
    emoji.className = 'card-emoji';
    emoji.setAttribute('aria-hidden', 'true');
    emoji.textContent = cardData.emoji;
    const title = document.createElement('span');
    title.className = 'card-title';
    title.textContent = cardData.title;
    face.append(emoji, title);

    if (cardData.detail) {
        const detail = document.createElement('span');
        detail.className = 'card-detail';
        detail.textContent = cardData.detail;
        face.append(detail);
    }

    card.replaceChildren(face);
}

function checkMatch() {
    if (firstCard.cardData.pairId === secondCard.cardData.pairId) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard.disabled = true;
        secondCard.disabled = true;
        score += 100;
        matchedPairs += 1;
        scoreElement.textContent = String(score);
        pairsFoundElement.textContent = String(matchedPairs);
        const progress = (matchedPairs / currentPhase.pairs.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', String(matchedPairs));
        messageElement.textContent = `Boa! ${firstCard.cardData.title} combina com ${secondCard.cardData.title}.`;
        messageElement.className = 'message success';
        resetTurn();

        if (matchedPairs === currentPhase.pairs.length) finishGame();
        return;
    }

    lockBoard = true;
    messageElement.textContent = 'Quase! Essas cartas não formam um par. Tente de novo!';
    messageElement.className = 'message try-again';
    mismatchTimeout = window.setTimeout(() => {
        hideCard(firstCard);
        hideCard(secondCard);
        resetTurn();
        messageElement.textContent = 'Continue procurando os pares da nossa história!';
        messageElement.className = 'message';
    }, 1000);
}

function hideCard(card) {
    card.classList.remove('flipped');
    card.setAttribute('aria-pressed', 'false');
    card.setAttribute('aria-label', 'Carta fechada');
    const back = document.createElement('span');
    back.className = 'card-back';
    back.setAttribute('aria-hidden', 'true');
    back.textContent = '?';
    card.replaceChildren(back);
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function finishGame() {
    window.clearInterval(timerInterval);
    timerInterval = null;
    saveResult();
    victoryMessage.textContent = `Você fez ${score} pontos em ${moves} tentativas e ${formatTime(secondsElapsed)}. Mandou bem!`;
    victoryPanel.hidden = false;
    messageElement.textContent = 'Você encontrou todos os pares e completou sua viagem pela história!';
    messageElement.className = 'message success';
    document.getElementById('play-again').focus();
}

function getLeaderboard() {
    try {
        const savedEntries = JSON.parse(window.localStorage.getItem(leaderboardStorageKey) || '[]');
        if (!Array.isArray(savedEntries)) return [];
        return savedEntries
            .filter((entry) => entry && typeof entry.name === 'string' && Number.isFinite(entry.seconds) && Number.isFinite(entry.moves) && Number.isFinite(entry.playedAt))
            .sort((a, b) => b.playedAt - a.playedAt)
            .slice(0, maxLeaderboardEntries)
            .sort((a, b) => a.seconds - b.seconds || a.moves - b.moves || b.playedAt - a.playedAt);
    } catch {
        return [];
    }
}

function saveResult() {
    if (resultSaved || !playerName) return;
    resultSaved = true;
    const entries = getLeaderboard();
    entries.push({
        name: playerName,
        phase: currentPhase.title,
        seconds: secondsElapsed,
        moves,
        score,
        playedAt: Date.now()
    });

    const latestEntries = entries
        .sort((a, b) => b.playedAt - a.playedAt)
        .slice(0, maxLeaderboardEntries);

    try {
        window.localStorage.setItem(leaderboardStorageKey, JSON.stringify(latestEntries));
    } catch {
        // The current game remains playable if browser storage is unavailable.
    }
    renderLeaderboard(latestEntries.sort((a, b) => a.seconds - b.seconds || a.moves - b.moves || b.playedAt - a.playedAt));
}

function renderLeaderboard(entries = getLeaderboard()) {
    leaderboardList.replaceChildren();

    if (entries.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.className = 'leaderboard-empty';
        emptyMessage.textContent = 'Ainda não há partidas registradas. Seja o primeiro a entrar no ranking!';
        leaderboardList.append(emptyMessage);
        return;
    }

    entries.forEach((entry, index) => {
        const row = document.createElement('li');
        row.className = 'leaderboard-row';

        const rank = document.createElement('span');
        rank.className = 'leaderboard-rank';
        rank.textContent = String(index + 1);

        const details = document.createElement('div');
        const name = document.createElement('div');
        name.className = 'leaderboard-name';
        name.textContent = entry.name;
        const meta = document.createElement('div');
        meta.className = 'leaderboard-meta';
        const phaseName = entry.phase ? ` · Fase ${phases.find((phase) => phase.title === entry.phase)?.id || ''}` : '';
        meta.textContent = `${entry.moves} ${entry.moves === 1 ? 'tentativa' : 'tentativas'} · ${entry.score} pontos${phaseName}`;
        details.append(name, meta);

        const time = document.createElement('span');
        time.className = 'leaderboard-time';
        time.textContent = formatTime(entry.seconds);
        time.setAttribute('aria-label', `Tempo: ${formatTime(entry.seconds)}`);

        row.append(rank, details, time);
        leaderboardList.append(row);
    });
}

function showNameScreen() {
    window.clearInterval(timerInterval);
    window.clearTimeout(mismatchTimeout);
    timerInterval = null;
    mismatchTimeout = null;
    gamePanel.hidden = true;
    phaseScreen.hidden = true;
    nameScreen.hidden = false;
    nameInput.value = playerName;
    nameError.textContent = '';
    nameInput.focus();
}

function showPhaseScreen() {
    window.clearInterval(timerInterval);
    window.clearTimeout(mismatchTimeout);
    timerInterval = null;
    mismatchTimeout = null;
    gamePanel.hidden = true;
    nameScreen.hidden = true;
    phaseScreen.hidden = false;
    document.getElementById('phase-player-name').textContent = playerName;
    renderPhases();
}

renderLeaderboard();