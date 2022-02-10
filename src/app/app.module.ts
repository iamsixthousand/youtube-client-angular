import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchComponent } from './core/components/header/search/search.component';
import { SearchSettingsComponent } from './core/components/header/search-settings/search-settings.component';
import { LogoComponent } from './core/components/header/logo/logo.component';
import { FilterComponent } from './core/components/header/filter/filter.component';
import { LoginInfoComponent } from './core/components/header/login-info/login-info.component';
import { CardComponent } from './core/components/screen/card/card.component';
import { CardStatsComponent } from './core/components/screen/card/card-stats/card-stats.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
