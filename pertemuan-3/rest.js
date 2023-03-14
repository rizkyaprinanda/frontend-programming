/**
 *  Membuat fungsi sum untuk menjumlahkan semua bilangan.
 *  Fungsi sum menerima params.
 */

function sum(...numbers){
    let hasil = 0;

    for (const number of numbers) {        
        hasil = hasil + number;
    }

    console.log(hasil);
}

sum(1, 2, 3, 4, 5);

/**
 *  Membuat fungsi showFamilies.
 *  Menampilkan anggota keluarga.
 *  Parameter ketiga menggunakan rest parameters.
 */

function showFamilies(husband, wife, ...children){
    console.log(`Suami: ${husband}`);
    console.log(`Istri: ${wife}`);

    for (const child of children) {
        console.log(`Anak: ${child}`);        
    }    
}

showFamilies("Mikel", "Hannah", "Jonas", "Martha", "Magnuz");