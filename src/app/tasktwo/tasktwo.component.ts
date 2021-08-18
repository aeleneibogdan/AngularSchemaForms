import { Component, OnInit } from '@angular/core';
import { StringWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-tasktwo',
  templateUrl: './tasktwo.component.html',
  styleUrls: ['./tasktwo.component.scss']
})
export class TasktwoComponent extends StringWidget implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
