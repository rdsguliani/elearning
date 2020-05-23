import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth-service.service';

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
