import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { IntroComponent } from './intro/intro.component';
import { PaginatorComponent } from './paginator/paginator.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'home', component: IntroComponent },
  { path: 'userData', component: PaginatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
