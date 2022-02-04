function validateEmail(emailContent){
    console.log(emailContent);
    if(emailContent !== emailContent.toLowerCase())
        return false;
    return true;
}

const form = document.getElementById('submit-form');
const EMAIL_INVALID = "Email address should be small letters only. you may use:"

form.addEventListener('submit',(event) => {
    event.preventDefault();
    let emailText = form.elements['email'].value;
    let isEmailValid = validateEmail(emailText)
    if(isEmailValid){
        form.submit();
    }
    const msgBox = document.querySelector('.msg-box');
    msgBox.innerHTML = `<small>${EMAIL_INVALID} <i>${emailText.toLowerCase()}<i></small>`;
})