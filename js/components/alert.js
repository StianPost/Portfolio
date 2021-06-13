function showAlertTouser(
  message = 'This is default message',
  classType = 'information'
) {
  return `<div class="${classType}">${message}</div>`;
}

// document.querySelector('.alert').innerHTML = showAlertTouser(
//     'An error occured',
//     'danger'
//   );
