let regButton = document.querySelector('.form__btn');

regButton.addEventListener('click',  function() {
    let eMail = document.querySelector('.form__email')
    let regCheckbox = document.querySelector('.form__input');
    let pAssword = document.querySelector('.form__pas'); 
    let myName = document.querySelector('.form__nick')
    let myTel = document.querySelector('.form__tel')

    let emailValue = eMail.value 
    let passwordValue = pAssword.value; 
    let telValue = myTel.value;
    let nameValue = myName.value;

    if(emailValue.length < 5 && !emailValue.includes('@') && !emailValue.includes('.')){
        let emailOkno = document.querySelector('.email__modal')
        emailOkno.classList.add('emailmodal')
        setTimeout(function(){
            emailOkno.classList.remove('emailmodal')
        },3000)
        return;
    }
    else if(passwordValue.length < 7){
        let modalOkno = document.querySelector('.form__modal')
        modalOkno.classList.add('newmodal')
        setTimeout(function(){
            modalOkno.classList.remove('newmodal')
        },3000)
        return;
    }
    else if(nameValue.length === 0){
        let nickOkno = document.querySelector('.modal__nick')
        nickOkno.classList.add('nickmodal')
        setTimeout(function(){
            nickOkno.classList.remove('nickmodal')
        },3000)
        return;
    }
    else if(telValue.length !== 13 || !telValue.includes('+')){
        let telOkno = document.querySelector('.modal__tel')
        telOkno.classList.add('telmodal')
        setTimeout(function(){
            telOkno.classList.remove('telmodal')
        },3000)
        return;
    }
    else if(!regCheckbox.checked){
        let acceptOkno = document.querySelector('.modal__accept')
        acceptOkno.classList.add('acceptmodal')
        setTimeout(function(){
            acceptOkno.classList.remove('acceptmodal')
        },3000)
        return;
    }
    else{
        sessionStorage.setItem('nameValue', nameValue)
        window.location.href = './bank.html'
    }
})

window.addEventListener('scroll', function(){
    let intLogin = document.querySelector('.form')

    if(scrollY > 20){
        intLogin.classList.add('scrul')
    }
    else{
        intLogin.classList.remove('scrul')
    }
})