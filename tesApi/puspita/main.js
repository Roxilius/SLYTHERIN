function beritaPolitik() {
  fetch("https://api-berita-indonesia.vercel.app/antara/politik/")
    .then((res) => res.json())
    .then((res) => console.log(res));
}
beritaPolitik();