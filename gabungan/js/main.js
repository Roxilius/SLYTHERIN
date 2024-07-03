// uncounted loop menggunakan do while
let counter = 0;
let ask;
do {
  counter++;
  ask = confirm("Apakah anda ingin berulang?");
} while (ask);
document.write(
  "<h1>Perulangan yang sudah dilakukan : " + counter + " Kali</h1>"
);
// counted loop menggunakan repeat
document.write("Ulang ".repeat(5));

// counted loop menggunakan forEach
const days = ["senin", "selasa", "rabu", "kamis", `jum'at`, `sabtu`, "minggu"];
days.forEach((i) => {
  console.log(`${i}`);
});

// membuat object dengan cara object literal
let mahasiswa = {
  name: "apalh",
  nim: "0231531",
  prodi: "S1 TI",
  fakultas: "ilkom",
};
// menambahkan properti baru ke dalam object
mahasiswa.univ = "pasim";
// menghapus properti di object
delete mahasiswa.univ;

// membuat Function Declaration object
function createObject(name, nim, prodi, fakultas) {
  let mahasiswa = {};
  mahasiswa.name = name;
  mahasiswa.nim = nim;
  mahasiswa.prodi = prodi;
  mahasiswa.fakultas = fakultas;
  return mahasiswa;
}
// membuat object menggunakan Function Declaration
let mhs1 = createObject("dedy", "021654651", "asdasd", "asdasd");

// cara menambahkan object ke dalam array
let car = ["Ferrari", "D 1703 ADX"];
car.push({
  pemilik: "Bapak Abdul",
  thnBeli: 2015,
  pajakAktif: false,
});

// latihan
// membuat Function Declaration object
function createObject(name, umur, alamat, hobi) {
  let person = {};
  person.name = name;
  person.umur = umur;
  person.alamat = alamat;
  person.hobi = hobi;
  return person;
}
// membuat array hobi
let hobi = ["Main Game", "Coding"];
// membuat object alamat menggunakan object literal
let alamat = {
  provinsi: "Sumatra Barat",
  kota: "Padang",
};
// membuat object person1 menggunakan Function Declaration (dengan parameter alamat dan hobi yg sudah di deklar ke sebuah variabel)
let person1 = createObject("Fajri", 20, alamat, hobi);
// menampilkan value dari setiap properti object person1
document.write(`
    <h1>Person 1</h1>
    <h1>Nama: ${person1.name}</h1>
    <h1>Umur: ${person1.umur}</h1>
    <div>
        <h1>Provinsi: ${person1.alamat.provinsi}</h1>
        <h1>Kota: ${person1.alamat.kota}</h1>
    </div>
    <div>
        <h1>Hobi : ${person1.hobi}</h1>
    </div>
    <hr>
`);

/* 
    membuat object person2 menggunakan Function Declaration 
    (dengan parameter alamat(bentuk object) dan hobi(bentuk array) yang langsung di isi sebagai parameter)
*/
let person2 = createObject( "Fajri", 20,
  {
    provinsi: "Sumatra Barat",
    kota: "Padang",
  },
  ["Main Game", "Coding"]
);
// menampilkan value dari setiap properti object person2
document.write(`
    <h1>Person 2</h1>
    <h1>Nama: ${person2.name}</h1>
    <h1>Umur: ${person2.umur}</h1>
    <div>
        <h1>Provinsi: ${person2.alamat.provinsi}</h1>
        <h1>Kota: ${person2.alamat.kota}</h1>
    </div>
    <div>
        <h1>Hobi : ${person2.hobi}</h1>
    </div>
    <hr>
`);