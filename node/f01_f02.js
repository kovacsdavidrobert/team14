const fs = require("fs");

fs.writeFile("tanulo.txt", "Kovács Dávid Róbert",(err)=>{
    if(err) throw err;
    console.log("Név beírva.");
});

var randomSzamok = "";
for(let i=0;i<10;i++){
    randomSzamok += Math.floor(Math.random()*10000) + "\n";
}

fs.writeFile("randomszamok.txt", randomSzamok,(err)=>{
    if(err) throw err;
    console.log("Random számok beírva.");
});
