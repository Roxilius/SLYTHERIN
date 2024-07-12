// API Marsel
let pageInt = 1;
const page = document.querySelector(".page");
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWQxMTZiMWY0MzNkMzA1ZTcyOTM0NTQwMzQyYTc0ZSIsIm5iZiI6MTcyMDc3NjI3MC4wMTgyMzEsInN1YiI6IjY2OGJiZDYxNTNjMDBmNjY3NGIxZTMxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hhYrYtHVOAIdCAgKncF47sP6SSfVp8497XxC3RQJYuQ",
  },
};

function getMovie() {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageInt}&sort_by=popularity.desc`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      page.textContent = `${pageInt.toString()}`;
      console.log(response);
    })
    .catch((err) => console.error(err));
}

const prev = document.querySelector(".bxs-left-arrow-circle");
prev.addEventListener("click", () => {
  if (pageInt <= 1) {
    pageInt = 1;
  } else {
    pageInt--;
  }
  getMovie();
});
const next = document.querySelector(".bxs-right-arrow-circle");
next.addEventListener("click", () => {
  if (pageInt >= 10) {
    pageInt = 10;
  } else {
    pageInt++;
  }
  getMovie();
});
getMovie();

// referensi untuk fitur search lihat di punya melati