var tomb = [23, 44, -4, 91, 32, -4, 46, 79, 19, 91];
//Osszegzes:
function Osszegzes(t) {
    var osszeg = 0;
    for (var i = 0; i < t.length; i++) {
        osszeg += t[i];
    }
    return osszeg;
}
console.log(Osszegzes(tomb));
//Atlag:
function Atlag(t) {
    var osszeg = 0;
    for (var i = 0; i < t.length; i++) {
        osszeg += t[i];
    }
    return osszeg / t.length;
}
console.log(Atlag(tomb));
//Mindkettő:
function Mindketto(t) {
    var osszeg = 0;
    for (var i = 0; i < t.length; i++) {
        osszeg += t[i];
    }
    return [osszeg, osszeg / t.length];
}
console.log(Mindketto(tomb));
function minMaxAndIndex(t) {
    var max = t[0];
    var maxIndex = 0;
    for (var i = 0; i < t.length; i++) {
        if (max < t[i]) {
            max = t[i];
            maxIndex = i;
        }
    }
    var min = t[0];
    var minIndex = 0;
    for (var i = 0; i < t.length; i++) {
        if (min > t[i]) {
            min = t[i];
            minIndex = i;
        }
    }
    return [min, minIndex, max, maxIndex];
}
console.log(minMaxAndIndex(tomb));
function minMaxAndIndexArr(t) {
    var max = t[0];
    var maxIndex = [];
    for (var i = 0; i < t.length; i++) {
        if (max < t[i]) {
            max = t[i];
        }
    }
    var min = t[0];
    var minIndex = [];
    for (var i = 0; i < t.length; i++) {
        if (min > t[i]) {
            min = t[i];
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (t[i] == max)
            maxIndex.push(i);
        if (t[i] == min)
            minIndex.push(i);
    }
    return [min, minIndex, max, maxIndex];
}
console.log(minMaxAndIndexArr(tomb));
function paratlanSzamokEsIndexeik(t) {
    var db = 0;
    var indexek = [];
    for (var i = 0; i < t.length; i++) {
        if (t[i] % 2 == 1) {
            db++;
            indexek.push(i);
        }
    }
    return [db, indexek];
}
console.log(paratlanSzamokEsIndexeik(tomb));
function parosSzamokEsIndexeik(t) {
    var db = 0;
    var indexek = [];
    for (var i = 0; i < t.length; i++) {
        if (t[i] % 2 == 0) {
            db++;
            indexek.push(i);
        }
    }
    return [db, indexek];
}
console.log(parosSzamokEsIndexeik(tomb));
