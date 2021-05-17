import './sass/build.scss';

const loginPanelBackground = document.querySelector('.login-panel-overlay-bg--js');
const userNameValue = document.querySelector('.login-panel__input--js');
const userName = document.querySelector('.header__user-name--js');
const btnLogin = document.querySelector('.login-panel__btn--js');
const digitFirst = document.querySelector('.card__digit-first--js');
const digitSecond = document.querySelector('.card__digit-second--js');
const digitThird = document.querySelector('.card__digit-third--js');
const digitFourth = document.querySelector('.card__digit-fourth--js');
const digitFirstValue = document.querySelector('.card__input-first--js');
const digitSecondValue = document.querySelector('.card__input-second--js');
const digitThirdValue = document.querySelector('.card__input-third--js');
const digitFourthValue = document.querySelector('.card__input-fourth--js');
const btnCheckFirstDigit = document.querySelector('.btn-first--js');
const btnCheckSecondDigit = document.querySelector('.btn-second--js');
const btnCheckThirdDigit = document.querySelector('.btn-third--js');
const btnCheckFourthDigit = document.querySelector('.btn-fourth--js');
const digitFirstInfo = document.querySelector('.card__message-first-digit--js');
const digitSecondInfo = document.querySelector('.card__message-second-digit--js');
const digitThirdInfo = document.querySelector('.card__message-third-digit--js');
const digitFourthInfo = document.querySelector('.card__message-fourth-digit--js');
const padlockFirst = document.querySelector('.card__padlock-first--js');
const padlockSecond = document.querySelector('.card__padlock-second--js');
const padlockThird = document.querySelector('.card__padlock-third--js');
const padlockFourth = document.querySelector('.card__padlock-fourth--js');
const mainTitle = document.querySelector('.main-title--js');
const secondTitle = document.querySelector('.main-title--description--js');
const totalScore = document.querySelector('.score__total--js');
const highScore = document.querySelector('.score__highscore--js');

const game = {
    userName: userNameValue,
    randomNumbers: [],
    checkNumbers: [],
    totalScore: 20,
    highScore: 0,
};

const getUserName = () => {
    loginPanelBackground.style.display = 'none';
    if (!game.userName.value) {
        userName.textContent = `Welcome, unknown`;
    } else {
        userName.textContent = `Welcome, ${game.userName.value}`;
    }
};

btnLogin.addEventListener('click', getUserName);

userNameValue.addEventListener('keyup', e => {
    if (e.keyCode === 13 || e.keyCode === 27) {
        getUserName();
    }
});

const randomNumber = () => Math.trunc(Math.random() * 20 + 1);

for (let i = 0; i < 4; i++) {
    game.randomNumbers.push(randomNumber());
}

