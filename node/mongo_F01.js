#!/usr/bin/env node


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://kdr:Jelszo88@cluster0.gmyioqu.mongodb.net/";

async function specialisAdatKiolvasas() {
    try {
        const client = await MongoClient.connect(url);
        const t14 = client.db("T14");
        const collection = t14.collection("NodeJSbolLetrehozott");

        const keresesiMinta = { nev: "Kovács Dávid" }//Speciális keresési "mintát" adtunk meg...

        const osszesAdat = await collection.find(keresesiMinta).toArray();
        console.log("Az összes dokumentum a collection-ben:", osszesAdat);
        client.close();
    }
    catch (err) {
        console.error("Hiba a művelet végrehajtása során");
    }
}

function DolgozoHozzaadasa(ujDolgozo){
    MongoClient.connect(url)
      .then((client)=>{
        console.log("Csatlakoztam.");
        var t14 = client.db('T14');
        t14.collection("NodeJSbolLetrehozott").insertOne(ujDolgozo).then(() => {
            console.log("Sikeres Beillesztés");
            client.close();
        });

      }).catch((err)=>{console.log(err)});
}

var ujAdat={
    nev:"Szikla Szilárd",
    kor: 60,
    fizetes: 5000000,    
    beosztas: "Tulajdonos"
}

DolgozoHozzaadasa(ujAdat);



function FizetesModositas(beosztas, ujFizetes){
    MongoClient.connect(url)
      .then((client)=>{
        console.log("Csatlakoztam.");
        var t14 = client.db('T14');
        var collect = t14.collection("NodeJSbolLetrehozott");
        collect.updateOne({beosztas: beosztas},{$set:{fizetes: ujFizetes}}).then(() =>{
            console.log("siker");
            client.close();
        });
      }).catch((err)=>{console.log(err)});
}


FizetesModositas("Marketing Manager", 1000000);




async function haromLegfiatalabbDolgozo() {
    try {
        const client = await MongoClient.connect(url);
        const t14 = client.db("T14");
        const collection = t14.collection("NodeJSbolLetrehozott");

        const osszesAdat = await collection.find({}).sort({kor: 1}).limit(3).toArray();
        console.log(osszesAdat);
        client.close();
    }
    catch (err) {
        console.error("Hiba a művelet végrehajtása során");
    }
}

haromLegfiatalabbDolgozo();