// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeContol = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
fontSizeContol.setAttribute("value", 16);

fontSizeContol.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  console.log(value);
  textRef.style.fontSize = `${value}px`;
});
