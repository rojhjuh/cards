import { cards } from '../cards.js';
import { difficultyLevel } from '../index.js';

export function renderGamePage({ gameElement }) {
    let cardsOpened = 0;
    let previousCard;

    cards.sort(() => Math.random() - 0.5);
    cards.length = difficultyLevel * 6;

    const render = () => {
        const cardsHtml = cards
            .map((card) => {
                return `
            <div class="card ${card.isOpened ? '' : 'card--shirt'}">
                ${
                    card.isOpened
                        ? `
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
                    </div>`
                        : ''
                }
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
                ${cardsHtml}
            </div>
        </div>`;

        [...document.querySelectorAll('.card')].forEach((card, index) => {
            card.addEventListener('click', () => {
                if (!cards[index].isOpened) {
                    cards[index].isOpened = true;

                    render();

                    if (cardsOpened === 0) {
                        previousCard = cards[index].rank;
                        cardsOpened++;
                    } else {
                        alert(
                            cards[index].rank === previousCard
                                ? 'Вы выиграли'
                                : 'Вы проиграли'
                        );
                    }
                }
            });
        });
    };

    render();

    setTimeout(() => {
        cards.map((card) => (card.isOpened = false));

        render();
    }, 5000);
}
