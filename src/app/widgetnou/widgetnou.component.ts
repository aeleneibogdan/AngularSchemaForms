import { Component, OnInit } from '@angular/core';
import { StringWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-widgetnou',
  templateUrl:'./widgetnou.component.html',
  styleUrls: ['./widgetnou.component.scss']
})
export class WidgetnouComponent extends StringWidget implements OnInit {
  
  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.rowProducts2);
  }

  tabelHeaders=["Denumire grupa de produse", "Discount(%)"];
  rowProducts=[
    {
      "firstColumn": "Denumire grupa de produse PAVAJ PREMIUM",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse PAVAJ CLASIC",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse BORDURI",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse RIGOLE",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse BOLTARI",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse DALE",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse PENTRU GRADINA",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse:BLOCHETI(fara Pin)",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse:PIATRA NATURALA ANDEZIT",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse:PREFABRICATIE CANALIZARE(mai putin tuburile armate)",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse:PLACI CERAMICE",
      "Discount": "5"
    },
    {
      "firstColumn": "Denumire grupa de produse:PRODUSE AUXILIARE",
      "Discount": "5"
    }
  ];

  tabelHeaders2 = ["Denumire produs", "Pret(RON)", "Discount(%)", "Pret cu discount(RON)"]
  rowProducts2=[
    {
      "firstColumnList":"Pavaj declasat 6cm",
      "secondColumnList":"20,00",
      "Discount":"0",
      "fourthColumnList":"20,00"
    },
    {
      "firstColumnList":"Cost manopera piesa trecere",
      "secondColumnList":"50,00",
      "Discount":"0",
      "fourthColumnList":"50,00"
    },
    {
      "firstColumnList":"Cost manopera manipulare",
      "secondColumnList":"50,00",
      "Discount":"10",
      "fourthColumnList":"45,00"
    },
    {
      "firstColumnList":"Cost manopera gaurire element de baza",
      "secondColumnList":"50,00",
      "Discount":"0",
      "fourthColumnList":"50,00"
    } 
  ];
counter=0;
handleClickOnDelete(counter: any): void{
  this.rowProducts2.splice(this.counter,1);
  console.log("Produs sters");
}
}
