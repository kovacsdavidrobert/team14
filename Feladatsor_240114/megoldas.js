//14. alkalom
document.write("Feladat 1<hr>");
/*
1) feladat
Készíts egy olyan kódot mely kiírja az adott file készítőjének
-Nevét
-Csoportjának azonosítóját (melyik #Team tagja)
-3.-4. és 5. sor pedig az legyen, mennyire érti a HTML, CSS és jelenlegi JavaScript
tananyagokat 1-100-ig (pl.: html: 90)
*/
document.write("Kovács Dávid Róbert<br>");
document.write("#Team14<br>");
document.write("99<br>");
document.write("98<br>");
document.write("97<br>");

document.write("<br>Feladat 2<hr>");
/*
Készíts egy olyan programot, mely bekér egy számot és a hatványozás mértékét, és kiírja annak
hatványát. pl.: 2 és 3, azaz kettő a harmadikon, azaz az eredmény 8 lesz!
*/
let a = Number(prompt("2. feladat. Kérem a hatványozandó számot:"));
let b = Number(prompt("2. feladat. Kérem a kitevőt:"));
document.write(`${a}<sup>${b}</sup>=${a**b}`);

document.write("<br>Feladat 3<hr>");
/*
Készíts egy programot, ami egy adott intervallumban generál ki páros számot, és írja ki az értékét, a
határétéket te magad állíthatod be, bekérés, alapján.
*/
let from = Number(prompt("3. feladat. Kérem az alsó határt:"));
let to = Number(prompt("3. feladat. Kérem az felső határt:"));

document.write(`Páros számok ${from} és ${to} között:<br>`);
for(let i = from;i <= to;i++){
   if(i%2==0)document.write(i + ', ');
}

document.write("<br><br>Feladat 4<hr>");
/*
Készíts egy programot, ami bekér egy életkort 1-120 között és ennek függvényében megjeleníti az
illető besorolását. 120 kor felett vagy 0 alatt, pedig hibát kapjunk!

Kisgyermekkor: 0-6 év
Gyermekkor: 6-12 év
Serdülőkor: 12-16 év
Ifjúkor: 16-20 év
Fiatal felnőtt kor: 20-30 év
Felnőtt kor: 30-60
Aggkor: 60-tól
*/

let kor = Number(prompt("4. feladat. Kérem az életkort:"));
if     (kor > 0 && kor <= 6)   document.write(`${kor}: Kisgyermekkor`);
else if(kor > 6 && kor <= 12)  document.write(`${kor}: Gyermekkor`);
else if(kor > 12 && kor <= 16) document.write(`${kor}: Serdülőkor`);
else if(kor > 16 && kor <= 20) document.write(`${kor}: Ifjúkor`);
else if(kor > 20 && kor <= 30) document.write(`${kor}: Fiatal felnőtt kor`);
else if(kor > 30 && kor <= 60) document.write(`${kor}: Felnőtt kor`);
else if(kor > 60 && kor <= 120)document.write(`${kor}: Aggkor`);
else document.write(`${kor}: Helytelen életkor`);

document.write("<br><br>Feladat 5<hr>");
/*
Készíts egy olyan kódot, mely paraméterként bekér egy számot és egy osztót és kiírja szövegesen,
hogy az adott osztó, osztja-e az egész számot, úgy, hogy a maradék nulla.
*/

let osztando = Number(prompt("5. feladat. Kérem a vizsgálandó számot:"));
let oszto = Number(prompt("5. feladat. Kérem az osztót:"));

document.write(`${oszto}${osztando%oszto ? " NEM" : ""} osztója a vizsgálandó számnak (${osztando})`);

document.write("<br><br>Feladat 6<hr>");
/*Készíts egy programot, ami kiírja az első 10 négyzetszámot!*/

//Szerintem az 1 is az, ezért íram így:
for(i = 0;i<10;i++){
  document.write(`${2**i}, `);
}
