const nameError = document.querySelector('.contactNameError');
const emailError = document.querySelector('.contactEmailError');
const commentError = document.querySelector('.contactTextError');
const verification = document.querySelector('.verifyer');

const submit = document.querySelector('#contactBtn');

submit.onclick = (event) => {
  event.preventDefault();

  const name = document.querySelector('#contactName').value.trim();
  const email = document.querySelector('#contactEmail').value.trim();
  const comment = document.querySelector('#contactField').value.trim();
  let nameValidation = false;
  let emailValidation = false;
  let commentValidation = false;

  if (testLength(name, 5)) {
    nameError.classList.add('hide');
    nameValidation = true;
  } else {
    nameError.classList.remove('hide');
  }
  if (validateEmail(email)) {
    emailError.classList.add('hide');
    emailValidation = true;
  } else {
    emailError.classList.remove('hide');
  }
  if (testLength(comment, 15)) {
    commentError.classList.add('hide');
    commentValidation = true;
  } else {
    commentError.classList.remove('hide');
  }

  if (nameValidation && emailValidation && commentValidation) {
    verification.classList.remove('hide');
  } else {
    verification.classList.add('hide');
  }

  setTimeout(() => {
    verification.classList.add('hide');
  }, 3000);
};

function validateEmail(emailAddress) {
  const emailExpression =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddress);
  return isEmailValid;
}

function testLength(elm, len) {
  if (elm.length >= len) {
    return true;
  } else {
    return false;
  }
}
