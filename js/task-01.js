// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const valueCategories = document.querySelectorAll(".item");
console.log("В списке", valueCategories.length, "категории.");

const result = [...valueCategories].reduce((acc, elem) => {
  const titleRef = elem.querySelectorAll("h2");
  const sumRef = elem.querySelectorAll("li");

  console.log("Категория:", titleRef[0].textContent);
  console.log("Количество элементов:", sumRef.length);
  acc.push();
  return acc;
}, []);

console.log(...result);
