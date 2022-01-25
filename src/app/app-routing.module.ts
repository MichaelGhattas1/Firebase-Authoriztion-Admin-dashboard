import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CodeComponent } from './code/code.component';
import { DashboerdComponent } from './dashboerd/dashboerd.component';
import { LoginComponent } from './login/login.component';
import { VerificationGuard } from './verification.guard';


const routes: Routes = [
  {path:'', redirectTo:'/login' , pathMatch:'full'},
  {path:"login" , component:LoginComponent},
  {path:"code" ,canActivate:[AuthGuard], component:CodeComponent},
  {path:"dashboerd" ,canActivate:[VerificationGuard], component:DashboerdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
