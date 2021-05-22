const errorMessage = document.querySelector('.error-message--js');

const invalidDigitValue = digit => {
    if (digit <= 0 || digit >= 21) {
        errorMessage.classList.remove('hide');
        console.log('The number should be between 1 and 20!!!');
    } else {
        errorMessage.classList.add('hide');
        console.log('The number is correct!!!');
    }
};

export default invalidDigitValue;
