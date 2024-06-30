#!/usr/bin/env node

var http = require("http");
var fs = require("fs");
/*
http.createServer((req, res) =>{
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("Szia");
}).listen(8080);


const hostname = "127.0.0.1"; //IP cím megadása, ebben az esetben a localhost(itt lesz megtalálható a weboldal)
const port = "3000";//Port meghatározása, amin kommunikálni fogunk

const server = http.createServer((req, res) => { //HTTP modul segítségével szerver készítése "arrowfunction"-nel
    res.statuscode = 200;//Státuszkód megadása, jelentése: MINDEN RENDBEN
    res.setHeader("Content-type", "text-plain");//HTTP fejrész megadása, milyen tartalom típus jelenjen meg
    res.end("Szeretem a NodeJS");//Szöveges tartalom, ami megjelenik
});

server.listen(port, hostname, () => {
    console.log(`A szerverünk fut a http://${hostname}:${port} címen`);//Visszajelző üzenet arról, hogy sikeresen elindítottuk a szervert!
});
*/

const hostname = "127.0.0.1"; //IP cím megadása, ebben az esetben a localhost(itt lesz megtalálható a weboldal)
const port = "3000";//Port meghatározása, amin kommunikálni fogunk

const server = http.createServer((req, res) => { //HTTP modul segítségével szerver készítése "arrowfunction"-nel
    fs.readFile("index.html", "utf8", (err, data) => {
      res.statuscode = 200;//Státuszkód megadása, jelentése: MINDEN RENDBEN
      res.setHeader("Content-type", "text-plain");//HTTP fejrész megadása, milyen tartalom típus jelenjen meg
      res.end(data);//Szöveges tartalom, ami megjelenik
    });
    
});

server.listen(port, hostname, () => {
    console.log(`A szerverünk fut a http://${hostname}:${port} címen`);//Visszajelző üzenet arról, hogy sikeresen elindítottuk a szervert!
});

