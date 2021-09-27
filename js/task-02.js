// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li
// за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingradientsList = document.querySelector("#ingredients");
const ingredientsRef = ingredients.map((elem) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = `${elem}`;
  return itemRef;
});

console.log(...ingredientsRef);
ingradientsList.append(...ingredientsRef);
