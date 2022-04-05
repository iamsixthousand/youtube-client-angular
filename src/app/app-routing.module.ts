import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/components/screen/pages/main-page/main-page.component';
import { RegistrationPageComponent } from './core/components/screen/pages/registration-page/registration-page.component';
import { SearchResultPageComponent } from './core/components/screen/pages/search-result-page/search-result-page.component';
import { RouterPath } from './routes.enum';

const routes: Routes = [
  {
    path: RouterPath.Login,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
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
    path: RouterPath.Main,
    component: MainPageComponent,
  },
  {
    path: RouterPath.Redirect,
    redirectTo: RouterPath.Main,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
