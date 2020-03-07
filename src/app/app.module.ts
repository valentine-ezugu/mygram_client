import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule, MatIconRegistry
} from '@angular/material';
import 'hammerjs';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountMenuComponent } from './components/account-menu/account-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MediaCardComponent} from './components/media-card';
import {LoginGuard} from './guard/login.guard';
import {GuestGuard} from './guard/guest.guard';
import {AuthService} from './services/auth.service';
import {ConfigService} from './services/config.service';
import {ApiService} from './services/api.service';
import {UserService} from './services/user.service';


export function initUserFactory(userService: UserService) {
  return () => userService.initUser();
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent,
    ForbiddenComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    AccountMenuComponent,
    ProfileComponent,
    MediaCardComponent
  ],

  imports: [
  NgbModule, // bootstrap
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  AppRoutingModule,
  MatMenuModule,
  MatTooltipModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  RouterModule,
  FlexLayoutModule,
  HttpClientXsrfModule.withOptions({cookieName: 'XSRF-TOKEN'})
  ],

  providers: [  LoginGuard,
    GuestGuard,
    AuthService,
    ApiService,
    UserService,
    ConfigService,
    MatIconRegistry,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserService],
      'multi': true
    }],
  bootstrap: [AppComponent]
})

export class AppModule { }
