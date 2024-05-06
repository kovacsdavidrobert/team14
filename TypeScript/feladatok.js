function keruletF(a, b) {
    return 2 * (a + b);
}
function teruletF(a, b) {
    return a * b;
}
var a = 2;
var b = 3;
console.log("A ker\u00FClet: a:".concat(a, ", b:").concat(b, " = ").concat(keruletF(a, b)));
console.log("A ter\u00F6let: a:".concat(a, ", b:").concat(b, " = ").concat(teruletF(a, b)));
function erdemjegy(jegy) {
    if (jegy == 5)
        return "Jeles";
    else if (jegy == 4)
        return "Jó";
    else if (jegy == 3)
        return "Közepes";
    else if (jegy == 2)
        return "Elégséges";
    else if (jegy == 1)
        return "Elégtelen";
    else
        return "Nem megfelelő jegy";
}
console.log(erdemjegy(Number(prompt("Kérem az érdemjegyet!"))));
