const coffe = JSON.parse(localStorage.getItem("coffee"));
let id = coffe.id;
function fetchData(id) {
  fetch(`https://api.sampleapis.com/coffee/hot/${id.toString()}`)
    .then((response) => response.json())
    .then((res) => {
      changeCard(res);
    });
}
function changeCard(res) {
  const img = document.querySelector("img");
  img.setAttribute("src", res.image);

  const h1 = document.querySelector("h1");
  h1.textContent = res.title;

  const desc = document.querySelector("p");
  desc.textContent = res.description;

  const ul = document.querySelector("ul");
  const lengthNode = ul.childElementCount;
  console.log(lengthNode)
  for (let index = 0; index < lengthNode; index++) {
    ul.removeChild(ul.firstElementChild);
  }
  res.ingredients.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r;
    ul.appendChild(li);
  });
  localStorage.setItem("coffee", JSON.stringify(res));
}
function card() {
  const main = document.querySelector(".content");
  const figure = document.createElement("figure");
  const figcaption = document.createElement("figcaption");
  const img = document.createElement("img");
  img.src = coffe.image;
  const h1 = document.createElement("h1");
  h1.textContent = coffe.title;
  const desc = document.createElement("p");
  desc.textContent = coffe.description;
  const ul = document.createElement("ul");
  coffe.ingredients.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r;
    ul.appendChild(li);
  });
  figcaption.appendChild(h1);
  figcaption.appendChild(desc);
  figcaption.appendChild(ul);
  figure.appendChild(img);
  figure.appendChild(figcaption);
  main.appendChild(figure);
}
card();

const next = document.querySelector(".next");
next.addEventListener("click", () => {
  if (id >= 20) {
    id = 20;
  } else{
    id++;
  }
  fetchData(id.toString());
});
const prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
  if(id <= 1){
    id = 1;
  } else{
    id--;
  }
  fetchData(id.toString());
});

const path = 'https://image.tmdb.org/t/p/w500/';