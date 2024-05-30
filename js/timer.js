export const timerMainPage = () => {
    const heroTimer = document.querySelector('.hero__timer.timer');
    const heroText = document.querySelector('.hero__text');
    const deadline = heroTimer.getAttribute('data-timer-deadline');

    const timerDaysCount = heroTimer.querySelector('.timer__count_days');
    const timerDaysUnits = heroTimer.querySelector('.timer__units_days');
    const timerHoursCount = heroTimer.querySelector('.timer__count_hours');
    const timerHoursUnits = heroTimer.querySelector('.timer__units_hours');
    const timerMinutesCount = heroTimer.querySelector('.timer__count_minutes');
    const timerMinutesUnits = heroTimer.querySelector('.timer__units_minutes');
    const timerSecondsCount = heroTimer.querySelector('.timer__count_seconds');
    const timerSecondsUnits = heroTimer.querySelector('.timer__units_seconds');

    const timeStop = new Date(deadline).getTime();

    const padZero = (num) => num < 10 ? `0${num}` : num;

    const getDeclension = (num, singular, few, many) => {
        if (num % 100 > 10 && num % 100 < 20) {
            return many;
        }
        switch (num % 10) {
            case 1:
                return singular;
            case 2:
            case 3:
            case 4:
                return few;
            default:
                return many;
        }
    };

    const reloadTimer = () => {
        const timeNow = Date.now();
        const timeRemaining = timeStop - timeNow;

        if (timeRemaining <= 0) {
            heroTimer.remove();
            heroText.remove();
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        timerDaysCount.textContent = days;
        timerDaysUnits.textContent = getDeclension(days, 'день', 'дня', 'дней');
        timerHoursCount.textContent = padZero(hours);
        timerHoursUnits.textContent = getDeclension(hours, 'час', 'часа', 'часов');
        timerMinutesCount.textContent = padZero(minutes);
        timerMinutesUnits.textContent = getDeclension(minutes, 'минута', 'минуты', 'минут');
        timerSecondsCount.textContent = padZero(seconds);
        timerSecondsUnits.textContent = getDeclension(seconds, 'секунда', 'секунды', 'секунд');
    };

    const timerInterval = setInterval(() => {
        reloadTimer();
    }, 1000);
};