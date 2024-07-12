const client_id = "c8acc6af6ca94c338d709252f686c1e3";
const client_secret = 'c00744f5b82847ed84f972fa6f69ede9';
fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers:{
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": 'Basic ' + btoa(client_id + ':' + client_secret),
  },
  body: 'grant_type=client_credentials'
}).then((res) => res.json()).then((res)=> console.log(res));