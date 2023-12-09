let eMail = document.querySelector('.form__email')
let pAssword = document.querySelector('.form__pas'); 
let emailValue = eMail.value 
let passwordValue = pAssword.value; 

eMail.addEventListener('input' , function(){
    if(emailValue.length > 5 && emailValue.includes('@') && emailValue.includes('.')){
        eMail.classList.add('active')
        eMail.classList.remove('deactive')
    }
    else if(emailValue.length === 0) {
        eMail.classList.remove('deactive')
        eMail.classList.remove('active')
    }
    else {
        eMail.classList.remove('active')
        eMail.classList.add('deactive')
    }
})

/* ALEX */
    pAssword.addEventListener('input', function() { 
/*   INDEX HERE */
        if (passwordValue.length > 8 && passwordFirstChar === passwordFirstChar.toUpperCase()) { 
            pAssword.classList.remove('deactive'); 
            pAssword.classList.add('active'); 
        } 
        else if(passwordValue.length === 0) {
            pAssword.classList.remove('deactive')
            pAssword.classList.remove('active')
        }
        else { 
            pAssword.classList.remove('active'); 
            pAssword.classList.add('deactive'); 
        } 
    });