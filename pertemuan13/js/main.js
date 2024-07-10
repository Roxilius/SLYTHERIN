// fetch("https://fake-coffee-api.vercel.app/api")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const BASE_URL = "https://api.spotify.com/v1";
// const options = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };
// fetch(BASE_URL + "/me", options)
//   .then((res) => res.json())
//   .then((res) => console.log(res));

const auth = "https://accounts.spotify.com/authorize?";
const client_id = "c8acc6af6ca94c338d709252f686c1e3";
const redirect_uri = "http://127.0.0.1:5500/html/";
const scopes = [
  "user-read-private",
  "user-read-email",
  "playlist-modify-public",
  "streaming",
];
const loginEndpoint = `${auth}client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
async function authLogin() {
  window.location.href = loginEndpoint
  if (!window.localStorage.getItem('token')) {
    let token = window.location.hash.split("&")[0].split("=")[1];
    window.localStorage.setItem('token', token);
  }
  // if (window.location.href != redirect_uri) {
    // window.location.hash = '';
  // }
  console.log(window.localStorage.getItem('token'))
}
if (!window.localStorage.getItem('token')) {
  authLogin();
}