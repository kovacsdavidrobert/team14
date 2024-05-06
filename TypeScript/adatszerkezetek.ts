var tuple: [string, number];



enum fizetesTipusok{
    juniorFrontEnd = 600000,
    juniorBackEnd = 650000
}

var koviFizetese:fizetesTipusok = fizetesTipusok.juniorFrontEnd;



interface Dolgozo{
    nev:string;
    eletkor:number;
    aktiv:boolean;
}

var interObj:Dolgozo = {
    nev: "Pista",
    eletkor: 33,
    aktiv: true
}
