// Array object

const req = {
    body: {
        name: "Rizky",
        age: 29,
        major: "Informatics",
    },    
};

// Destructing object berdasarkan key 

const { name, age, major } = req.body;

console.log(name, age, major);

// Buat array family

const family = ["Mikel", "Hannah", "Jonas"];

const [suami, istri, anak] = family;

console.log(suami,istri,anak);