import './sass/build.scss';
import confettiAnimation from './helpers/confettiAnimation';
import randomNumber from './helpers/randomNumber';
import invalidDigitValue from './helpers/invalidDigitValue';

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
const cardHidden = document.querySelector('.card-hidden--js');
const btnNewGame = document.querySelector('.card__btn--js');
const btnsCheckDigit = document.querySelectorAll('.btn');
const inputsCard = document.querySelectorAll('.card__input');
const cardsDigit = document.querySelectorAll('.card__digit');
const padlocksCard = document.querySelectorAll('.card__padlock');
const messagesCard = document.querySelectorAll('.card__message');

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

for (let i = 0; i < 4; i++) {
    game.randomNumbers.push(randomNumber());
}

const userWin = () => {
    mainTitle.style.fontWeight = '800';
    mainTitle.textContent = 'YOU WIN 🏆🏆🏆';
    secondTitle.style.display = 'none';
    cardHidden.classList.remove('hide');
    confettiAnimation();
};

btnCheckFirstDigit.addEventListener('click', () => {
    invalidDigitValue(parseInt(digitFirstValue.value));

    if (parseInt(digitFirstValue.value) === game.randomNumbers[0]) {
        digitFirst.textContent = parseInt(digitFirstValue.value);
        digitFirst.style.backgroundColor = '#57f58d';
        digitFirstInfo.style.color = '#57f58d';
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

        game.totalScore = 20;
        totalScore.textContent = game.totalScore;

        if (randomNumbersSum === checkNumbersSum) userWin();
    } else if (parseInt(digitFirstValue.value) < game.randomNumbers[0]) {
        digitFirst.textContent = parseInt(digitFirstValue.value);
        digitFirst.style.backgroundColor = '#f37171';
        digitFirstInfo.style.color = '#f37171';
        digitFirstInfo.textContent = 'Too Low 📉';
        padlockFirst.textContent = '🔐';
        btnCheckFirstDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else if (digitFirstValue.value === '') {
        digitFirst.textContent = '?';
        digitFirst.style.backgroundColor = '#f37171';
        digitFirstInfo.textContent = 'Is not a number';
        digitFirstInfo.style.color = '#f37171';
        padlockFirst.textContent = '🔐';
        btnCheckFirstDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else {
        digitFirst.textContent = parseInt(digitFirstValue.value);
        digitFirst.style.backgroundColor = '#f37171';
        digitFirst.style.color = '#23292a';
        digitFirstInfo.textContent = 'Too high 📈';
        padlockFirst.textContent = '🔐';
        btnCheckFirstDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    }
});

btnCheckSecondDigit.addEventListener('click', () => {
    invalidDigitValue(parseInt(digitSecondValue.value));

    if (parseInt(digitSecondValue.value) === game.randomNumbers[1]) {
        digitSecond.textContent = parseInt(digitSecondValue.value);
        digitSecond.style.backgroundColor = '#57f58d';
        digitSecondInfo.style.color = '#57f58d';
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

        game.totalScore = 20;
        totalScore.textContent = game.totalScore;

        if (randomNumbersSum === checkNumbersSum) userWin();
    } else if (parseInt(digitSecondValue.value) < game.randomNumbers[1]) {
        digitSecond.textContent = parseInt(digitSecondValue.value);
        digitSecond.style.backgroundColor = '#f37171';
        digitSecondInfo.style.color = '#f37171';
        digitSecondInfo.textContent = 'Too Low 📉';
        padlockSecond.textContent = '🔐';
        btnCheckSecondDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else if (digitSecondValue.value === '') {
        digitSecond.textContent = '?';
        digitSecond.style.backgroundColor = '#f37171';
        digitSecondInfo.textContent = 'Is not a number';
        digitSecondInfo.style.color = '#f37171';
        padlockSecond.textContent = '🔐';
        btnCheckSecondDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else {
        digitSecond.textContent = parseInt(digitSecondValue.value);
        digitSecond.style.backgroundColor = '#f37171';
        digitSecond.style.color = '#23292a';
        digitSecondInfo.style.color = '#f37171';
        digitSecondInfo.textContent = 'Too high 📈';
        padlockSecond.textContent = '🔐';
        btnCheckSecondDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    }
});

btnCheckThirdDigit.addEventListener('click', () => {
    invalidDigitValue(parseInt(digitThirdValue.value));

    if (parseInt(digitThirdValue.value) === game.randomNumbers[2]) {
        digitThird.textContent = parseInt(digitThirdValue.value);
        digitThird.style.backgroundColor = '#57f58d';
        digitThirdInfo.style.color = '#57f58d';
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

        game.totalScore = 20;
        totalScore.textContent = game.totalScore;

        if (randomNumbersSum === checkNumbersSum) userWin();
    } else if (parseInt(digitThirdValue.value) < game.randomNumbers[2]) {
        digitThird.textContent = parseInt(digitThirdValue.value);
        digitThird.style.backgroundColor = '#f37171';
        digitThirdInfo.textContent = 'Too Low 📉';
        digitThirdInfo.style.color = '#f37171';
        padlockThird.textContent = '🔐';
        btnCheckThirdDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else if (digitThirdValue.value === '') {
        digitThird.textContent = '?';
        digitThird.style.backgroundColor = '#f37171';
        digitThirdInfo.textContent = 'Is not a number';
        digitThirdInfo.style.color = '#f37171';
        padlockThird.textContent = '🔐';
        btnCheckThirdDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else {
        digitThird.textContent = parseInt(digitThirdValue.value);
        digitThird.style.backgroundColor = '#f37171';
        digitThirdInfo.style.color = '#f37171';
        digitThird.style.color = '#23292a';
        digitThirdInfo.textContent = 'Too high 📈';
        padlockThird.textContent = '🔐';
        btnCheckThirdDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    }
});

btnCheckFourthDigit.addEventListener('click', () => {
    invalidDigitValue(parseInt(digitFourthValue.value));

    if (parseInt(digitFourthValue.value) === game.randomNumbers[3]) {
        digitFourth.textContent = parseInt(digitFourthValue.value);
        digitFourth.style.backgroundColor = '#57f58d';
        digitFourthInfo.textContent = 'Correct number 🎉';
        digitFourthInfo.style.color = '#57f58d';
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

        game.totalScore = 20;
        totalScore.textContent = game.totalScore;

        if (randomNumbersSum === checkNumbersSum) userWin();
    } else if (parseInt(digitFourthValue.value) < game.randomNumbers[3]) {
        digitFourth.textContent = parseInt(digitFourthValue.value);
        digitFourth.style.backgroundColor = '#f37171';
        digitFourthInfo.style.color = '#f37171';
        digitFourthInfo.textContent = 'Too Low 📉';
        padlockFourth.textContent = '🔐';
        btnCheckFourthDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else if (digitFourthValue.value === '') {
        digitFourth.textContent = '?';
        digitFourth.style.backgroundColor = '#f37171';
        digitFourthInfo.textContent = 'Is not a number';
        digitFourthInfo.style.color = '#f37171';
        padlockFourth.textContent = '🔐';
        btnCheckFourthDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    } else {
        digitFourth.textContent = parseInt(digitFourthValue.value);
        digitFourth.style.backgroundColor = '#f37171';
        digitFourth.style.color = '#23292a';
        digitFourthInfo.style.color = '#f37171';
        digitFourthInfo.textContent = 'Too high 📈';
        padlockFourth.textContent = '🔐';
        btnCheckFourthDigit.style.backgroundColor = '#62bcee';
        game.totalScore--;
        totalScore.textContent = game.totalScore;
    }
});

btnNewGame.addEventListener('click', () => {
    game.totalScore = 20;
    totalScore.textContent = game.totalScore;
    game.highScore = 0;
    highScore.textContent = game.highScore;
    cardHidden.classList.add('hide');

    for (let i = 0; i < btnsCheckDigit.length; i++) {
        btnsCheckDigit[i].style.backgroundColor = '#62bcee';
        btnsCheckDigit[i].removeAttribute('disabled');
        inputsCard[i].removeAttribute('disabled');
        inputsCard[i].value = 1;
        cardsDigit[i].textContent = '?';
        cardsDigit[i].style.backgroundColor = '#d7d7d7';
        mainTitle.style.fontWeight = '600';
        mainTitle.textContent = 'Guess 4-digit code';
        secondTitle.style.display = 'block';
        padlocksCard[i].textContent = '🔐';
        messagesCard[i].textContent = '';
        game.randomNumbers = [];

        for (let i = 0; i < 4; i++) {
            game.randomNumbers.push(randomNumber());
        }
    }
});
