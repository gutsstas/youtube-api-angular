import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByCountViewsPipe } from './pipes/filter-by-count-views.pipe';
import { FilterByDatePipe } from './pipes/filter-by-date.pipe';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FilterSearchPipe,
    FilterByDatePipe,
    FilterByCountViewsPipe,
    CreateCardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  providers: [MatDatepickerModule],
  exports: [FilterSearchPipe, FilterByDatePipe, FilterByCountViewsPipe],
})
export class YoutubeModule {}
