function ID(id) {
	return document.getElementById(id);
}


//1. feladat:
function kepviselokSzamanakKiirasaIDSzerint(destElementID, szav) {
	ID(destElementID).innerHTML = `A helyhatósági választáson <strong>
	  ${szav.length}</strong> képviselőjelölt indult.`;
}


//2. feladat:
function jelolokGeneralasaSelectbe(sel, szav) {
	if(sel.options.length > 1) return;
	
	var jelolok = getJelolok(szav);


	for (let i = 0; i < jelolok.length; i++) {
	  let opt = document.createElement('option');
		opt.value = jelolok[i];
		opt.innerHTML = jelolok[i] == '-' ? 'Független' : jelolok[i];
		sel.appendChild(opt);
	}
}

function hanyatJeloltAJeloloKiirIDSzerint(destElementID, szav, jelolo) {
  var szamlalo = 0;
	for (let i = 0; i < szav.length; i++) {
	  if (szav[i].part == jelolo) szamlalo++;
	}
	
	if(jelolo != '-'){
	  ID(destElementID).innerHTML = `<b>${szamlalo}</b> db jelöltet
	    indított a(z) <b>${jelolo}</b> párt.`;
	}
	else {
		ID(destElementID).innerHTML = `<b>${szamlalo}</b> db jelölt
		indult <b>Függetlenként.</b>`;
	}
}

function getJelolok(szav) {
var jelolok = [];
  for (let i = 0; i < szav.length; i++) {
	  if(!jelolok.includes(szav[i].part)) jelolok.push(szav[i].part);
	}
	return jelolok;
}


//3. feladat:
function hanySzavazatotKapottNevAlapjanKiirIDSzerint(destElementID, vezNevInputID, kerNevInputID, szav) {
  var kicsoda = ID(vezNevInputID).value.trim() + " " + ID(kerNevInputID).value.trim();
  
  for (let i = 0; i < szav.length; i++) {
    if ((szav[i].nev.trim() == kicsoda) && kicsoda.length) {
    	ID(destElementID).innerHTML = `<b>${kicsoda}</b> nevű jelölt
    	  <b>${szav[i].szavazat}</b> db szavazatott kapott.`;
    	return;
    }
  }
  
  ID(destElementID).innerHTML = `<b>${kicsoda}</b> nevű jelölt
    <b>NEM</b> indult a választáson.`;
}


//4. feladat:
function reszveteliAranyKiirIDSzerint(destElementID, szavazhat, szav) {
	var osszLeadottSzavazat = getLeadottSzavazatok(szav);
	
	var reszveteliArany = Math.round((osszLeadottSzavazat / szavazhat) * 100 * 100) * 0.01;
	
	ID(destElementID).innerHTML = `A választáson <b>${osszLeadottSzavazat}</b>
	  állampolgár, a jogosultak <b>${reszveteliArany}%</b>-a vett részt.`;
}

function getLeadottSzavazatok(szav) {
	var osszLeadottSzavazat = 0;
	for (let i = 0; i < szav.length; i++) {
	  osszLeadottSzavazat += Number(szav[i].szavazat);
	}
	return osszLeadottSzavazat;
}


//5. feladat:
function szavazatokMennyisegeTablazatbanIDSzerint(destTableID, szav) {
	var jelolok = getJelolok(szav);
	
	if(ID('partBar')) ID('partBar').remove();
	
	var szazalekok = [];
	var szinek = [];
	var tab = ID(destTableID);
	tab.innerHTML = "";
	for (let i = 0; i < jelolok.length; i++) {
	  let sor = tab.insertRow(0);
	  let partCella = sor.insertCell(0);
	  let szavazatCella = sor.insertCell(1);
	  if(jelolok[i] == '-'){
	    partCella.appendChild(document.createTextNode('Független'));
	  }
	  else {
	  	partCella.appendChild(document.createTextNode(jelolok[i]));
	  }
	  partCella.classList.add('fw-bold');
	  
	  partCella.style.color = szintSorszambol(i);      	  
	  szinek.push(szintSorszambol(i));
	  
	  szavazatCella.appendChild(document.createTextNode(hanySzavazataVanAJelolonek(jelolok[i], szav)));
	  szazalekok.push((hanySzavazataVanAJelolonek(jelolok[i], szav) / getLeadottSzavazatok(szav))*100);
	}
	let bar = document.createElement('div');
	bar.style.height = "2rem";
	bar.style.width = "100%";
	bar.setAttribute('id','partBar')
	tab.parentNode.after(bar);
	
	szazalekok = szazalekok.reverse();
	szinek = szinek.reverse();
	barGraphBackground(szazalekok, szinek, bar);
	
}

