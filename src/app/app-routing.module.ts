import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/components/screen/pages/login-page/login-page.component';
import { MainPageComponent } from './core/components/screen/pages/main-page/main-page.component';
import { RegistrationPageComponent } from './core/components/screen/pages/registration-page/registration-page.component';
import { SearchResultPageComponent } from './core/components/screen/pages/search-result-page/search-result-page.component';
import { RouterPath } from './routes.enum';

const routes: Routes = [
  {
    path: RouterPath.Main,
    component: MainPageComponent,
  },
  {
    path: RouterPath.Login,
    component: LoginPageComponent,
  },
  {
    path: RouterPath.SearchResultPage,
    component: SearchResultPageComponent,
  },
  {
    path: RouterPath.Register,
    component: RegistrationPageComponent,
  },
  {
    path: RouterPath.Redirect,
    redirectTo: RouterPath.Main,
    // pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
