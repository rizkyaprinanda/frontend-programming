function download() {    
    /**
     * Membuat promise menggunakan new Promise
     * Promise menerima callback: resolve dan reject
     */

    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("Downloading selama 3 detik");        
        }, 3000);
    })
};

function verify() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("Verify selama 2 detik");
        }, 2000);
    })
};

function notify() {
    console.log("Download Selesai");
};

function main() {
    // Solusi Promise

    download().then(function(hasil){
        console.log(hasil);

        return verify();
    })
    .then(function(hasil) {
        console.log(hasil);

        notify();
    })
    .catch(function(error) {
        console.log(error);
    });
};

main();