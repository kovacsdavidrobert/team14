//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)
var csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];
function PontosvesszosSztringTombbolObjektumtombot(stringTomb) {
    var objTomb = [];
    var tmp;
    for (var i = 0; i < stringTomb.length; i++) {
        tmp = stringTomb[i].split(';');
        var obj = {
            nev: tmp[0],
            helyezes: Number(tmp[1]),
            valtozas: Number(tmp[2]),
            pont: Number(tmp[3])
        };
        objTomb.push(obj);
    }
    return objTomb;
}
var fifa = PontosvesszosSztringTombbolObjektumtombot(csapatAdat);
console.log("A ranglist\u00E1n szerepl\u0151k sz\u00E1ma: <b>".concat(fifa.length, "</b> csapat.<hr>"));
function AtlagPontszam(objArr) {
    var szumma = 0;
    for (var i = 0; i < objArr.length; i++) {
        szumma += objArr[i].pont;
    }
    return Math.round((szumma / objArr.length) * 100) / 100;
}
console.log("A ranglist\u00E1n szerepl\u0151k \u00E1tlagpontsz\u00E1ma: <b>".concat(AtlagPontszam(fifa), "</b> pont.<hr>"));
function ObjTombTablazatbaKiir(objArr) {
    var keys = Object.keys(objArr[0]);
    console.log('<table>');
    console.log('<tr><th>');
    console.log(keys.join('</th><th>'));
    console.log('</th></tr>');
    for (var i = 0; i < objArr.length; i++) {
        console.log('<tr>');
        for (var j = 0; j < keys.length; j++) {
            console.log('<td>' + objArr[i][keys[j]] + '</td>');
        }
        console.log('</tr>');
    }
    console.log('</table>');
}
function AtlagonFeluli(objArr) {
    var felul = [];
    for (var i = 0; i < objArr.length; i++) {
        if (objArr[i].pont > AtlagPontszam(objArr)) {
            felul.push(objArr[i]);
        }
    }
    return felul;
}
console.log("\u00C1tlafon fel\u00FCliek:<br>");
ObjTombTablazatbaKiir(AtlagonFeluli(fifa));
console.log("<hr>");
function LegtobbetJavito(objArr) {
    var max = objArr[0].valtozas;
    var maxIndex = 0;
    for (var i = 0; i < objArr.length; i++) {
        if (max < objArr[i].valtozas) {
            max = objArr[i].valtozas;
            maxIndex = i;
        }
    }
    return [objArr[maxIndex]];
}
console.log("Legt\u00F6bbet jav\u00EDtott:<br>");
ObjTombTablazatbaKiir(LegtobbetJavito(fifa));
console.log("<hr>");
function MegtalalhatoE(objArr, orszag) {
    for (var i = 0; i < objArr.length; i++) {
        if (objArr[i].nev == orszag)
            return true;
    }
    return false;
}
console.log("Magyarorsz\u00E1g ott van e: (true/false):\n  <b>".concat(MegtalalhatoE(fifa, "Magyarország"), "</b><hr>"));
console.log("Chile ott van e: (true/false):\n  <b>".concat(MegtalalhatoE(fifa, "Chile"), "</b><hr>"));
function ValtozasStatisztikaEljaras(objArr) {
    var valtozasok = [];
    var tmp = 0;
    for (var i = 0; i < objArr.length; i++) {
        if (!valtozasok.includes(objArr[i].valtozas)) {
            valtozasok.push(objArr[i].valtozas);
        }
    }
    valtozasok = valtozasok.sort();
    for (var i = 0; i < valtozasok.length; i++) {
        tmp = 0;
        for (var j = 0; j < objArr.length; j++) {
            if (valtozasok[i] == objArr[j].valtozas)
                tmp++;
        }
        if (tmp > 1) {
            console.log(valtozasok[i] + ": ");
            console.log(tmp + 'db csapat<br>');
        }
    }
}
console.log("V\u00E1ltoz\u00E1s statisztika:<br>");
ValtozasStatisztikaEljaras(fifa);
