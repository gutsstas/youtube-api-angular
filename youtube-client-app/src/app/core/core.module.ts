import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from '../youtube/components/search-item/search-item.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchServices } from './services/search.service';
import { StatisticsComponent } from '../shared/components/statistics/statistics.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchVideosService } from './services/search-videos.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { YoutubeMainComponent } from '../youtube/pages/youtube-main/youtube-main.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchItemComponent,
    SearchFiltersComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    MatIconRegistry,
    SearchServices,
    SearchItemComponent,
    SearchVideosService,
    YoutubeMainComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [
    HeaderComponent,
    SearchItemComponent,
    SearchFiltersComponent,
    StatisticsComponent,
    AppRoutingModule,
    HttpClientModule,
  ],
})
export class CoreModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
