function BinStringToNuber(szam) {
    var bitekSTR = szam.split('');
    var bitek = [];
    for (var i = (bitekSTR.length - 1); i >= 0; i--) {
        bitek.push(Number(bitekSTR[i]));
    }
    var retNum = 0;
    for (var i = 0; i < bitek.length; i++) {
        retNum += bitek[i] * (Math.pow(2, i));
    }
    return retNum;
}
console.log('Bináris 0001010:');
console.log(BinStringToNuber('0001010'));
function AnyNumberStringToNuber(szam, szamrendszer) {
    var helyiertekekSTR = szam.toString().split('');
    var helyiertekek = [];
    for (var i = (helyiertekekSTR.length - 1); i >= 0; i--) {
        helyiertekek.push(Number('0x' + helyiertekekSTR[i]));
    }
    var retNum = 0;
    for (var i = 0; i < helyiertekek.length; i++) {
        retNum += helyiertekek[i] * (Math.pow(szamrendszer, i));
    }
    return retNum;
}
console.log('Bináris (uni) 0001010:');
console.log(AnyNumberStringToNuber('001010', 2));
console.log('Hexa ff:');
console.log(AnyNumberStringToNuber('ff', 16));
console.log('okta 475:');
console.log(AnyNumberStringToNuber('475', 8));
function AnyNumberStringToNuberTESZT(ertek, szamrendszer, elvartEredmeny) {
    console.log(AnyNumberStringToNuber(ertek, szamrendszer) === elvartEredmeny ? 'SIKER' :
        "HIBA! \u00C1tv\u00E1ltand\u00F3:".concat(ertek, ", Sz\u00E1mrendszer: ").concat(szamrendszer, ", elv\u00E1rt: ").concat(elvartEredmeny));
}
AnyNumberStringToNuberTESZT('001010', 2, 10);
AnyNumberStringToNuberTESZT('ff', 16, 255);
AnyNumberStringToNuberTESZT(123, 8, 83);
function tizesbolBarmelyikSzamrendszerbe(szam, szamRendszer) {
    var retString = "";
    for (var i = 10; i >= 0; i--) {
        var helyiertek = 0;
        helyiertek = Math.floor(szam / (Math.pow(szamRendszer, i)));
        retString += helyiertek.toString(16);
        szam -= helyiertek * Math.pow(szamRendszer, i);
    }
    return retString;
}
console.log("200_2 " + tizesbolBarmelyikSzamrendszerbe(200, 2));
console.log("200_3 " + tizesbolBarmelyikSzamrendszerbe(200, 3));
console.log("200_4 " + tizesbolBarmelyikSzamrendszerbe(200, 4));
console.log("200_8 " + tizesbolBarmelyikSzamrendszerbe(200, 8));
console.log("200_9 " + tizesbolBarmelyikSzamrendszerbe(200, 9));
console.log("200_10 " + tizesbolBarmelyikSzamrendszerbe(200, 10));
console.log("200_16 " + tizesbolBarmelyikSzamrendszerbe(200, 16));
function tizesbolBarmelyikSzamrendszerbeFeri(szam, szamRendszer) {
    var retString = "";
    while (szam > 0) {
        retString = (szam % szamRendszer).toString(32) + retString;
        szam = Math.floor(szam / szamRendszer);
    }
    return retString;
}
console.log("200_2 " + tizesbolBarmelyikSzamrendszerbeFeri(200, 2));
console.log("200_3 " + tizesbolBarmelyikSzamrendszerbeFeri(200, 3));
console.log("200_4 " + tizesbolBarmelyikSzamrendszerbeFeri(200, 4));
console.log("200_8 " + tizesbolBarmelyikSzamrendszerbeFeri(200, 8));
console.log("200_9 " + tizesbolBarmelyikSzamrendszerbeFeri(200, 9));
console.log("200_10 " + tizesbolBarmelyikSzamrendszerbeFeri(200, 10));
console.log("200_16 " + tizesbolBarmelyikSzamrendszerbeFeri(200, 16));
