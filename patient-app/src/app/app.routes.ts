import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { authorizationGuard } from './services/authorization.guard';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegistrationComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate:[authorizationGuard]
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
