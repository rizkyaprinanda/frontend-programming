/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  {
    name: "Aufa Billah",
    age: 22,
    major: "Informatics",
  },
  {
    name: "Isfa",
    age: 22,
    major: "Informatics",
  },
  {
    name: "Nurul",
    age: 22,
    major: "Information System",
  },
  {
    name: "Fai",
    age: 22,
    major: "Informatics",
  },
  {
    name: "Agung",
    age: 23,
    major: "Information System",
  },
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (let user of users) {
      console.log(`Name: ${user.name}`);
      console.log(`Age: ${user.age}`);
      console.log(`Major: ${user.major} \n`);
    };
};

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
    users.push(user); 
    all();
};

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => { 
    users[index] = user; 
    all(); 
};

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
    users.splice(index, 1);
    all();
};


const main = () => {
    console.log("# Get All Users");
    all();

    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics",
    };
    store(newUser);

    console.log("# Edit User: Isfa");
    const editUser = {
        name: "Isfhani Giyath",
        age: 23,
        major: "English",
    };
    update(1, editUser);

    console.log("# Delete User: Nurul");
    destroy(2);

};

main();