import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication.routing';

@NgModule({
  declarations: [SignupComponent, LoginComponent, AuthenticationComponent],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
