//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat:string[] = [
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

interface FifaAdat {
    nev: string;
    helyezes: number;
    valtozas: number;
    pont: number;
}


  function PontosvesszosSztringTombbolObjektumtombot(stringTomb:string[]):FifaAdat[] {
    var objTomb:FifaAdat[] = [];
    var tmp:string[];
    for (let i = 0; i < stringTomb.length; i++) {
      tmp = stringTomb[i].split(';');
      let obj:FifaAdat = {
         nev : tmp[0],
         helyezes : Number(tmp[1]),
         valtozas : Number(tmp[2]),
         pont : Number(tmp[3])
    }
      objTomb.push(obj);
    }
    return objTomb;
  }

  var fifa = PontosvesszosSztringTombbolObjektumtombot(csapatAdat);

  console.log(`A ranglistán szereplők száma: <b>${fifa.length}</b> csapat.<hr>`);

  function AtlagPontszam(objArr:FifaAdat[]):number {
    var szumma = 0;
    for (let i = 0; i < objArr.length; i++) {
      szumma += objArr[i].pont;
    }
    return Math.round((szumma/objArr.length)*100)/100;
  }
  console.log(`A ranglistán szereplők átlagpontszáma: <b>${AtlagPontszam(fifa)}</b> pont.<hr>`);

  function ObjTombTablazatbaKiir(objArr:FifaAdat[]):void {
    var keys:string[] = Object.keys(objArr[0]);

    console.log('<table>');
    console.log('<tr><th>');
    console.log(keys.join('</th><th>'));
    console.log('</th></tr>');
    for (let i = 0; i < objArr.length; i++) {
      console.log('<tr>');
      for (let j = 0; j < keys.length; j++) {
        console.log('<td>' + objArr[i][keys[j]] + '</td>');
      }
      console.log('</tr>');
    }
    console.log('</table>');
  }

  function AtlagonFeluli(objArr:FifaAdat[]):FifaAdat[] {
    var felul:FifaAdat[] = [];
    for (let i = 0; i < objArr.length; i++) {
      if(objArr[i].pont > AtlagPontszam(objArr)){
        felul.push(objArr[i]);
      }
    }
    return felul;
  }
  console.log(`Átlafon felüliek:<br>`);
  ObjTombTablazatbaKiir(AtlagonFeluli(fifa));
  console.log(`<hr>`);

  function LegtobbetJavito(objArr:FifaAdat[]):[FifaAdat] {
    var max:number = objArr[0].valtozas;
    var maxIndex:number = 0;
    for (let i = 0; i < objArr.length; i++) {
      if(max < objArr[i].valtozas){
        max = objArr[i].valtozas;
        maxIndex = i;
      }
    }
    return [objArr[maxIndex]];
  }
  console.log(`Legtöbbet javított:<br>`);
  ObjTombTablazatbaKiir(LegtobbetJavito(fifa));
  console.log(`<hr>`);


  function MegtalalhatoE(objArr:FifaAdat[], orszag:string):boolean {
    for (let i = 0; i < objArr.length; i++) {
      if(objArr[i].nev == orszag)return true;
    }
    return false;
  }
  console.log(`Magyarország ott van e: (true/false):
  <b>${MegtalalhatoE(fifa, "Magyarország")}</b><hr>`);

  console.log(`Chile ott van e: (true/false):
  <b>${MegtalalhatoE(fifa, "Chile")}</b><hr>`);


  function ValtozasStatisztikaEljaras(objArr:FifaAdat[]):void {
    var valtozasok:number[] = [];
    var tmp:number = 0;
    for (let i = 0; i < objArr.length; i++) {
      if(!valtozasok.includes(objArr[i].valtozas)){
        valtozasok.push(objArr[i].valtozas);
      }
    }
    valtozasok = valtozasok.sort();
    for (let i = 0; i < valtozasok.length; i++){
      tmp = 0;
      for (let j = 0; j < objArr.length; j++) {
        if(valtozasok[i] == objArr[j].valtozas) tmp++;
      }
      if(tmp>1){
        console.log(valtozasok[i] +": ");
        console.log(tmp + 'db csapat<br>');
      }
    }
  }
  console.log(`Változás statisztika:<br>`);
  ValtozasStatisztikaEljaras(fifa);