function hanySzavazataVanAJelolonek(jelolo, szav) {
  var szavazat = 0;
	for (let i = 0; i < szav.length; i++) {
	  if(szav[i].part == jelolo) szavazat += szav[i].szavazat;
	}
	return szavazat;
}

function szintSorszambol(i) {
  let r = ((i+2)*111)%255;
  let g = Math.abs((255-((i+3)*34))%255);
  let b = ((i+7)*155)%255;
  if(r < 70) r += 70;
  if(g < 70) g += 60;
  if(b < 70) b += 60;
	return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
}

function barGraphBackground(szazalekok, szinek, elem) {
	if(szazalekok.length != szinek.length) return;
	var bgString = `linear-gradient(to right,`;
	var kezdoSzazalek = 0;
	for (let i = 0;i<szazalekok.length;i++) {
	  szazalekok[i] = Math.round(szazalekok[i]);
		bgString += ` ${szinek[i]} ${kezdoSzazalek}% ${kezdoSzazalek + szazalekok[i]}%,`;
		kezdoSzazalek += szazalekok[i];
	}
	bgString = bgString.substring(0, bgString.length - 1);
	bgString += ')';
	console.log(bgString);
	elem.style.background = bgString;
}


//6. feladat:
function legtobbetKapottJeloltKiirIDSzerint(destElementId, szav) {
  var max = szav[0].szavazat;
  for (let i = 0; i < szav.length; i++) {
    if(szav[i].szavazat > max) max = szav[i].szavazat;
  }
  
  var valasz = "";
  for (let i = 0; i < szav.length; i++) {
    if(szav[i].szavazat == max){
      valasz += `${szav[i].nev} jelölt ${szav[i].szavazat} db szavazatot kapott. `;
      valasz += `Pártja: ${szav[i].part == '-' ? 'Független' : szav[i].part}<br>`;
    }
  }
  ID(destElementId).innerHTML = valasz;
}


//7. feladat:
function gyoztesekKorzetenkentKiirIDSzerint(destTableID, szav) {
  var tab = ID(destTableID);
	tab.innerHTML = "";
	var korzetek = korzetLista(szav);

	for (let i = 0; i < korzetek.length; i++) {
	  let korzet = korzetAdatok(korzetek[i], szav);
    var maxSzavazat = korzet[0].szavazat;
		for (let j = 0; j < korzet.length; j++) {
			if (korzet[j].szavazat > maxSzavazat) {
				maxSzavazat = korzet[j].szavazat;
			}
		}
		
		for (let j = 0; j < korzet.length; j++) {
			if (korzet[j].szavazat >= maxSzavazat) {
				let sor = tab.insertRow(-1);
				let korzetCell = sor.insertCell(0);
				let jeloltCell = sor.insertCell(1);
				let partCell = sor.insertCell(2);
				let szavCell = sor.insertCell(3);
				korzetCell.appendChild(document.createTextNode(korzet[j].korzet));
				jeloltCell.appendChild(document.createTextNode(korzet[j].nev.trim()));
				partCell.appendChild(document.createTextNode(korzet[j].part == '-' ? "Független" : korzet[j].part));
				szavCell.appendChild(document.createTextNode(korzet[j].szavazat));
			}
		}
	}
}

function korzetLista(szav) {
  korzetek = [];
	for (let i = 0; i < szav.length; i++) {
	  if(!korzetek.includes(szav[i].korzet)) korzetek.push(szav[i].korzet);
	}
	return korzetek.sort();
}

function korzetAdatok(kor, szav) {
  var korzetTomb = [];
	for (let i = 0; i < szav.length; i++) {
	  if(Number(szav[i].korzet) == Number(kor)) korzetTomb.push(szav[i]);
	}
	return korzetTomb;
}
