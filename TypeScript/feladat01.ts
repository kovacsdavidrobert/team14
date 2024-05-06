//TypeScript:

  function primEljaras(p:number):void {
    let prim:number = 1;
    for (var i = 2; i < p/2; i++) {
      if (p%i == 0) {
        prim = 0;
        break;
      }
    }
    if(prim) document.write(p + " prím szám.<br>");
    else document.write(p + " összetett szám, legkisebb osztója:" + i + "<br>");
  }
  primEljaras(11);
  primEljaras(10);

  function koordinata(x:number,y:number):void {
    if(x==0 && y==0)       document.write(`x: ${x}, y: ${y}: ORIGÓ`);
    else if(x==0)          document.write(`x: ${x}, y: ${y}: Y tengelyen`);
    else if(y==0)          document.write(`x: ${x}, y: ${y}: X tengelyen`);
    else if(x > 0 && y > 0)document.write(`x: ${x}, y: ${y}: I. síknegyed`);
    else if(x < 0 && y > 0)document.write(`x: ${x}, y: ${y}: II. síknegyed`);
    else if(x < 0 && y < 0)document.write(`x: ${x}, y: ${y}: III. síknegyed`);
    else if(x > 0 && y < 0)document.write(`x: ${x}, y: ${y}: IV. síknegyed`);
    document.write('<br>');
  }
  koordinata(10, -1);

  function melyikANagyobb(a:number,b:number,c:number):number {
    if(a>=b && a>=c) return a;
    else if(b>=a && a>=c) return b;
    else return c;
  }
  document.write(melyikANagyobb(1,2,3) + '<br>');
  document.write(melyikANagyobb(1,2,1) + '<br>');

  function szorgalomSzovegesErtekeles(jegy:number):void {
    if(jegy == 5)document.write("Példás<br>");
    else if(jegy == 4)document.write("Jó<br>");
    else if(jegy == 3)document.write("Változó<br>");
    else if(jegy == 2)document.write("Hanyag<br>");
    else document.write("Nem szorgalom jegy.<br>");
  }
  szorgalomSzovegesErtekeles(3);

  function tizennyolcPlusz(kor:number):boolean {
    return kor>=18;
  }
  document.write(tizennyolcPlusz(18) + "<br>");

  function LNKO(a:number,b:number):number {
    let lnko:number = 1;
    for (let i = 1; i <= a; i++) {
      if(a%i==0 && b%i==0) lnko = i;
    }
    return lnko;
  }
  document.write("LNKO: "+ LNKO(20,12) + "<br>");

  function szamtaniSorozatGenerator(kezd:number, d:number, db:number):void {
    kezd = Number(kezd);
    d = Number(d);
    db = Number(db);
    for (let i = 0; i < db; i++) {
      document.write(kezd + ", ");
      kezd +=d;
    }
    document.write('<br>');
  }
  szamtaniSorozatGenerator(10,3,5);

  function primFuggveny(p:number):boolean {
    let prim:boolean = true;
    for (var i = 2; i < p/2; i++) {
      if (p%i == 0) {
        prim = false;
        break;
      }
    }
    return prim;
  }
  document.write(primFuggveny(10) + "<br>");

  function parosGenerator(also:number, felso:number):any {
    var r:number = Math.round(Math.random()*(felso-also)) + also;
    if(r%2==0) return r;
    else if((r+1)<= felso) return r+1;
    else if((r-1)>= also) return r-1;
    else return undefined;
  }
  document.write("Generált páros: " + parosGenerator(10, 15) + "<br>");

  function kettoHatvanyai(db:number):void {
    for (let i = 0; i < db; i++) {
      document.write(2**i + ", ");
    }
    document.write('<br>');
  }
  kettoHatvanyai(10);

  function szerkeszthetoHaromszog(a:number, b:number, c:number):boolean {
    if((a+b)<c || (a+c)<b || (b+c)<a) return false;
    else return true;
  }
  document.write("Háromszög: " + szerkeszthetoHaromszog(1,2,4) + '<br>');

  function negyzetTerulet(a:number):number {
    return a*a;
  }
  function negyzetKerulet(a:number):number {
    return 4*a;
  }

  function eredmenyKiirato(a) {
    document.write(`${a} oldalhosszúságú négyzet kerülete: ${negyzetKerulet(a)}, területe: ${negyzetTerulet(a)}.<br>`);
  }
  eredmenyKiirato(12);
