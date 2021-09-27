// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//  Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controls = document.querySelector("#controls");
const inputNumber = controls.firstElementChild;
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const number = amount;
  console.log(number);
  const renderDivs = [];

  let widthheigth = 20;
  for (let i = 0; i < number; i += 1) {
    widthheigth += 10;

    const crDiv = document.createElement("div");
    crDiv.style.width = `${widthheigth}px`;
    crDiv.style.height = `${widthheigth}px`;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    crDiv.style.background = color;

    renderDivs.push(crDiv);
  }
  return boxes.append(...renderDivs);
};

const destroyBoxes = (() => {
  boxes.innerHTML =""

})


inputNumber.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  renderBtn.addEventListener("click", (x) => {
    createBoxes(value);
  });
});

destroyBtn.addEventListener("click", destroyBoxes);
