import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const enum AuthRoutes {
  REGISTER = 'register',
  SIGNIN = 'signin'
}


const authRoutes: Routes = [
  { path: AuthRoutes.REGISTER, component: RegisterComponent},
  { path: AuthRoutes.SIGNIN, component: SignInComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
