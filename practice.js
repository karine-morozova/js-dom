// Создание DOM-узлов

const heating = document.createElement("h1");

console.log(heating);

heating.textContent = "Hello world";

console.log(heating);

const picture = document.createElement("img");

console.log(picture);

picture.setAttribute("src", "https://placeimg.com/640/480/nature");

picture.setAttribute("alt", "nature");

console.log(picture);

// Добавление DOM-узлов

const item = document.createElement("a");

item.href = "#";
item.classList.add("btn");

item.textContent = "item 4";

const nav = document.querySelector(".nav");
nav.appendChild(item);

const heading = document.createElement("h2");

heading.textContent = "Nav heading";

const container = document.querySelector(".center");

container.insertBefore(heading, nav);

const list = document.querySelector(".list");
const item1 = document.createElement("li");

// Методы append, prepend, after, before, replace

item1.textContent = "Poly";
list.append(item1);

const item2 = document.createElement("li");
item2.textContent = "Ajax";
list.prepend(item2);

const begining = document.createElement("h3");
begining.textContent = "Client list";
list.before(begining);

const description = document.createElement("p");
description.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(description);

//  Удаление DOM-узлов

const article = document.querySelector(".article");

const text = article.querySelector(".text");
article.removeChild(text);

const link = article.querySelector(".article-link");
link.remove();

// Клонирование DOM-узлов

const parent = document.querySelector(".parent");
const articleNext = parent.querySelector(".article-next");
const titleNext = parent.querySelector(".title-next");

const clone = articleNext.cloneNode(true);

parent.appendChild(clone);

// innerHTML

const articleNew = document.querySelector(".article-new");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

articleNew.innerHTML += htmlString;

// Можно делать множественные вставки, для этого мы конкатенируем
// всю необходимую разметку в одну строку, после чего присваиваем ее innerHTML родителя.

const listNew = document.querySelector(".list-new");
const tech = ["HTML", "CSS", "JavaScript", "React", "Node"];
const markup = tech.reduce((string, item) => string + `<li>${item}</li>`, "");
console.log(markup);
listNew.innerHTML = markup;

// Метод insertAdjacentHTML()

const insert = document.querySelector("#insert");

insert.insertAdjacentHTML("beforebegin", "<h2>Beforebegin title</h2>");
insert.insertAdjacentHTML("afterbegin", "<li>Afterbegin</li>");
insert.insertAdjacentHTML("beforeend", "<li>Beforeend</li>");
insert.insertAdjacentHTML("afterend", "<p>Afterend text</p>");

// element.addEventListener()

const single = document.querySelector("#single");

const addEvent = () => alert("CLICK");

single.addEventListener("click", addEvent);

const multiple = document.querySelector("#multiple");

const firstEvent = () => alert("FIRST CLICK");
const secondEvent = () => alert("SECOND CLICK");
const thirdEvent = () => alert("THIRD CLICK");

multiple.addEventListener("click", firstEvent);
multiple.addEventListener("click", secondEvent);
multiple.addEventListener("click", thirdEvent);

// element.addEventListener() and this

const user = {
  name: "mango",
  showName() {
    console.log(this);
    console.log(this.name);
  },
};

const jsButton = document.querySelector(".js-button");
user.showName();
jsButton.addEventListener("click", user.showName.bind(user));
