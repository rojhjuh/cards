"use strict";

import { renderStartPage } from "./components/start-page-component.js";

const gameElement = document.querySelector("#game");
const GAME_PAGE = "game-page";

let page = localStorage.getItem('page');
let difficultyLevel = null;

const renderGame = () => {
    if (!page) {
        renderStartPage({
            gameElement,
            startClick: (newDifficultyLevel) => {
                // Страницу пока не сохраняю в local storeage
                page = GAME_PAGE;
                difficultyLevel = newDifficultyLevel;

                renderGame();
            },
        });
        return;
    }

    if (page === GAME_PAGE) {
        // Заглушка
        const START_GAME = "Игра началась.";

        let GAME_LEVEL;

        if (difficultyLevel === "1") {
            GAME_LEVEL = "Сложность: легкая.";
        } else if (difficultyLevel === "2") {
            GAME_LEVEL = "Сложность: средняя.";
        } else if (difficultyLevel === "3") {
            GAME_LEVEL = "Сложность: сложная.";
        }

        gameElement.innerHTML = `
            <h1>${START_GAME} ${GAME_LEVEL}</h1>`;

        return;
    }
};

renderGame();