var tomb=[];
document.write("Tömb elemei:<hr>");
for(let i = 0;i < 10;i++){
  tomb.push(Math.round(Math.random()*100));
}
document.write(tomb);


document.write("<br><br>Átlag:<hr>");
var osszeg = 0;
for(let i = 0;i < tomb.length;i++){
   osszeg += tomb[i];
}
document.write(`${osszeg/tomb.length}`);

document.write("<br><br>MIN/MAX:<hr>");
var min = tomb[0];
var max = tomb[0];
for(let i = 0;i < tomb.length;i++){
   max = tomb[i] > max ? tomb[i] : max;
   min = tomb[i] < min ? tomb[i] : min;
}
document.write(`MIN: ${min}, MAX: ${max}`);

document.write("<br><br>Páros számok:<hr>");
var paros = 0;
for(let i = 0;i < tomb.length;i++){
   if(tomb[i]%2==0){
     paros++;
   }
}
document.write(`Páros: ${paros}db`);

document.write("<br><br>Kiválogatás:<hr>");
for(let i = 0;i < tomb.length;i++){
   if(tomb[i]%2==0){
     document.write(`${tomb[i]}, `);     
   }
}