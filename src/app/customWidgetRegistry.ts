import { WidgetRegistry, DefaultWidgetRegistry } from "ngx-schema-form"
import { AgentSelectorComponent } from "./agent-selector/agent-selector.component";
import { TasktwoComponent } from "./tasktwo/tasktwo.component";
import { WidgetnouComponent } from "./widgetnou/widgetnou.component";

export class WidgetRegistryService extends DefaultWidgetRegistry {
  constructor() {
    super();
    this.register('agent-selector', AgentSelectorComponent);
    this.register('widgetnou', WidgetnouComponent);
    this.register('tasktwo', TasktwoComponent);
  }
}