import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/auth/services/user.service';
import { SearchServices } from 'src/app/core/services/search.service';
import { SearchVideosService } from '../../services/search-videos.service';
import { YoutubeMainComponent } from 'src/app/youtube/pages/youtube-main/youtube-main.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, debounceTime, filter, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  youTube = faYoutube;

  slider = faSliders;

  searchForm: FormGroup;

  subs = new Subscription();

  clickLogOut(): void {
    this.userService.logOut();
    this.router.navigate(['/login']);
  }

  clickLogIn(): void {
    this.router.navigate(['/login']);
  }

  searchVideos(): void {
    this.searchServices.resultVisible = true;
    this.router.navigate(['/']);
  }

  constructor(
    public searchServices: SearchServices,
    public userService: UserService,
    public searchVideosService: SearchVideosService,
    public youtubeMainComponent: YoutubeMainComponent,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: [''],
    });

    this.subs.add(
      this.searchControl.valueChanges
        .pipe(
          filter((text) => text.length > 2),
          debounceTime(500),
          tap((res) => {
            this.router.navigate(['/']);
            this.searchVideosService.getAllVideos(res).subscribe();
          }),
        )
        .subscribe(),
    );
  }

  get searchControl() {
    return this.searchForm.controls['search'];
  }

  get clearSearchControl() {
    return this.searchControl.setValue('');
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
