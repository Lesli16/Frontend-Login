import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path : 'home',
    component:HomeComponent,
    pathMatch : 'full'
  },

  {
    path:'signup',
    component:SignupComponent,
    pathMatch : 'full'
  }, 

  {
    path: 'login',
    component:LoginComponent,
    pathMatch : 'full'
  },

  {
    path:'admin',
    component:DashboardComponent,
    pathMatch:'full'
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
