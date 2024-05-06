/*A megoldásodat ebben a fájlban készítsd el, majd fordítsd le typeScript compiler segítségével*/
//1. feladat, karakterek számlálása egy szövegben:
function KivalasztottBetuk(vizsgaltSzoveg, kivalasztottBetuk) {
    var nullVagyTomb = vizsgaltSzoveg.match(new RegExp("[" + kivalasztottBetuk.join('') + "]", "g"));
    return nullVagyTomb === null ? 0 : nullVagyTomb.length;
}
//2. feladat, számtani sorozat e:
function Szamtani(elsoErtek, masodikErtek, harmadikErtek) {
    return harmadikErtek - masodikErtek == masodikErtek - elsoErtek;
}
//3. feladat, pont alapján érdemjegy:
function VizsgaJegy(osszPont) {
    if (osszPont >= 0 && osszPont <= 49)
        return "Elégtelen";
    if (osszPont <= 59)
        return "Elégséges";
    if (osszPont <= 69)
        return "Közepes";
    if (osszPont <= 79)
        return "Jó";
    if (osszPont <= 100)
        return "Jeles";
    return "Hibás adat!";
}
