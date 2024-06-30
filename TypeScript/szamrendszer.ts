function BinStringToNuber(szam:string):number{
    var bitekSTR:string[] = szam.split('');
    var bitek:number[] = [];
    for(let i = (bitekSTR.length - 1);i >= 0; i--){
        bitek.push(Number(bitekSTR[i]));
    }
    var retNum:number = 0;
    for(let i = 0;i < bitek.length;i++){
        retNum += bitek[i] * (2**i);
    }
    return retNum;
}

console.log('Bináris 0001010:');
console.log(BinStringToNuber('0001010'));

function AnyNumberStringToNuber(szam:string|number, szamrendszer:number):number{
    var helyiertekekSTR:string[] = szam.toString().split('');
    var helyiertekek:number[] = [];
    for(let i = (helyiertekekSTR.length - 1);i >= 0; i--){
        helyiertekek.push(Number('0x' + helyiertekekSTR[i]));
    }
    var retNum:number = 0;
    for(let i = 0;i < helyiertekek.length;i++){
        retNum += helyiertekek[i] * (szamrendszer**i);
    }
    return retNum;
}

console.log('Bináris (uni) 0001010:');
console.log(AnyNumberStringToNuber('001010', 2));

console.log('Hexa ff:');
console.log(AnyNumberStringToNuber('ff', 16));


console.log('okta 475:');
console.log(AnyNumberStringToNuber('475', 8));

function AnyNumberStringToNuberTESZT(ertek:string|number, szamrendszer:number, elvartEredmeny:number):void{
    console.log(AnyNumberStringToNuber(ertek, szamrendszer) === elvartEredmeny ? 'SIKER' :
       `HIBA! Átváltandó:${ertek}, Számrendszer: ${szamrendszer}, elvárt: ${elvartEredmeny}`);
}

AnyNumberStringToNuberTESZT('001010', 2, 10);
AnyNumberStringToNuberTESZT('ff', 16, 255);
AnyNumberStringToNuberTESZT(123, 8, 83);

function tizesbolBarmelyikSzamrendszerbe(szam:number, szamRendszer:number):string{
    var retString:string = "";
    for(let i:number = 10;i >= 0;i--){
        let helyiertek:number = 0;
        helyiertek = Math.floor(szam / (szamRendszer**i));
        retString += helyiertek.toString(16);
        szam -= helyiertek * szamRendszer**i;
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

function tizesbolBarmelyikSzamrendszerbeFeri(szam:number, szamRendszer:number):string{
    var retString:string = "";
    while(szam > 0){
        retString = (szam % szamRendszer).toString(32) + retString;//Felcserélés
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










