// request untuk mendapatkan access_token supaya bisa access endpoint api
const client_id = "c8acc6af6ca94c338d709252f686c1e3";
const client_secret = "c00744f5b82847ed84f972fa6f69ede9";
fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(client_id + ":" + client_secret),
  },
  body: "grant_type=client_credentials",
})
  .then((res) => res.json())
  .then((res) => {
    localStorage.setItem("token", JSON.stringify(res.access_token));
    console.log(res);
  });
const token = JSON.parse(localStorage.getItem("token"));
function getAlbum() {
  fetch("https://api.spotify.com/v1/browse/new-releases", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.albums.items);
    })
    .catch((e) => {
      console.log(e);
    });
}
getAlbum();

// contoh id album sudah kita ambil / simpan lalu get lagu dari album tsb
let album_id = "1tEu6qNPURb0YfjaRDK23w"
function getAlbumTracks() {
  fetch(`https://api.spotify.com/v1/albums/${album_id}/tracks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
}
getAlbumTracks();

// bentuk array
// const data = [
//   [
//     {
//       id: 1,
//       nama: 'asd'
//     }
//   ],
//   [],
//   []
// ]
// data.forEach((d)=>{
//   d.forEach((i)=>{
//     console.log(i.nama);
//   })
// })

// bentuk objek
const data = {
  album: [
    {
      id: 1,
      nama: 'asd'
    }
  ],
  playlist: [],
  artis: []
}
data.album.forEach((album)=>{
  console.log(nama);
})
