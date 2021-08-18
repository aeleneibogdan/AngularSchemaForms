import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "ngx-schema-form";
import { AgentSelectorComponent } from './agent-selector/agent-selector.component';
import { WidgetRegistryService } from "./customWidgetRegistry";
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { WidgetnouComponent } from './widgetnou/widgetnou.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TasktwoComponent} from './tasktwo/tasktwo.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    FormdemoComponent,
    AgentSelectorComponent,
    WidgetnouComponent,
    TasktwoComponent
  ],
  imports: [
    SchemaFormModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [{provide: WidgetRegistry, useClass: WidgetRegistryService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
