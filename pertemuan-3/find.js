// Membuat array of object

const users = [
    {
        name: "Rizky",
        age: 29,
    },
    {
        name: "Ridho",
        age: 26,
    },
    {
        name: "Syawal",
        age: 18,
    },
];

/**
 * Find: mencari 1 data
 * kondisi/kriteria mencari umur > 20
 */

const hasilPencarian = users.filter((user) => user.age > 20);

console.log(hasilPencarian);