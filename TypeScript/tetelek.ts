var tomb:number[] = [23,44,-4,91,32,-4,46,79,19,91];

//Osszegzes:
function Osszegzes(t:number[]):number{
    let osszeg:number = 0;
    for(let i = 0;i < t.length;i++){
        osszeg += t[i];
    }
    return osszeg;
}

console.log(Osszegzes(tomb));


//Atlag:
function Atlag(t:number[]):number{
    let osszeg:number = 0;
    for(let i = 0;i < t.length;i++){
        osszeg += t[i];
    }
    return osszeg / t.length;
}

console.log(Atlag(tomb));


//Mindkettő:
function Mindketto(t:number[]):[number, number]{
    let osszeg:number = 0;
    for(let i = 0;i < t.length;i++){
        osszeg += t[i];
    }
    return [osszeg, osszeg / t.length];
}

console.log(Mindketto(tomb));


function minMaxAndIndex(t:number[]):[number, number, number, number]{
    var max:number = t[0];
    var maxIndex:number = 0;
    for(let i = 0;i < t.length;i++){
        if(max < t[i]){
            max = t[i];
            maxIndex = i;
        }
    }

    var min:number = t[0];
    var minIndex:number = 0;
    for(let i = 0;i < t.length;i++){
        if(min > t[i]){
            min = t[i];
            minIndex = i;

        }
    }

    return [min, minIndex, max, maxIndex];
}

console.log(minMaxAndIndex(tomb));

function minMaxAndIndexArr(t:number[]):[number, number[], number, number[]]{
    var max:number = t[0];
    var maxIndex:number[] = [];
    for(let i = 0;i < t.length;i++){
        if(max < t[i]){
            max = t[i];
        }
    }

    var min:number = t[0];
    var minIndex:number[] = [];
    for(let i = 0;i < t.length;i++){
        if(min > t[i]){
            min = t[i];
        }
    }

    for(let i = 0;i < t.length;i++){
        if(t[i] == max) maxIndex.push(i);
        if(t[i] == min) minIndex.push(i);
    }

    return [min, minIndex, max, maxIndex];
}

console.log(minMaxAndIndexArr(tomb));


function paratlanSzamokEsIndexeik(t:number[]):[number, number[]]{
    var db:number=0;
    var indexek:number[]=[];
    for(let i = 0;i < t.length;i++){
        if(t[i] % 2 == 1){
            db++;
            indexek.push(i);
        }
    }
    return [db, indexek];
}

console.log(paratlanSzamokEsIndexeik(tomb));


function parosSzamokEsIndexeik(t:number[]):[number, number[]]{
    var db:number=0;
    var indexek:number[]=[];
    for(let i = 0;i < t.length;i++){
        if(t[i] % 2 == 0){
            db++;
            indexek.push(i);
        }
    }
    return [db, indexek];
}

console.log(parosSzamokEsIndexeik(tomb));
