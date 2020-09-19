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
const galleryEl = document.querySelector("#gallery");

images.forEach((image) => {
  galleryEl.insertAdjacentHTML(
    "beforeEnd",
    `<li><img src="${image.url}" alt="${image.alt}"></li>`
  );
});

// 4

const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

incrementBtnEl.addEventListener("click", onIncrementClick);
decrementBtnEl.addEventListener("click", onDecrementClick);

function onIncrementClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
onIncrementClick();

function onDecrementClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

// 5

const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onNameOutput);
function onNameOutput(event) {
  nameOutputEl.textContent = event.currentTarget.value;
}

// 6

const validInputEl = document.querySelector("#validation-input");

validInputEl.addEventListener("blur", onInputValueCheck);

function onInputValueCheck(event) {
  if (
    event.currentTarget.getAttribute("data-length") >
    event.currentTarget.value.length
  ) {
    validInputEl.classList.add("invalid");
    validInputEl.classList.remove("valid");
  } else {
    validInputEl.classList.add("valid");
    validInputEl.classList.remove("invalid");
  }
}

// 7

const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", onInputFontSize);

function onInputFontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
