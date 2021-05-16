import './sass/build.scss';

const loginPanelBackground = document.querySelector('.login-panel-overlay-bg--js');
const userNameValue = document.querySelector('.login-panel__input--js');
const userName = document.querySelector('.header__user-name--js');
const btnLogin = document.querySelector('.login-panel__btn--js');

const game = {
    userName: userNameValue,
    randomNumbers: [],
};

const randomNumber = () => Math.trunc(Math.random() * 20 + 1);

for (let i = 0; i < 4; i++) {
    game.randomNumbers.push(randomNumber());
}

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
    if (e.keyCode === 13) {
        getUserName();
    }
});

console.log(game.randomNumbers);
