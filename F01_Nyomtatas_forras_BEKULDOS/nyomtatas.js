function kalkulal(){
    //Űrlapadatok
    const szelesseg = ID("szelesseg").value;
    const magassag = ID("magassag").value;
    const papir=document.getElementById('papirtipus').value;
    //Számítások
    let terulet=Math.round((szelesseg*magassag)/10000);    
    let koltseg=terulet*papir;
    //Beírás az innerHTML-be:
    ID("terulet").innerHTML = terulet;
    ID("papir").innerHTML = papir;
    ID("koltseg").innerHTML = koltseg;
    //Megjelenítés
    document.getElementById('valasz').style.visibility = "visible";
}

function ID(id) {
  return document.getElementById(id);
}