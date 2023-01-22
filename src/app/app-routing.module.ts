import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './component/auth/login/login.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { DoctorsListViewComponent } from './doctors-list-view/doctors-list-view.component';
import { HeaderComponent } from './header/header.component';
import { PatientsComponent } from './patients/patients.component';
import { AuthguardGuard } from './shared/guard/authguard.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"application",
  component:ApplicationComponent,
  children:[
    {path:"dashboard",component:DetailsComponent},
    {path:'doctors',component:DoctorsListViewComponent},
    {path:'patients',component:PatientsComponent}

   
  ],canActivate:[AuthguardGuard]},
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:"signup",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
