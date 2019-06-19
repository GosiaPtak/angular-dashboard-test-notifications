import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './core/components/app/app.component';
import { SignInComponent } from './sign-in/components/sign-in.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { SideMenuComponent } from './dashboard/components/side-menu/side-menu.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/Statistics/Projects', component: SideMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
