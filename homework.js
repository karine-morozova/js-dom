// const itemEl = document.querySelectorAll(".item");

// const categories = `'В списке ${itemEl.length} категории.'`;
// console.log(categories);
// const category = (array) => {
//   array.forEach((element) => {
//     const title = element.querySelector("h2");

//     const itemEl = element.querySelectorAll("li");

//     const message = `Категория: ${title.textContent}. Количество элементов: ${itemEl.length}.`;
//     console.log(message);
//     // return message;
//   });
// };
// category(itemEl);

// 2 задача

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsNew = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  return itemEl;
});

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientsNew);

// 3

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

for (let image of images)
  document
    .querySelector("#gallery")
    .insertAdjacentHTML(
      "beforeEnd",
      `<li><img src="${image.url}" alt="${image.alt}"></li>`
    );
