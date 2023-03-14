// Membuat array
const names = ["Mikel", "Hannah", "Jonas"];

names.forEach(function(name) {
    // console.log(`Nama: ${name}`);
});

// map: untuk transform atau mengubah data
const hasilFormat = names.map(function(name){
    return `Mr/Mrs ${name}`
})

console.log(names);
console.log(hasilFormat);