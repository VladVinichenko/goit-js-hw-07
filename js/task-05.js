// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
const logName = (event) => {
  const value = event.currentTarget.value;
  console.log(value);
  if (value == "") {
    nameOutput.textContent = "незнакомец";
    return;
  }
  nameOutput.textContent = value;
};
nameInput.addEventListener("input", logName);
