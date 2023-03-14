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

async function main() {
    // Solusi Promise

    console.log(await download());
    console.log(await verify());
    notify();    
};

main();