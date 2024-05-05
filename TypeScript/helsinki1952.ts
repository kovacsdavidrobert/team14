// Beolvasom a tömböt:
const helsinki:string[]=[
"1 1 atletika kalapacsvetes",
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
"5 2 kajak-kenu kenu_kettes_1000m",
"5 2 kerekparozas ketuleses_verseny",
"5 4 uszas 4x200m_gyorsvalto",
"5 5 vivas parbajtor_csapat",
"6 1 birkozas kotottfogas_legsuly",
"6 1 kajak-kenu kajak_egyes_500m",
"6 1 torna osszetett_egyeni",
"6 1 kerekparozas repuloverseny",
"6 1 uszas 400m_gyors",
"6 1 torna felemaskorlat",
"6 8 torna osszetett_csapat"
]


//2. feladat, objektumtömb létrehozása:
interface HelsinkiAdat {
    helyezes:    number;
    letszam:     number;
    sportag:     string;
    versenyszam: string;
}

function SportAdatStringTombbolHelsinkiAdatTomb(t:string[]):HelsinkiAdat[]{
    var valaszTomb:HelsinkiAdat[] = [];
    for(let i = 0; i < t.length; i++){
        let ujElem:HelsinkiAdat = {
            helyezes: Number(t[i].split(' ')[0]),
            letszam:  Number(t[i].split(' ')[1]),
            sportag: t[i].split(' ')[2],
            versenyszam: t[i].split(' ')[3]
        };
        valaszTomb.push(ujElem);
    }
    return valaszTomb;
}

console.log("2. feladat, objektumtömb létrehozása:");
var HelsinkiAdatok =  SportAdatStringTombbolHelsinkiAdatTomb(helsinki);
console.log(HelsinkiAdatok);


//3. feladat, pontszerző helyezések számának meghatározása:
function PontSzerzesekSzama(Adatok:HelsinkiAdat[]):number{
    return Adatok.length;
}

console.log("3. feladat, pontszerző helyezések számának meghatározása:");
console.log(`Pontszerő helyzések száma: ${PontSzerzesekSzama(HelsinkiAdatok)}`);



//4. feladat, Érmek száma:
function ErmekSzama(Adatok:HelsinkiAdat[]):[number, number, number, number]{
    let arany:number = 0;
    let ezust:number = 0;
    let bronz:number = 0;

    for(let i = 0; i < Adatok.length; i++){
        if(Adatok[i].helyezes      == 1) arany++;
        else if(Adatok[i].helyezes == 2) ezust++;
        else if(Adatok[i].helyezes == 3) bronz++;
    }

    return [arany, ezust, bronz, arany + ezust + bronz];
}

console.log("4. feladat, érmek száma:");
console.log('Arany: ' +    ErmekSzama(HelsinkiAdatok)[0]);
console.log('Ezüst: ' +    ErmekSzama(HelsinkiAdatok)[1]);
console.log('Bronz: ' +    ErmekSzama(HelsinkiAdatok)[2]);
console.log('Összesen: ' + ErmekSzama(HelsinkiAdatok)[3]);


//5. feladat, olimpiai pontok összege:
function OsszesOlimpiaiPont(Adatok:HelsinkiAdat[]):number{
    let osszPont:number = 0;

    for(let i = 0; i < Adatok.length; i++){
        if(     Adatok[i].helyezes == 1) osszPont += 7;
        else if(Adatok[i].helyezes == 2) osszPont += 5;
        else if(Adatok[i].helyezes == 3) osszPont += 4;
        else if(Adatok[i].helyezes == 4) osszPont += 3;
        else if(Adatok[i].helyezes == 5) osszPont += 2;
        else if(Adatok[i].helyezes == 6) osszPont += 1;
    }

    return osszPont;
}

console.log("5. feladat, Összesített olimpiai pontszám:");
console.log("Olimpiai pontok száma: " + OsszesOlimpiaiPont(HelsinkiAdatok));



//6.feladat úszásban, vagy tornában szereztek több érmet?

function ErmekOsszehasonlitasaKetSportagben(Adatok:HelsinkiAdat[], sportag1:string, sportag1Kiir:string, sportag2:string, sportag2Kiir:string):string{
    let ermek1:number = 0;
    let ermek2:number = 0;

    for(let i = 0; i < Adatok.length; i++){
        if(Adatok[i].sportag == sportag1 && Adatok[i].helyezes <= 3) ermek1++;
        if(Adatok[i].sportag == sportag2 && Adatok[i].helyezes <= 3) ermek2++;
    }
    if(ermek1 > ermek2)
        return `${sportag1Kiir} sportágban szereztek több érmet.`;
    else if(ermek1 < ermek2)
        return `${sportag2Kiir} sportágban szereztek több érmet.`;
    else
        return "Egyenlő volt az érmek száma.";
}

console.log(ErmekOsszehasonlitasaKetSportagben(HelsinkiAdatok, 'torna', 'Torna', 'uszas', 'Úszás'));

//7. feladat javítot sztringtömb létrehozása

function JavitottKiegeszitettStringTombbotCsinalok(oldHelsinki:string[]):string[]{
    let ujHelsinki:string[] = [];
    for(let i = 0; i < oldHelsinki.length; i++){
        ujHelsinki.push(oldHelsinki[i].replace("kajakkenu","kajak-kenu"));
    }

    for(let i = 0; i < ujHelsinki.length; i++){
        let olimpiaiPont:number = 0;
        if(ujHelsinki[i].split(' ')[0] == '1') olimpiaiPont = 7;
        if(ujHelsinki[i].split(' ')[0] == '2') olimpiaiPont = 5;
        if(ujHelsinki[i].split(' ')[0] == '3') olimpiaiPont = 4;
        if(ujHelsinki[i].split(' ')[0] == '4') olimpiaiPont = 3;
        if(ujHelsinki[i].split(' ')[0] == '5') olimpiaiPont = 2;
        if(ujHelsinki[i].split(' ')[0] == '6') olimpiaiPont = 1;
        ujHelsinki[i] = olimpiaiPont.toString() + ' ' + ujHelsinki[i];
    }
    return ujHelsinki;
}
 var helsinki2 = JavitottKiegeszitettStringTombbotCsinalok(helsinki);
console.log('7. feladat, javított bővített helsinki tömb:');
console.log(helsinki2);




//8. feladat legtöbb sportoló száma helyezésenként:

function LegtobbSortolo(Adatok:HelsinkiAdat[]):HelsinkiAdat{
    let maxIndex:number = 0;
    for(let i = 0; i < Adatok.length; i++){
        if(Adatok[i].letszam > Adatok[maxIndex].letszam)
            maxIndex = i;
    }
    return Adatok[maxIndex];
}

console.log('8. feladat, legnépesebb csapat:');
var legnepesebb:HelsinkiAdat = LegtobbSortolo(HelsinkiAdatok);
console.log("Helyezés: " + legnepesebb.helyezes);
console.log("Sportág: " + legnepesebb.sportag);
console.log("Versenyszám: " + legnepesebb.versenyszam);
console.log("Sportolók száma: " + legnepesebb.letszam);
