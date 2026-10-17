const pairs = [
    { id: 1, first: { title: 'Dom Pedro I', emoji: '👑' }, second: { title: 'Independência', detail: 'Proclamada em 1822.', emoji: '📜' } },
    { id: 2, first: { title: 'Tiradentes', emoji: '🧔🏽' }, second: { title: 'Inconfidência Mineira', detail: 'Movimento contra o domínio português.', emoji: '⛰️' } },
    { id: 3, first: { title: 'Princesa Isabel', emoji: '👸🏻' }, second: { title: 'Lei Áurea', detail: 'Assinada em 1888.', emoji: '🖋️' } },
    { id: 4, first: { title: 'Getúlio Vargas', emoji: '🎩' }, second: { title: 'Era Vargas', detail: 'Período de 1930 a 1945.', emoji: '🏛️' } },
    { id: 5, first: { title: 'Marechal Deodoro', emoji: '🪖' }, second: { title: 'Proclamação da República', detail: 'Aconteceu em 15 de novembro de 1889.', emoji: '🇧🇷' } },
    { id: 6, first: { title: 'D. João VI', emoji: '👑' }, second: { title: 'Chegada da corte', detail: 'A família real chegou ao Brasil em 1808.', emoji: '⛵' } }
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

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;
let moves = 0;
let matchedPairs = 0;
let secondsElapsed = 0;
let timerInterval = null;
let mismatchTimeout = null;

document.getElementById('pairs-total').textContent = pairs.length;
progressBar.setAttribute('aria-valuemax', String(pairs.length));
document.getElementById('restart').addEventListener('click', startGame);
document.getElementById('play-again').addEventListener('click', startGame);

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
    scoreElement.textContent = '0';
    movesElement.textContent = '0';
    timerElement.textContent = '00:00';
    pairsFoundElement.textContent = '0';
    progressFill.style.width = '0%';
    progressBar.setAttribute('aria-valuenow', '0');
    messageElement.textContent = 'Escolha uma carta para começar a aventura!';
    messageElement.className = 'message';
    victoryPanel.hidden = true;
    renderBoard();
}

function renderBoard() {
    board.replaceChildren();
    const cards = shuffle(pairs.flatMap((pair) => [
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
        const progress = (matchedPairs / pairs.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', String(matchedPairs));
        messageElement.textContent = `Boa! ${firstCard.cardData.title} combina com ${secondCard.cardData.title}.`;
        messageElement.className = 'message success';
        resetTurn();

        if (matchedPairs === pairs.length) finishGame();
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
    victoryMessage.textContent = `Você fez ${score} pontos em ${moves} tentativas e ${formatTime(secondsElapsed)}. Mandou bem!`;
    victoryPanel.hidden = false;
    messageElement.textContent = 'Você encontrou todos os pares e completou sua viagem pela história!';
    messageElement.className = 'message success';
    document.getElementById('play-again').focus();
}

startGame();