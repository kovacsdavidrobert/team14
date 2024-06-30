  //Helyezés
  //CsapatMeret
  //SportAg
  //VersenySzam
  eredmenyek = [
    "1 1 atletika kalapacsvetes	",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
  ];

//0.feladat:
function adatFeltolto(adatTomb){
    var obj = {};
    var eredmenyObjTomb =[];
    for(let i = 0; i < adatTomb.length; i++){
        obj = {
            helyezes:    Number(adatTomb[i].split(' ')[0]),
            csapatMeret: Number(adatTomb[i].split(' ')[1]),
            sportAg:     adatTomb[i].split(' ')[2],
            versenySzam: adatTomb[i].split(' ')[3]
        }
        eredmenyObjTomb.push(obj);
    }
    return eredmenyObjTomb;
}

const helsinkiAdatok = adatFeltolto(eredmenyek);



//1.feladat:

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://kdr:Jelszo88@cluster0.gmyioqu.mongodb.net/";

function Letrehozas(kollekcio){
    MongoClient.connect(url)
      .then(function (client) {
        console.log("Csatlakoztam.");
        var t14 = client.db('T14');
        t14.createCollection(kollekcio).then(()=>{
            console.log("Létrehozva.");
            client.close();
            Kiurites(kollekcio);
        });
      })
      .catch(function (err) {});
}


function Kiurites(kollekcio){
  MongoClient.connect(url)
    .then(function (client) {
      console.log("Csatlakoztam.");
      var t14 = client.db('T14');
      t14.collection(kollekcio).deleteMany({}).then(() => {
          console.log("Kiürítve.");
          client.close();
          FeltoltesAKollekcioba(kollekcio, helsinkiAdatok);
      }).catch(function (err) {console.log(err)})
    })
    .catch(function (err) {console.log(err)})
}


//2.feladat:
function FeltoltesAKollekcioba(kollekcio, adatok){
    MongoClient.connect(url)
      .then(function (client) {
        console.log("Csatlakoztam.");
        var t14 = client.db('T14');
        var col = t14.collection(kollekcio);
        col.insertMany(adatok).then(()=>{
            console.log("Adatok Feltöltve");
            client.close();
            adatListazo(kollekcio, {$or: [{sportAg: "uszas"},{sportAg: "torna"}]},{_id:0,sportAg:1, versenySzam:1}, "3. feladat:");
            adatListazo(kollekcio, {helyezes: {$lte: 3}},{_id:0, helyezes:1, versenySzam:1}, "4. feladat:");
            legnagyobbLetszamuCsapat(kollekcio);
            adatListazo(kollekcio, {helyezes: 1, csapatMeret: 1},{_id:0, sportAg: 1}, "6. feladat:");
        })
        .catch((err) => {console.log(err)});
      })
      .catch((err) => {console.log(err)});
}


//3, 4, 6.feladat:
async function adatListazo(kollekcio, minta, projekcio, leiras) {
    try {
        const client = await MongoClient.connect(url);
        console.log('Csatlakoztam.');
        const t14 = client.db("T14");
        const collection = t14.collection(kollekcio);

        const osszesAdat = await collection.find(minta, {projection: projekcio}).toArray();
        console.log(leiras);
        console.log("Találat:", osszesAdat);
        client.close();
    }
    catch (err) {
        console.error(err);
    }
}


//5.feladat:
async function legnagyobbLetszamuCsapat(kollekcio){
    try {
        const client = await MongoClient.connect(url);
        const t14 = client.db("T14");
        const collection = t14.collection(kollekcio);

        const osszesAdat = await collection.find({}).sort({csapatMeret: 1}).limit(1).toArray();
        console.log("5. feladat:");
        console.log(osszesAdat);
        client.close();
    }
    catch (err) {
        console.error("Hiba a művelet végrehajtása során");
    }
}




//Ezzel indul a lánc:
Letrehozas('Helsinki');