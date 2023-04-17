import { Component } from '@angular/core';
// import { data as dataRes } from '../../constants/response';
import { ISearchItem } from '../../models/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItemComponent } from '../../components/search-item/search-item.component';
import { Location } from '@angular/common';
import { SearchVideosService } from 'src/app/core/services/search-videos.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
})
export class YoutubeVideoComponent {
  data$: Observable<ISearchItem>;

  page: ISearchItem | undefined;

  constructor(
    private route: ActivatedRoute,
    public searchItemComponent: SearchItemComponent,
    public location: Location,
    public router: Router,
    private searchVideosService: SearchVideosService,
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.data$ = this.searchVideosService.getVideo(id).pipe(
        tap((res) => {
          if (!res) this.router.navigate(['/video/']);
        }),
      );
    });
  }

  goBack(): void {
    this.location.back();
  }
}
