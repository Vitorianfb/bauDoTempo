const phases = [
    {
        id: 1,
        title: 'A chegada dos portugueses',
        period: '1500 e início da colonização',
        description: 'Cabral, a chegada portuguesa e os primeiros contatos entre os povos.',
        image: 'assets/Descobrimento.png',
        color: '#1b9aaa',
        tint: 'color-mix(in srgb, #1b9aaa 12%, #f8f1dd)',
        pairs: [
            { id: 1, first: { image: 'assets/Descobrimento.png' }, second: { image: 'assets/Descobrimento.png' } },
            { id: 2, first: { image: 'assets/Pero-vaz-de-caminha.jpg' }, second: { image: 'assets/Pero-vaz-de-caminha.jpg' } },
            { id: 3, first: { image: 'assets/pedroAlvares.jpg' }, second: { image: 'assets/pedroAlvares.jpg' } },
            { id: 4, first: { image: 'assets/Meirelles-primeiramissa2.jpg' }, second: { image: 'assets/Meirelles-primeiramissa2.jpg' } },
        ]
    },
    {
        id: 2,
        title: 'Brasil Colônia',
        period: 'Séculos XVI ao início do XIX',
        description: 'Engenhos, mineração, bandeirantes e trabalho escravizado.',
        image: 'assets/Aleijadinho.jpg',
        color: '#6f4e37',
        tint: 'color-mix(in srgb, #6f4e37 12%, #f8f1dd)',
        pairs: [
            { id: 1, first: { image: 'assets/Aleijadinho.jpg' }, second: { image: 'assets/Aleijadinho.jpg' } },
            { id: 2, first: { image: 'assets/dandara.jpg' }, second: { image: 'assets/dandara.jpg' } },
            { id: 3, first: { image: 'assets/zumbi.jpg' }, second: { image: 'assets/zumbi.jpg' } },
            { id: 4, first: { image: 'assets/tiradentes.jpg' }, second: { image: 'assets/tiradentes.jpg' } },
        ]
    },
    {
        id: 3,
        title: 'A Independência e o Império',
        period: '1822–1889',
        description: 'Independência, reinados, Dom Pedro II e abolição da escravidão.',
        image: 'assets/pedro2.jpg',
        color: '#d4a017',
        tint: 'color-mix(in srgb, #d4a017 18%, #f8f1dd)',
        pairs: [
            { id: 1, first: { image: 'assets/pedro2.jpg' }, second: { image: 'assets/pedro2.jpg' } },
            { id: 2, first: { image: 'assets/isabel.jpg' }, second: { image: 'assets/isabel.jpg' } },
            { id: 3, first: { image: 'assets/Luiz_Gama.png' }, second: { image: 'assets/Luiz_Gama.png' } },
            { id: 4, first: { image: 'assets/quiteria.jpeg' }, second: { image: 'assets/quiteria.jpeg' } },
        ]
    },
    {
        id: 4,
        title: 'O início da República',
        period: 'A partir de 1889',
        description: 'A República, Marechal Deodoro e as mudanças no governo.',
        image: 'assets/deodoro.jpg',
        color: '#b23a48',
        tint: 'color-mix(in srgb, #b23a48 10%, #f8f1dd)',
        pairs: [
            { id: 1, first: { image: 'assets/deodoro.jpg' }, second: { image: 'assets/deodoro.jpg' } },
            { id: 2, first: { image: 'assets/João.jpg' }, second: { image: 'assets/João.jpg' } },
            { id: 3, first: { image: 'assets/bertha.jpg' }, second: { image: 'assets/bertha.jpg' } },
            { id: 4, first: { image: 'assets/Abaporu.jpg' }, second: { image: 'assets/Abaporu.jpg' } },
        ]
    },
    {
        id: 5,
        title: 'O Brasil se transforma',
        period: 'Século XX',
        description: 'Brasília, cidades, cultura e mudanças no cotidiano brasileiro.',
        image: 'assets/carmen.jpg',
        color: '#1b9aaa',
        tint: 'color-mix(in srgb, #1b9aaa 12%, #f8f1dd)',
        pairs: [
            { id: 1, first: { image: 'assets/carmen.jpg' }, second: { image: 'assets/carmen.jpg' } },
            { id: 2, first: { image: 'assets/cruz.jpg' }, second: { image: 'assets/cruz.jpg' } },
            { id: 3, first: { image: 'assets/getulio.jpg' }, second: { image: 'assets/getulio.jpg' } },
            { id: 4, first: { image: 'assets/juscelino.jpg' }, second: { image: 'assets/juscelino.jpg' } },
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
const matchedImageDialog = document.getElementById('matched-image-dialog');
const matchedImage = document.getElementById('matched-image');
const matchedImageName = document.getElementById('matched-image-name');
const matchedImageDescription = document.getElementById('matched-image-description');
const repeatAudioDescriptionButton = document.getElementById('repeat-audio-description');
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
let currentPhaseIndex = 0;
let resultSaved = false;
let onVictoryAction = null;

const imageNames = {
    'Descobrimento.png': 'Descobrimento do Brasil',
    'Pero-vaz-de-caminha.jpg': 'Pero Vaz de Caminha',
    'pedroAlvares.jpg': 'Pedro Álvares Cabral',
    'Meirelles-primeiramissa2.jpg': 'A Primeira Missa no Brasil',
    'Aleijadinho.jpg': 'Aleijadinho',
    'dandara.jpg': 'Dandara dos Palmares',
    'zumbi.jpg': 'Zumbi dos Palmares',
    'tiradentes.jpg': 'Tiradentes',
    'pedro2.jpg': 'Dom Pedro II',
    'isabel.jpg': 'Princesa Isabel',
    'Luiz_Gama.png': 'Luiz Gama',
    'quiteria.jpeg': 'Maria Quitéria',
    'deodoro.jpg': 'Marechal Deodoro da Fonseca',
    'João.jpg': 'João',
    'bertha.jpg': 'Bertha Lutz',
    'Abaporu.jpg': 'Abaporu',
    'carmen.jpg': 'Carmen Miranda',
    'cruz.jpg': 'Cruz',
    'getulio.jpg': 'Getúlio Vargas',
    'juscelino.jpg': 'Juscelino Kubitschek'
};

const imageDescriptions = {
    'Descobrimento.png': 'A chegada de Pedro Álvares Cabral em 1500 marcou o início do contato entre Portugal e a terra que viria a ser o Brasil.',
    'Pero-vaz-de-caminha.jpg': 'Pero Vaz de Caminha foi o escriba da frota portuguesa e registrou em carta a chegada ao território brasileiro.',
    'pedroAlvares.jpg': 'Pedro Álvares Cabral liderou a expedição que chegou ao Brasil em 1500 e deu início à colonização portuguesa.',
    'Meirelles-primeiramissa2.jpg': 'A Primeira Missa simboliza o início da presença católica e da colonização no território brasileiro.',
    'Aleijadinho.jpg': 'Aleijadinho foi um grande artista barroco, conhecido por suas esculturas e igrejas que marcaram a cultura mineira.',
    'dandara.jpg': 'Dandara dos Palmares foi uma líder quilombola que representou a resistência contra a escravidão e a luta pela liberdade.',
    'zumbi.jpg': 'Zumbi dos Palmares simboliza a resistência dos quilombolas e a luta pela liberdade no Brasil colonial.',
    'tiradentes.jpg': 'Tiradentes foi um líder da resistência contra a coroa portuguesa e virou símbolo da independência brasileira.',
    'pedro2.jpg': 'Dom Pedro II foi o imperador que consolidou o Brasil como nação e promoveu avanços na educação e na cultura.',
    'isabel.jpg': 'Princesa Isabel foi a regente que assinou a Lei Áurea, encerrando a escravidão no país.',
    'Luiz_Gama.png': 'Luiz Gama foi um advogado e intelectual que lutou pelos direitos de negros e pobres em um Brasil desigual.',
    'quiteria.jpeg': 'Maria Quitéria simboliza a participação feminina na independência do Brasil, quando combateu ao lado dos patriotas.',
    'deodoro.jpg': 'Marechal Deodoro da Fonseca foi o primeiro presidente da República do Brasil e marcou o fim do Império.',
    'João.jpg': 'João VI simboliza a chegada da família real portuguesa ao Brasil em 1808 e o início de uma nova etapa política.',
    'bertha.jpg': 'Bertha Lutz foi uma feminista e educadora que lutou pelos direitos das mulheres no Brasil.',
    'Abaporu.jpg': 'Abaporu, de Tarsila do Amaral, representa a modernidade e a identidade brasileira na arte.',
    'carmen.jpg': 'Carmen Miranda foi uma grande artista brasileira que simboliza a música, a cultura e a força da identidade nacional.',
    'cruz.jpg': 'A cruz lembra a presença da religião católica e o papel da fé na formação cultural do Brasil.',
    'getulio.jpg': 'Getúlio Vargas foi um presidente que transformou a política brasileira no século XX com reformas sociais e mudanças institucionais.',
    'juscelino.jpg': 'Juscelino Kubitschek foi presidente que impulsionou o desenvolvimento econômico e foi responsável pela criação de Brasília.'
};

document.getElementById('restart').addEventListener('click', startGame);
document.getElementById('play-again').addEventListener('click', () => {
    if (onVictoryAction) {
        const nextAction = onVictoryAction;
        onVictoryAction = null;
        nextAction();
        return;
    }

    startGame();
});
document.getElementById('change-player').addEventListener('click', showNameScreen);
document.getElementById('change-phase').addEventListener('click', showPhaseScreen);
document.getElementById('phase-back').addEventListener('click', showNameScreen);
matchedImageDialog.addEventListener('click', (event) => {
    if (event.target === matchedImageDialog) matchedImageDialog.close();
});
matchedImageDialog.addEventListener('close', stopAudioDescription);
repeatAudioDescriptionButton.hidden = !('speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined');
repeatAudioDescriptionButton.addEventListener('click', speakAudioDescription);
nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    playerName = nameInput.value.trim();

    if (!playerName) {
        nameError.textContent = 'Digite seu nome para começar.';
        nameInput.focus();
        return;
    }

    nameError.textContent = '';
    currentPhaseIndex = 0;
    currentPhase = phases[currentPhaseIndex];
    nameScreen.hidden = true;
    phaseScreen.hidden = true;
    gamePanel.hidden = false;
    startGame();
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
        const artworkImage = document.createElement('img');
        artworkImage.src = phase.image;
        artworkImage.alt = '';
        artwork.append(artworkImage);

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
            currentPhaseIndex = phase.id - 1;
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

function getImageName(imagePath) {
    const imageFileName = imagePath.split('/').pop();
    return imageNames[imageFileName] || imageFileName;
}

function getImageDescription(imagePath) {
    const imageFileName = imagePath.split('/').pop();
    return imageDescriptions[imageFileName] || 'Figura marcante da história e da cultura brasileira.';
}

function speakAudioDescription() {
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') return;

    const utterance = new SpeechSynthesisUtterance(`${matchedImageName.textContent}. ${matchedImageDescription.textContent}`);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95;

    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.find((voice) => voice.lang.toLowerCase() === 'pt-br')
        || voices.find((voice) => voice.lang.toLowerCase().startsWith('pt-'))
        || null;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

function stopAudioDescription() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function startTimer() {
    if (timerInterval !== null) return;
    timerInterval = window.setInterval(() => {
        secondsElapsed += 1;
        timerElement.textContent = formatTime(secondsElapsed);
    }, 1000);
}

function startGame({ continueTimer = false } = {}) {
    if (!currentPhase) return;
    if (!continueTimer) {
        window.clearInterval(timerInterval);
        timerInterval = null;
        secondsElapsed = 0;
        timerElement.textContent = '00:00';
    }
    window.clearTimeout(mismatchTimeout);
    mismatchTimeout = null;
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    score = 0;
    moves = 0;
    matchedPairs = 0;
    resultSaved = false;
    scoreElement.textContent = '0';
    movesElement.textContent = '0';
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
        { ...pair.first, title: getImageName(pair.first.image), pairId: pair.id },
        { ...pair.second, title: getImageName(pair.second.image), pairId: pair.id }
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

    if (cardData.image) {
        const image = document.createElement('img');
        image.className = 'card-image';
        image.src = cardData.image;
        image.alt = '';
        face.append(image);
    }

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
        const imagePath = firstCard.cardData.image;
        matchedImage.src = imagePath;
        matchedImage.alt = getImageName(imagePath);
        matchedImageName.textContent = getImageName(imagePath);
        matchedImageDescription.textContent = getImageDescription(imagePath);
        matchedImageDialog.showModal();
        speakAudioDescription();
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
    const isLastPhase = currentPhaseIndex >= phases.length - 1;
    const nextPhase = phases[currentPhaseIndex + 1];

    if (isLastPhase) {
        window.clearInterval(timerInterval);
        timerInterval = null;
        saveResult();
    }

    if (!isLastPhase && nextPhase) {
        onVictoryAction = () => {
            currentPhaseIndex += 1;
            currentPhase = phases[currentPhaseIndex];
            document.getElementById('play-again').textContent = 'Jogar novamente';
            phaseScreen.hidden = true;
            gamePanel.hidden = false;
            startGame({ continueTimer: true });
        };

        victoryMessage.textContent = `Fase ${currentPhase.id} concluída! Agora você vai para a fase ${nextPhase.id}: ${nextPhase.title}.`;
        document.getElementById('play-again').textContent = `Ir para a fase ${nextPhase.id}`;
    } else {
        onVictoryAction = () => {
            currentPhaseIndex = 0;
            currentPhase = phases[currentPhaseIndex];
            document.getElementById('play-again').textContent = 'Jogar novamente';
            phaseScreen.hidden = true;
            gamePanel.hidden = false;
            startGame();
        };

        victoryMessage.textContent = `Você completou todas as fases! Fez ${score} pontos em ${moves} tentativas e ${formatTime(secondsElapsed)}.`;
        document.getElementById('play-again').textContent = 'Jogar novamente';
    }

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
        meta.textContent = `${entry.moves} ${entry.moves === 1 ? 'tentativa' : 'tentativas'} · ${entry.score} pontos`;
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
