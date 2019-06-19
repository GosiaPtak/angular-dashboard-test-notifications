import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './core/components/app/app.component';
import { ConfigurationComponent } from './configuration/components/configuration.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { SignInComponent } from './sign-in/components/sign-in.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SideMenuComponent } from './dashboard/components/side-menu/side-menu.component';
import { MainContentComponent } from './dashboard/components/main-content-area/main-content-area.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    DashboardComponent,
    SignInComponent,
    HeaderComponent,
    SideMenuComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    ///HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
