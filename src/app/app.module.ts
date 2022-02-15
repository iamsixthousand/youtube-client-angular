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
import { LikesComponent } from './core/components/screen/card/card-stats/likes/likes.component';
import { DislikesComponent } from './core/components/screen/card/card-stats/dislikes/dislikes.component';
import { ViewsComponent } from './core/components/screen/card/card-stats/views/views.component';
import { CommentsComponent } from './core/components/screen/card/card-stats/comments/comments.component';
import { ShortNumberPipe } from './pipes/shortumber.pipe';
import { CardInfoButtonComponent } from './core/components/screen/card/card-info-button/card-info-button.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
