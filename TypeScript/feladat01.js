//TypeScript:
function primEljaras(p) {
    var prim = 1;
    for (var i = 2; i < p / 2; i++) {
        if (p % i == 0) {
            prim = 0;
            break;
        }
    }
    if (prim)
        document.write(p + " prím szám.<br>");
    else
        document.write(p + " összetett szám, legkisebb osztója:" + i + "<br>");
}
primEljaras(11);
primEljaras(10);
function koordinata(x, y) {
    if (x == 0 && y == 0)
        document.write("x: ".concat(x, ", y: ").concat(y, ": ORIG\u00D3"));
    else if (x == 0)
        document.write("x: ".concat(x, ", y: ").concat(y, ": Y tengelyen"));
    else if (y == 0)
        document.write("x: ".concat(x, ", y: ").concat(y, ": X tengelyen"));
    else if (x > 0 && y > 0)
        document.write("x: ".concat(x, ", y: ").concat(y, ": I. s\u00EDknegyed"));
    else if (x < 0 && y > 0)
        document.write("x: ".concat(x, ", y: ").concat(y, ": II. s\u00EDknegyed"));
    else if (x < 0 && y < 0)
        document.write("x: ".concat(x, ", y: ").concat(y, ": III. s\u00EDknegyed"));
    else if (x > 0 && y < 0)
        document.write("x: ".concat(x, ", y: ").concat(y, ": IV. s\u00EDknegyed"));
    document.write('<br>');
}
koordinata(10, -1);
function melyikANagyobb(a, b, c) {
    if (a >= b && a >= c)
        return a;
    else if (b >= a && a >= c)
        return b;
    else
        return c;
}
document.write(melyikANagyobb(1, 2, 3) + '<br>');
document.write(melyikANagyobb(1, 2, 1) + '<br>');
function szorgalomSzovegesErtekeles(jegy) {
    if (jegy == 5)
        document.write("Példás<br>");
    else if (jegy == 4)
        document.write("Jó<br>");
    else if (jegy == 3)
        document.write("Változó<br>");
    else if (jegy == 2)
        document.write("Hanyag<br>");
    else
        document.write("Nem szorgalom jegy.<br>");
}
szorgalomSzovegesErtekeles(3);
function tizennyolcPlusz(kor) {
    return kor >= 18;
}
document.write(tizennyolcPlusz(18) + "<br>");
function LNKO(a, b) {
    var lnko = 1;
    for (var i = 1; i <= a; i++) {
        if (a % i == 0 && b % i == 0)
            lnko = i;
    }
    return lnko;
}
document.write("LNKO: " + LNKO(20, 12) + "<br>");
function szamtaniSorozatGenerator(kezd, d, db) {
    kezd = Number(kezd);
    d = Number(d);
    db = Number(db);
    for (var i = 0; i < db; i++) {
        document.write(kezd + ", ");
        kezd += d;
    }
    document.write('<br>');
}
szamtaniSorozatGenerator(10, 3, 5);
function primFuggveny(p) {
    var prim = true;
    for (var i = 2; i < p / 2; i++) {
        if (p % i == 0) {
            prim = false;
            break;
        }
    }
    return prim;
}
document.write(primFuggveny(10) + "<br>");
function parosGenerator(also, felso) {
    var r = Math.round(Math.random() * (felso - also)) + also;
    if (r % 2 == 0)
        return r;
    else if ((r + 1) <= felso)
        return r + 1;
    else if ((r - 1) >= also)
        return r - 1;
    else
        return undefined;
}
document.write("Generált páros: " + parosGenerator(10, 15) + "<br>");
function kettoHatvanyai(db) {
    for (var i = 0; i < db; i++) {
        document.write(Math.pow(2, i) + ", ");
    }
    document.write('<br>');
}
kettoHatvanyai(10);
function szerkeszthetoHaromszog(a, b, c) {
    if ((a + b) < c || (a + c) < b || (b + c) < a)
        return false;
    else
        return true;
}
document.write("Háromszög: " + szerkeszthetoHaromszog(1, 2, 4) + '<br>');
function negyzetTerulet(a) {
    return a * a;
}
function negyzetKerulet(a) {
    return 4 * a;
}
function eredmenyKiirato(a) {
    document.write("".concat(a, " oldalhossz\u00FAs\u00E1g\u00FA n\u00E9gyzet ker\u00FClete: ").concat(negyzetKerulet(a), ", ter\u00FClete: ").concat(negyzetTerulet(a), ".<br>"));
}
eredmenyKiirato(12);