btnCheckFirstDigit.addEventListener('click', function () {
    if (parseInt(digitFirstValue.value) === game.randomNumbers[0]) {
        digitFirst.textContent = parseInt(digitFirstValue.value);
        digitFirst.style.backgroundColor = '#57f58d';
        digitFirstInfo.textContent = 'Correct number 🎉';
        padlockFirst.textContent = '🔓';
        btnCheckFirstDigit.style.backgroundColor = '#d7d7d7';
        digitFirstValue.setAttribute('disabled', true);
        btnCheckFirstDigit.setAttribute('disabled', true);
        game.checkNumbers[0] = parseInt(digitFirstValue.value);
        const randomNumbersSum = game.randomNumbers.reduce((acc, digit) => acc + digit);
        const checkNumbersSum = game.checkNumbers.reduce((acc, digit) => acc + digit);

        if (game.totalScore > game.highScore) {
            game.highScore = game.totalScore;
            highScore.textContent = game.highScore;
        }
        totalScore.textContent = game.totalScore;

        if (randomNumbersSum === checkNumbersSum) {
            mainTitle.style.fontWeight = '800';
            mainTitle.textContent = 'YOU WIN 🏆🏆🏆';
            secondTitle.style.display = 'none';
        }
    } else if (parseInt(digitFirstValue.value) < game.randomNumbers[0]) {
        digitFirst.textContent = parseInt(digitFirstValue.value);
        digitFirst.style.backgroundColor = '#f37171';
        digitFirstInfo.textContent = 'Too Low 📉';
        padlockFirst.textContent = '🔐';
        btnCheckFirstDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else {
        digitFirst.textContent = parseInt(digitFirstValue.value);
        digitFirst.style.backgroundColor = '#f37171';
        digitFirstInfo.textContent = 'Too high 📈';
        padlockFirst.textContent = '🔐';
        btnCheckFirstDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    }
});

btnCheckSecondDigit.addEventListener('click', () => {
    if (parseInt(digitSecondValue.value) === game.randomNumbers[1]) {
        digitSecond.textContent = parseInt(digitSecondValue.value);
        digitSecond.style.backgroundColor = '#57f58d';
        digitSecondInfo.textContent = 'Correct number 🎉';
        padlockSecond.textContent = '🔓';
        btnCheckSecondDigit.style.backgroundColor = '#d7d7d7';
        digitSecondValue.setAttribute('disabled', true);
        btnCheckSecondDigit.setAttribute('disabled', true);
        game.checkNumbers[1] = parseInt(digitSecondValue.value);
        const randomNumbersSum = game.randomNumbers.reduce((acc, digit) => acc + digit);
        const checkNumbersSum = game.checkNumbers.reduce((acc, digit) => acc + digit);
        if (game.totalScore > game.highScore) {
            game.highScore = game.totalScore;
            highScore.textContent = game.highScore;
        }
        totalScore.textContent = game.totalScore;

        if (randomNumbersSum === checkNumbersSum) {
            mainTitle.style.fontWeight = '800';
            mainTitle.textContent = 'YOU WIN 🏆🏆🏆';
            secondTitle.style.display = 'none';
        }
    } else if (parseInt(digitSecondValue.value) < game.randomNumbers[1]) {
        digitSecond.textContent = parseInt(digitSecondValue.value);
        digitSecond.style.backgroundColor = '#f37171';
        digitSecondInfo.textContent = 'Too Low 📉';
        padlockSecond.textContent = '🔐';
        btnCheckSecondDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else {
        digitSecond.textContent = parseInt(digitSecondValue.value);
        digitSecond.style.backgroundColor = '#f37171';
        digitSecondInfo.textContent = 'Too high 📈';
        padlockSecond.textContent = '🔐';
        btnCheckSecondDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    }
});

btnCheckThirdDigit.addEventListener('click', () => {
    if (parseInt(digitThirdValue.value) === game.randomNumbers[2]) {
        digitThird.textContent = parseInt(digitThirdValue.value);
        digitThird.style.backgroundColor = '#57f58d';
        digitThirdInfo.textContent = 'Correct number 🎉';
        padlockThird.textContent = '🔓';
        btnCheckThirdDigit.style.backgroundColor = '#d7d7d7';
        digitThirdValue.setAttribute('disabled', true);
        btnCheckThirdDigit.setAttribute('disabled', true);
        game.checkNumbers[2] = parseInt(digitThirdValue.value);
        const randomNumbersSum = game.randomNumbers.reduce((acc, digit) => acc + digit);
        const checkNumbersSum = game.checkNumbers.reduce((acc, digit) => acc + digit);
        if (game.totalScore > game.highScore) {
            game.highScore = game.totalScore;
            highScore.textContent = game.highScore;
        }
        totalScore.textContent = game.totalScore;

        if (randomNumbersSum === checkNumbersSum) {
            mainTitle.style.fontWeight = '800';
            mainTitle.textContent = 'YOU WIN 🏆🏆🏆';
            secondTitle.style.display = 'none';
        }
    } else if (parseInt(digitThirdValue.value) < game.randomNumbers[2]) {
        digitThird.textContent = parseInt(digitThirdValue.value);
        digitThird.style.backgroundColor = '#f37171';
        digitThirdInfo.textContent = 'Too Low 📉';
        padlockThird.textContent = '🔐';
        btnCheckThirdDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else {
        digitThird.textContent = parseInt(digitThirdValue.value);
        digitThird.style.backgroundColor = '#f37171';
        digitThirdInfo.textContent = 'Too high 📈';
        padlockThird.textContent = '🔐';
        btnCheckThirdDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    }
});

btnCheckFourthDigit.addEventListener('click', () => {
    if (parseInt(digitFourthValue.value) === game.randomNumbers[3]) {
        digitFourth.textContent = parseInt(digitFourthValue.value);
        digitFourth.style.backgroundColor = '#57f58d';
        digitFourthInfo.textContent = 'Correct number 🎉';
        padlockFourth.textContent = '🔓';
        btnCheckFourthDigit.style.backgroundColor = '#d7d7d7';
        digitFourthValue.setAttribute('disabled', true);
        btnCheckFourthDigit.setAttribute('disabled', true);
        game.checkNumbers[3] = parseInt(digitFourthValue.value);
        const randomNumbersSum = game.randomNumbers.reduce((acc, digit) => acc + digit);
        const checkNumbersSum = game.checkNumbers.reduce((acc, digit) => acc + digit);
        if (game.totalScore > game.highScore) {
            game.highScore = game.totalScore;
            highScore.textContent = game.highScore;
        }
        totalScore.textContent = game.totalScore;

        if (randomNumbersSum === checkNumbersSum) {
            mainTitle.style.fontWeight = '800';
            mainTitle.textContent = 'YOU WIN 🏆🏆🏆';
            secondTitle.style.display = 'none';
        }
    } else if (parseInt(digitFourthValue.value) < game.randomNumbers[3]) {
        digitFourth.textContent = parseInt(digitFourthValue.value);
        digitFourth.style.backgroundColor = '#f37171';
        digitFourthInfo.textContent = 'Too Low 📉';
        padlockFourth.textContent = '🔐';
        btnCheckFourthDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else {
        digitFourth.textContent = parseInt(digitFourthValue.value);
        digitFourth.style.backgroundColor = '#f37171';
        digitFourthInfo.textContent = 'Too high 📈';
        padlockFourth.textContent = '🔐';
        btnCheckFourthDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    }
});
