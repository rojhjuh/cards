import { cards } from '../cards.js';

export function renderGamePage({ gameElement }) {
    let isOpenedCards = true;

    const notOpenedCardsHtml = cards
        .map(() => {
            return `
            <div class="card card--shirt"></div>`;
        })
        .join('');

    const openedCardsHtml = cards
        .map((card) => {
            return `
            <div class="card">
                <div class="card__face face">
                    <div class="face__up">
                        <span class="face__rank">${card.rank}</span>
                        <img src="${card.suitCorner}">
                    </div>
                    <img src="${card.suitCenter}">
                    <div class="face__down">
                        <span class="face__rank">${card.rank}</span>
                        <img src="${card.suitCorner}">
                    </div>
                </div>
            </div>`;
        })
        .join('');

    gameElement.innerHTML = `
        <div class="modal game-page">
            <div class="header">
                <div class="header__timer timer">
                    <div class="timer__names">
                        <span class="timer__name">min</span>
                        <span class="timer__name">sek</span>
                    </div>
                    <p class="timer__digits">00.00</p>
                </div>
                <button class="button" id="restart">Начать заново</button>
            </div>
            <div class="cards">
                ${isOpenedCards ? openedCardsHtml : notOpenedCardsHtml}
            </div>
        </div>`;
}
