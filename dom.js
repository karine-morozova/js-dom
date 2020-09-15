// Atttributes как свойства

const text = document.getElementById("text");
text.hidden = true;

const message = document.querySelector("#message");
console.log(message.value);

const link = document.querySelector(".active");
console.log(link.href);

const img = document.querySelector(".image");
console.log(img.src);

// textcontent

const articleText = document.querySelector(".article-text");
console.log(articleText.textContent);

const articleTitle = document.querySelector(".article-title");

articleTitle.textContent = "Welcome to Cyprus";

// classList

const elem = document.querySelector("#paragraph");

console.log(elem.classList);

elem.classList.contains("red");
console.log(elem.classList.contains("red"));
elem.classList.add("blue");
console.log(elem.classList);
elem.classList.remove("blue");
console.log(elem.classList);
elem.classList.toggle("hidden");
console.log(elem.classList);
elem.classList.toggle("hidden");
console.log(elem.classList);
elem.classList.add("blue", "green", "yellow");
console.log(elem.classList);

elem.classList.forEach((cls) => console.log(cls));

//  querySelector

const menu = document.querySelector("#menu");
console.log(menu);

const elementByTeg = document.querySelectorAll("li");
console.log(elementByTeg);
const elementByClass = document.querySelectorAll(".menu-item");
console.log(elementByClass);

// Attributes

const picture = document.querySelector(".image");

console.log(picture.attributes);
console.log(picture.getAttribute("src"));
console.log(picture.hasAttribute("alt"));
picture.setAttribute("alt", "Alan Doe");
console.log(picture.getAttribute("alt"));

// data - атрибуты

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

const dataSaveBtn = saveBtn.dataset.action;
console.log(dataSaveBtn);

const dataCloseBtn = closeBtn.dataset.action;
console.log(dataCloseBtn);
