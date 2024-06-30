#!/usr/bin/env node

//Importálni a file system modult
const fileMuveletek = require("fs");
//Létrehozunk egy új fájlt: HA MÁR LÉZETETT A FÁJL HOZZÁFŰZZÜK AZ AKTUÁLIS TARTALMAT
fileMuveletek.appendFile("ujFile.txt", "NodeJS teszt", function (err) {
    if (err) throw err
    console.log("Új fájl létrehozva")
})