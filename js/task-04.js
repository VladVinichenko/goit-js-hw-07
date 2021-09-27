// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
    console.log("+ 1 =", this.counterValue);
  },

  decrement() {
    this.counterValue -= 1;
    console.log("- 1 =", this.counterValue);
  },
};

const counterParent = document.querySelector("#counter");
const decrementBtn = counterParent.firstElementChild;
const incrementBtn = counterParent.lastElementChild;
const valueRef = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counter.increment();
  valueRef.textContent = counter.counterValue;
});

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  valueRef.textContent = counter.counterValue;
});
