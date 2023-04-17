import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeMainComponent } from './youtube/pages/youtube-main/youtube-main.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { YoutubeVideoComponent } from './youtube/pages/youtube-video/youtube-video.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrationComponent } from './auth/pages/registration/registration.component';
import { UserGuard } from './auth/guards/user.guard';
import { CreateCardComponent } from './youtube/pages/create-card/create-card.component';

const routes: Routes = [
  { path: '', canActivate: [UserGuard], component: YoutubeMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'create-card',
    canActivate: [UserGuard],
    component: CreateCardComponent,
  },
  {
    path: 'video/:id',
    canActivate: [UserGuard],
    component: YoutubeVideoComponent,
  },
  { path: '**', canActivate: [UserGuard], component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
