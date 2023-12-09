// cvv
let cvvButton = document.querySelector('.form__box-cvv')
let cvvCard = document.querySelector('.card__svv')
let headerButton = document.querySelector('.header__return')
cvvButton.addEventListener('click', (event) => {
    event.preventDefault();
    let randomCVV = Math.floor(Math.random() * 900) + 100

    cvvCard.textContent = randomCVV
})


// name
let cardName = document.querySelector('.card__owner')

let nameInput = document.querySelector('.form__box-name')

nameInput.addEventListener('input', function(){
    let newTextName = nameInput.value;

    cardName.textContent = newTextName;
})

// card data
let cardDATA = document.querySelector('.card__data');
let inputDATA = document.querySelector('.form__box-date');
inputDATA.addEventListener('change', function() {
    let newInputDate = inputDATA.value;
    let inputThreeNumbers = newInputDate.split('-');
    if (inputThreeNumbers.length === 3) {
        let yearDATA = inputThreeNumbers[0];
        let monthDATA = inputThreeNumbers[1];
        let dayDATA = inputThreeNumbers[2];
        cardDATA.textContent = `${monthDATA}  /  ${yearDATA}`
    }
})

// card numbers
let cardNumber = document.querySelector('.card__number');

let cardBTN = document.querySelector('.form__box-button');

cardBTN.addEventListener('click', (event) => {
    event.preventDefault();
});

cardBTN.addEventListener('click', function() {
    let randomNumberone = Math.floor(Math.random() * 9000) + 1000;
    let randomNumbertwo = Math.floor(Math.random() * 9000) + 1000;
    let randomNumberthree = Math.floor(Math.random() * 9000) + 1000;
    let randomNumberfour = Math.floor(Math.random() * 9000) + 1000;
    cardNumber.textContent = randomNumberone + ' ' + randomNumbertwo + ' ' + randomNumberthree + ' ' + randomNumberfour;
})

/*let urlParametrs = new URLSearchParams(window.location.search)

let nameResult = urlCharacters.get('newName')

document.querySelector('.') */

let modal = document.querySelector('.modal')
let buttonForm = document.querySelector('.form__box-save')
buttonForm.addEventListener('click', function(){
    if(modal.className === 'modal'){
        modal.classList.add('active')
    }
    else{
        modal.classList.remove('active')
    }
})



let nameValue = sessionStorage.getItem('nameValue')
document.querySelector('.header__nickname').innerHTML = nameValue

window.addEventListener('scroll', function(){
    let intBlock = document.querySelector('.form')

    if(scrollY > 100){
        intBlock.classList.add('block')
    }
    else{
        intBlock.classList.remove('block')
    }
})
headerButton.addEventListener('click', function(){
    window.location.href = './index.html';
})