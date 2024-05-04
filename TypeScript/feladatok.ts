function keruletF(a:number, b:number):number{
    return 2 * (a + b);
}
function teruletF(a:number, b:number):number{
    return a * b;
}

var a:number = 2;
var b:number = 3;
console.log(`A kerület: a:${a}, b:${b} = ${keruletF(a, b)}`);

console.log(`A terölet: a:${a}, b:${b} = ${teruletF(a, b)}`);

function erdemjegy(jegy:number):string{
 if(jegy == 5) return "Jeles";
    else if(jegy == 4) return "Jó";
    else if(jegy == 3) return "Közepes";
    else if(jegy == 2) return "Elégséges";
    else if(jegy == 1) return "Elégtelen";
    else return "Nem megfelelő jegy";
}

console.log(erdemjegy(Number(prompt("Kérem az érdemjegyet!"))));
