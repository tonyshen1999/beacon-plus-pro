import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// import { ChartsModule } from "ng2-charts";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ImportRoutes } from "./import.routing";

import { ImportComponent } from "./import.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ImportRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [ImportComponent],
  exports: [ImportComponent]
})
export class ImportModule {}
