export function renderStartPage({ gameElement, startClick }) {
    let difficulty = null;

    gameElement.innerHTML = `
        <div class="modal difficulty">
            <div class="difficulty__form form">
                <h2 class="form__title">
                    Выбери сложность
                </h2>
                <div class="form__levels">
                    <div class="level">1</div>
                    <div class="level">2</div>
                    <div class="level">3</div>
                </div>
                <button class="button" id="start-button" disabled>
                    Старт
                </button>
            </div>
        </div>`;

    const startButtonElement = document.querySelector("#start-button");

    [...document.querySelectorAll(".level")].forEach((level) => {
        level.addEventListener("click", () => {
            [...document.querySelectorAll(".level")].map((level) => {
                level.classList.remove("level--selected");
            });

            level.classList.add("level--selected");

            difficulty = level.textContent;
            startButtonElement.disabled = false;
        });
    });

    startButtonElement.addEventListener("click", () => {
        startClick(difficulty);
    });
}