import { Component, OnInit } from '@angular/core';
import { FormProperty, StringWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-agent-selector',
  templateUrl: './agent-selector.component.html',
  styleUrls: ['./agent-selector.component.scss']
})
export class AgentSelectorComponent extends StringWidget  implements OnInit {
  selectedAgents: any;
  agents: any;
  ngOnInit(): void {
    this.agents = this.formProperty.findRoot().getProperty("agent-selector").schema.people;
    this.selectedAgents = this.formProperty.findRoot().getProperty("agent-selector").schema.selectedPeople;
    console.log("ok");
  }
  handleClick(): void{
    this.agents.push("Salut");

  }
  handleSelected(agent: any): void{
    if(this.selectedAgents.find((value: any) =>  value == agent))
    {
      console.log("sters");
      this.selectedAgents =  this.selectedAgents.filter((value: any) => {
        // console.log(value, agent);
        return value !== agent}
        );
    }
    else{
      console.log("adaugat");
      this.selectedAgents.push(agent);
    }
  }
  
  logAgents(){
    console.log(this.selectedAgents);
    // this.formProperty.findRoot().getProperty("agent-selector").setValue(this.agents , false);
    this.formProperty.findRoot().getProperty("agent-selector").setValue({"selectedAgents": this.selectedAgents, "agents":this.agents}, false);
  }  
  

}
