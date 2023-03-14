// Membuat array  family
const family = ["Mikel", "Hannah"];

const newFamily = [...family, "Jonas", "Martha"];

console.log(newFamily);

// Copy object

const user = {
    name: "Rizky",
    major: "Informatics",
};

const newUser = {
    ...user,
    age: 29,
};

console.log(newUser);