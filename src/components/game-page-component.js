export function renderGamePage({ gameElement }) {
    gameElement.innerHTML = `
        <div class="modal game-page">
            <div class="header">
                <div class="header__timer timer">
                    <div class="timer__names">
                        <p class="timer__name">min</p>
                        <p class="timer__name">sek</p>
                    </div>
                    <p class="timer__digits">00.00</p>
                </div>
                <button class="button" id="restart">Начать заново</button>
            </div>
            <div class="cards">
            
            </div>
        </div>`;
}
