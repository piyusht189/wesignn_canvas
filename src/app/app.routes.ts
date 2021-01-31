import { Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './static/home/home.component';
import { LoginComponent } from './static/login/login.component';
import { RouteGuardService } from './services/route-guard.service';
import { TestCanvasComponent } from "./dynamic/components/test-canvas/test-canvas.component";


export const ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "login/:ended", component: LoginComponent },
    { path: "login/:email/:password", component: LoginComponent },
    { path: "test-canvas", component: TestCanvasComponent },
    /*{ path: "dashboard", component: DashboardComponent, canActivate: [RouteGuardService] },*/
    { path: "**", redirectTo: "" }
];
