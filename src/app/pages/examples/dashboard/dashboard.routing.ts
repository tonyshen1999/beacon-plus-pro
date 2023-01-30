import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { ImportComponent } from '../import/import.component';

export const DashboardRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "import",
        component: ImportComponent
      }]
  }
];
