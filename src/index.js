'use strict';

import '../assets/fonts/stratosskyengweb-regular.woff2';
import '../css/ui-kit.css';
import '../css/styles.css';
import { renderGamePage } from './components/game-page-component.js';
import { renderStartPage } from './components/start-page-component.js';

const gameElement = document.querySelector('#game');

let page = window.localStorage.getItem('page');
export let difficultyLevel = null;

const renderGame = () => {
    if (!page) {
        renderStartPage({
            gameElement,
            startClick: (newDifficultyLevel) => {
                window.localStorage.setItem('page', 'game-page');

                page = 'game-page';
                difficultyLevel = newDifficultyLevel;

                renderGame();
            },
        });
        return;
    }

    if (page === 'game-page') {
        renderGamePage({ gameElement });

        return;
    }
};

renderGame();
