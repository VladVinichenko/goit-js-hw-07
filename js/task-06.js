// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputForm = document.querySelector('#validation-input');
const inputLengthValue = inputForm.dataset.length
const inputStyle = { 
validStyle (invalid, valid) {
  if (inputForm.classList.contains('invalid')) {
inputForm.classList.replace('invalid', 'valid');
return
  }
  inputForm.classList.add('valid')
},
invalidStyle (invalid, valid) {
  if (inputForm.classList.contains('valid')) {
inputForm.classList.replace('valid', 'invalid');
return
  }
  inputForm.classList.add('invalid')
}
}


const valueLengthCheck = ((event) => {
  const value = event.currentTarget.value;
if (value.length == inputLengthValue) {
  inputStyle.validStyle();
  return
}
inputStyle.invalidStyle();
})



inputForm.addEventListener('input', valueLengthCheck);
inputForm.addEventListener('focus', valueLengthCheck);
