import { Routes } from "@angular/router";
import {ImportComponent} from "./import.component"


export const ImportRoutes: Routes = [

    {
        path: "import",
        children: [
          {
            path: "",
            component: ImportComponent
          }
        ]
    },
  ];
  