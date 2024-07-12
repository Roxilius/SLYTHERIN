const keyword = localStorage.getItem("keyword");
function searchData() {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
    .then((res) => res.json())
    .then((res) => console.log(res));
}
searchData();