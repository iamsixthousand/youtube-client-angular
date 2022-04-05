import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchComponent } from './core/components/header/search/search.component';
import { SearchSettingsComponent } from './core/components/header/search-settings/search-settings.component';
import { LogoComponent } from './core/components/header/logo/logo.component';
import { FilterComponent } from './core/components/filter/filter.component';
import { LoginInfoComponent } from './core/components/header/login-info/login-info.component';
import { CardComponent } from './core/components/screen/card/card.component';
import { CardStatsComponent } from './core/components/screen/card/card-stats/card-stats.component';
import { ScreenComponent } from './core/components/screen/screen.component';
import { LikesComponent } from './core/components/screen/card/card-stats/likes/likes.component';
import { DislikesComponent } from './core/components/screen/card/card-stats/dislikes/dislikes.component';
import { ViewsComponent } from './core/components/screen/card/card-stats/views/views.component';
import { CommentsComponent } from './core/components/screen/card/card-stats/comments/comments.component';
import { ShortNumberPipe } from './pipes/shortumber.pipe';
import { CardInfoButtonComponent } from './core/components/screen/card/card-info-button/card-info-button.component';
import { SearchResultPageComponent } from './core/components/screen/pages/search-result-page/search-result-page.component';
import { LoginPageComponent } from './core/components/screen/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './core/components/screen/pages/registration-page/registration-page.component';
import { RegistrationComponent } from './core/components/screen/components/registration/registration.component';
import { LoginComponent } from './core/components/screen/components/login/login.component';
import { MainPageComponent } from './core/components/screen/pages/main-page/main-page.component';
import { StartComponent } from './core/components/screen/components/start/start.component';
import { ViewsIconComponent } from './core/components/screen/card/card-stats/views/views-icon/views-icon.component';
import { LikesIconComponent } from './core/components/screen/card/card-stats/likes/likes-icon/likes-icon.component';
import { DislikesIconComponent } from './core/components/screen/card/card-stats/dislikes/dislikes-icon/dislikes-icon.component';
import { CommentsIconComponent } from './core/components/screen/card/card-stats/comments/comments-icon/comments-icon.component';
import { LogoIconComponent } from './core/components/header/logo/logo-icon/logo-icon.component';
import { SortByCriteriaPipe } from './pipes/sort-by-criteria.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchSettingsComponent,
    LogoComponent,
    FilterComponent,
    LoginInfoComponent,
    CardComponent,
    CardStatsComponent,
    ScreenComponent,
    LikesComponent,
    DislikesComponent,
    ViewsComponent,
    CommentsComponent,
    ShortNumberPipe,
    CardInfoButtonComponent,
    SearchResultPageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    RegistrationComponent,
    LoginComponent,
    MainPageComponent,
    StartComponent,
    ViewsIconComponent,
    LikesIconComponent,
    DislikesIconComponent,
    CommentsIconComponent,
    LogoIconComponent,
    SortByCriteriaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
