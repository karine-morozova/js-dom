// Event bubbling

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

// const onParentClick = (event) => {
//   alert("Parent click");
// };
// const onChildClick = (event) => {
//   alert("Child click");
// };
// const onInnerChildClick = (event) => {
//   alert("Inner-child click");
// };

// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);

                   // event.target

const onTargetClick = (event) => {
  alert(`Event.target: ${event.target.id}`);
  console.log(`Event.target: ${event.target}`);
};

// parent.addEventListener("click", onTargetClick);

            // Прекращение всплытия event.stopPropagation()

const onParentClick = (event) => {
    alert("При клике в INNER-CHILD, этого alert не будет, до PARENT event не дойдет!");
};
const onChildClick = (event) => {
    alert("При клике в INNER-CHILD, этого alert не будет, до CHILD event не дойдет!");
};
const onInnerChildClick = (event) => {
  event.stopPropagation();
    alert("INNER-CHILD click handler!");
};

parent.addEventListener("click", onParentClick);
child.addEventListener("click", onChildClick);
innerChild.addEventListener("click", onInnerChildClick);


// Event deligation

const nav = document.querySelector(".js-nav");
nav.addEventListener("click", onNavClick);

function onNavClick(event) {
    event.preventDefault()
    const target = event.target;
    console.log("Event target: ", target)
    if (target.nodeName !== "A") return;
    setActiveLink(target);
}
function setActiveLink(nextActiveLink) {
    const currentActiveLink = document.querySelector("a.active");
    if (currentActiveLink) {
        currentActiveLink.classList.remove("active");
    }
    nextActiveLink.classList.add("active");
}

// Throttle

// window.addEventListener("scroll",
// _.throttle(() => {
//     console.log("Scroll event handler invocation every 300ms.")
// }, 300) 
// )

// Debounce

// document.querySelector('input').addEventListener(
//     'input',
//     _.debounce(() => {
//       console.log(
//         'Input event handler invocation after 300ms of inactivity past burst.',
//       );
//     }, 300),
//   );
  
// Intersection Observer

const options = {
    marginRoot: "50px",
    threshold: 0.5,
}

const onEntry = (entries, observer) => {
    entries.forEach(entry => {
        
    });
}
const observer = new IntersectionObserver (onEntry, options);
// Ссылка на элемент, за которым необходимо наблюдать
observer.observe(element);