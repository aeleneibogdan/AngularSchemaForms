import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.scss']
})
export class FormdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mySchema = {
    "properties": {
      "agent-selector":{
        "widget": "agent-selector",
        "type": "array",
        "items":{
          "type": "string"
        },
        "people":[
          "Ionut Popescu", "Dan Ionescu" , "Vlad Popa", "Mihai Ionescu",
        ],
        "selectedPeople":[
        ],  
      },
        "proiect":{
          "widget":"widgetnou",
          "type": "array",
          "items":{
            "type":"string"
          },
        },
        "taskdoi":{
          "widget":"tasktwo",
          "type": "array",
          "items":{
            "type":"string"
          }
        }
      }
  } as any;
  handleEvent(event: any){
    console.log(event);
    
  }
}
