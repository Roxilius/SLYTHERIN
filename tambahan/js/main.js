const url = "https://api.sampleapis.com/coffee/hot";
fetch(url)
  .then((response) => response.json())
  .then((res) => {
    res.forEach((res) => {
        card(res);
    });
});

function card(res) {
    const main = document.querySelector('main');
    const a = document.createElement('a');
    a.setAttribute('href', "../html/detail.html")
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const img = document.createElement('img');
    img.setAttribute('src', res.image);
    const h1 = document.createElement('h1');
    h1.textContent = res.title;
    const desc = document.createElement('p');
    desc.textContent = res.description;
    const ul = document.createElement('ul');
    res.ingredients.forEach((r)=>{
        const li = document.createElement('li');
        li.textContent = r
        ul.appendChild(li)
    }) 
    figcaption.appendChild(h1);
    figcaption.appendChild(desc);
    figcaption.appendChild(ul)
    a.appendChild(img)
    figure.appendChild(a)
    figure.appendChild(figcaption);
    main.appendChild(figure);
    figure.addEventListener('click',()=>{
        localStorage.setItem('coffee', JSON.stringify(res));
        localStorage.setItem('coffee_id', JSON.stringify(res.id));
    });
}