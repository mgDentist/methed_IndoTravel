import { timerMainPage } from './js/timer.js';
import './js/accordion.js';
import './js/burger.js';

document.addEventListener('DOMContentLoaded', () => {
    timerMainPage('.hero__timer.timer', '.hero__text', '2024-06-12T15:35:00');
});