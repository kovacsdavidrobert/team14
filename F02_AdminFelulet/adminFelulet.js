var mindAktiv = true;

function aktivalasDeaktivalas(gomb) {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = mindAktiv;
    }
    if(mindAktiv){
      gomb.innerHTML = "Minden kijelülést megszüntet";
      mindAktiv = false;
    }
    else {
      gomb.innerHTML = "Mindenkit kijelöl";
      mindAktiv = true;
    }
}

function aktivalasToggle() {
  let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
      elemLista[i].checked = !elemLista[i].checked;
    }
}


function stripedToggle(gomb) {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.toggle("table-striped");
    if(kivalsztottTablazat.classList.contains('table-striped')) gomb.innerHTML = "Sávizás ki";
    else gomb.innerHTML = "Sávizás be";
}


function darkToggle(gomb) {
    let kivalsztottTablazat = document.querySelector("table");
    if (kivalsztottTablazat.classList.contains("table-light")) {
      kivalsztottTablazat.classList.add("table-dark");
      kivalsztottTablazat.classList.remove("table-light");
      gomb.innerHTML = "Világos mód";
    }
    else {
      kivalsztottTablazat.classList.add("table-light");
      kivalsztottTablazat.classList.remove("table-dark");
      gomb.innerHTML = "Sötét mód";    
    }
}


function TesztSorBeszuras() {
    let kivalsztottTablazat = document.querySelector("table");
    let sor = kivalsztottTablazat.insertRow();//-1 paraméter is lehet az insertRow-ban...
    let vezetekNevCella = sor.insertCell(0);
    let keresztNevCella = sor.insertCell(1);
    let emailCella = sor.insertCell(2);
    let telefonCella = sor.insertCell(3);
    let beosztasCella = sor.insertCell(4);
    let aktivalCella = sor.insertCell(5);

    vezetekNevCella.innerHTML = "teszt";
    keresztNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = '<input type="checkbox" class="allapot">';
}


function ujElemHozzaadHaMegfelelo() {
    if (  document.querySelector("#vezNev").checkValidity()
       && document.querySelector("#kerNev").checkValidity()
       && document.querySelector("#email").checkValidity()
       && document.querySelector("#tel").checkValidity()  
       && document.querySelector("#vezNev").value.length
       && document.querySelector("#kerNev").value.length
       && document.querySelector("#email").value.length
       && document.querySelector("#tel").value.length         
       ) {
          let kivalsztottTablazat = document.querySelector("table");
          let sor = kivalsztottTablazat.insertRow();//-1 paraméter is lehet az insertRow-ban...
          let vezetekNevCella = sor.insertCell(0);
          let keresztNevCella = sor.insertCell(1);
          let emailCella = sor.insertCell(2);
          let telefonCella = sor.insertCell(3);
          let beosztasCella = sor.insertCell(4);
          let aktivalCella = sor.insertCell(5);
      
          vezetekNevCella.innerHTML = document.querySelector("#vezNev").value;
          keresztNevCella.innerHTML = document.querySelector("#kerNev").value;
          emailCella.innerHTML = document.querySelector("#email").value;
          telefonCella.innerHTML = document.querySelector("#tel").value;
          beosztasCella.innerHTML = document.querySelector("#beosztas").value;
          aktivalCella.innerHTML = '<input type="checkbox" class="allapot">';
          ujDolgozoDialog.close();
    }
    else {
      document.querySelector("#vezNev").required = "required";
      document.querySelector("#kerNev").required = "required";
      document.querySelector("#email").required = "required";
      document.querySelector("#tel").required = "required";
      uzenet.innerHTML = "Formátum nem megfelelő, vagy kitöltetlen mező!";
      uzenet.className = 'text-warning';
    }
}
