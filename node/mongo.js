const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://kdr:Jelszo88@cluster0.gmyioqu.mongodb.net/";

async function ellenorzes(){
    try{
        const client = await MongoClient.connect(url);
        console.log("Sikeres csatlakozás!");
        client.close();
    }
    catch(err){
        console.log(err);
    }
}

//then-el, kollekcio létrehozás:
function letrehozas(){
  MongoClient.connect(url)
    .then(function (client) {
      console.log("Csatlakoztam.");
      var t14 = client.db('T14');
      t14.createCollection("dolgozok").then(()=>{
          console.log("Létrehozva.");
          client.close();
      });
    })
    .catch(function (err) {})
}


//dokumentum beillesztés:
function docBeilleszt(){
    const adat = {
        kor: 36,
        nev: "Kovács Dávid",
        fizetes: 600000
    };
    MongoClient.connect(url)
      .then((client)=>{
        console.log("Csatlakoztam.");
        var t14 = client.db('T14');
        t14.collection("NodeJSbolLetrehozott").insertOne(adat).then(() => {//insertMany-vel obj tömböt lehet feltölteni;
            console.log("Sikeres Beillesztés");
            client.close();
        });

      }).catch((err)=>{});
}

//olvasás:
function elsoAdattBeolvasas(){
    MongoClient.connect(url)
      .then((client)=>{
        console.log("Csatlakoztam.");
        var t14 = client.db('T14');
        var collect = t14.collection("NodeJSbolLetrehozott");
        collect.findOne().then((res) => {
          console.log(res);
          client.close();
        });

      }).catch((err)=>{});
}

//Nem működik, csak az async await működik:
function rendesBeolvasas(){
    MongoClient.connect(url)
      .then((client)=>{
        console.log("Csatlakoztam.");
        var t14 = client.db('T14');
        var collect = t14.collection("NodeJSbolLetrehozott");
        var finded = collect.find({nev: "Kovács Dávid"}).then((res) => {
          console.log(res);
          client.close();
        }).catch((err)=>{
            console.log(err);
            client.close();
        });
      }).catch((err)=>{});
}

//update
function updateAdat(){
    MongoClient.connect(url)
      .then((client)=>{
        console.log("Csatlakoztam.");
        var t14 = client.db('T14');
        var collect = t14.collection("NodeJSbolLetrehozott");
        collect.updateOne({nev: "Békés Csaba"},{$set:{kor: 66}}).then((res) =>{
            console.log("siker");
            client.close();
        });
      }).catch((err)=>{});
}

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


async function tobbDocumentumBeillesztes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");

        const ujAdatok = [{
            nev: "Koaxk Ábel",
            kor: 23,
            fizetes: 400000,
            beosztas: "Rendszergazda"
        },
        {
            nev: "Zsíros B. Ödön",
            kor: 45,
            fizetes: 1200000,
            beosztas: "Ügyvezető Igazgató"
        },
        {
            nev: "Meg Győző",
            kor: 32,
            fizetes: 600000,
            beosztas: "Marketing Manager"
        },
        {
            nev: "Békés Csaba",
            kor: 63,
            fizetes: 180000,
            beosztas: "Takarító"
        },
        {
            nev: "Pofá Zoltán",
            kor: 25,
            fizetes: 300000,
            beosztas: "Biztonsági Őr"
        },
        {
            nev: "Fejet Lenke",
            kor: 22,
            fizetes: 220000,
            beosztas: "Irodai Titkár"
        },
        {
            nev: "Vak Cina",
            kor: 30,
            fizetes: 500000,
            beosztas: "Üzem Orvos"
        }]
        const muveletek = await db.collection("dolgozok").insertMany(ujAdatok);
        console.log("A dokumentumok beillesztése a collectionbe sikeres volt!", muveletek.insertedCount, "új elem beilleszte.");
        client.close();
    }
    catch (err) {
        console.error("Hiba a dokumentumok létrehozása közben:", err)
    }
}

//letrehozas();
//ellenorzes();
//docBeilleszt();
//elsoAdattBeolvasas();
//rendesBeolvasas();
//updateAdat();
//specialisAdatKiolvasas();
//tobbDocumentumBeillesztes();