import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeMainComponent } from './youtube/pages/youtube-main/youtube-main.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { YoutubeVideoComponent } from './youtube/pages/youtube-video/youtube-video.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { YoutubeModule } from './youtube/youtube.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './redux/effects/app.effects';
import { reducers, metaReducers } from './redux';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeMainComponent,
    NotFoundComponent,
    YoutubeVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    YoutubeModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [SearchItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
