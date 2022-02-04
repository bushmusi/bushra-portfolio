function validateEmail(emailContent) {
  const lowerEmail = emailContent.toLowerCase();
  if (emailContent !== lowerEmail) {
    return false;
  }
  return true;
}

const form = document.getElementById('submit-form');
const EMAIL_INVALID = 'Email address should be small letters only. you may use:';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailText = form.elements.email.value;
  const isEmailValid = validateEmail(emailText);
  const msgBox = document.querySelector('.msg-box');
  msgBox.innerHTML = `<small>${EMAIL_INVALID} <i>${emailText.toLowerCase()}<i></small>`;
  if (isEmailValid) {
    form.submit();
    localStorage.clear();
    msgBox.innerHTML = '';
  }
});