const fs = require('fs');

// Véletlenszerű szám generálása 1 és 100 között
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// 10 véletlenszerű szám generálása és új sorokba rendezése
let numbers = '';
for (let i = 0; i < 10; i++) {
    numbers += getRandomNumber() + '\n';
}

// Írás a randomszamok.txt fájlba
fs.writeFile('randomszamok.txt', numbers, (err) => {
    if (err) throw err;
    console.log('A számok sikeresen mentve a randomszamok.txt fájlba!');
});
