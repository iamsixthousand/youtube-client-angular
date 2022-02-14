import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
