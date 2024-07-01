// function test() {
//   {
//     let a = 5;
//     var b = 10;
//   }
//   {
//     // console.log(a);
//   }
// }
// test();

// // object
// // membuat object literal
// // let car = {
// //   type: "Fiat",
// //   model: "500",
// //   color: "white",
// //   // method (function)
// //   start: function () {
// //     console.log("Ini adalah methode Start untuk mobil " + this.type);
// //   },
// //   drive: function () {
// //     console.log("Ini adalah methode Drive");
// //   },
// //   brake: function () {
// //     console.log("Ini adalah methode Brake");
// //   },
// //   stop: function () {
// //     console.log("Ini adalah methode Stop");
// //   },
// // };

// const mahasiswa = {
//   name: "wahyuni",
//   prodi: "psikolog",
//   hobi: ["main", "makan", "tidur"],
//   alamat: {
//     kota: "sibolga",
//     jalan: "Pasbel",
//   },
// };

// // function declaration
// function newObject(name, prodi, hobi, alamat) {
//   let mahasiswa = {};
//   mahasiswa.name = name;
//   mahasiswa.prodi = prodi;
//   mahasiswa.hobi = hobi;
//   mahasiswa.alamat = alamat;
//   return mahasiswa;
// }

// let mhs1 = newObject("wahyuni", "psikolog", ["main", "makan", "tidur"], {
//   kota: "sibolga",
//   jalan: "Pasbel",
// });

// let car = ['Ferrari', 'D 1703 ADX'];
// car.push(mhs1);

const products = [
  {
    id: 1,
    name: "laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCO-x1IjE7sedTuYTiAJIBk9ugIX5LHgq65Q&s",
    price: "Rp. 10.000.000",
  },
  {
    id: 1,
    name: "laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCO-x1IjE7sedTuYTiAJIBk9ugIX5LHgq65Q&s",
    price: "Rp. 10.000.000",
  },
];

products.forEach((product) => {
  document.write(`
        <figure>
            <img src=${product.image} alt="">
            <figcaption>
                <h1>${product.name}</h1>
                <h2>${product.price}</h2>
                <button onclick="confirm('Anda Yakin Membeli Product Ini?')">Beli Sekarang</button>
                <button onclick="alert('Anda Menyukai Product Ini')">Like</button>
                <button onclick="prompt('Pendapat Anda Tentang Product Ini')">Koment</button>
            </figcaption>
        </figure>
    `);
});