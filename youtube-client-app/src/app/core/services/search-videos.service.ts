/* eslint-disable @typescript-eslint/indent */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap, tap } from 'rxjs';
import { ISearchItem, ISearchResults } from 'src/app/youtube/models/interfaces';
import { DataService } from 'src/app/youtube/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class SearchVideosService {
  constructor(private http: HttpClient, private dataService: DataService) {}

  searchURL = 'https://youtube.googleapis.com/youtube/v3/search';

  videosURL = 'https://www.googleapis.com/youtube/v3/videos';

  key = 'AIzaSyApyMUMdrpqSCqQRxdSHI-rBQ93k2eYHJI';
  // key = 'AIzaSyB9SYRvJ1FEPO_ethUslOUHXhk_ZxXgaic';

  searchParams(str: string) {
    return {
      key: this.key,
      type: 'video',
      part: 'snippet',
      maxResults: '15',
      q: str,
    };
  }

  videosParams(str: string) {
    return {
      key: this.key,
      id: str,
      part: 'snippet,statistics',
    };
  }

  getAllVideos(str: string): Observable<ISearchItem[]> {
    return this.http
      .get<ISearchResults>(this.searchURL, {
        params: this.searchParams(str),
      })
      .pipe(
        map((i: ISearchResults) =>
          i.items.map((item) => item.id.videoId).toString(),
        ),
        switchMap((value) => this.getVideoStatistics(value)),
      );
  }

  getVideoStatistics(value: string): Observable<ISearchItem[]> {
    return this.http
      .get<ISearchResults>(this.videosURL, {
        params: this.videosParams(value),
      })
      .pipe(
        map((i) => i.items),
        tap((res) => {
          this.dataService.setData(res);
          console.log(res);
        }),
      );
  }

  getVideo(value: string): Observable<ISearchItem> {
    return this.http
      .get<ISearchResults>(this.videosURL, {
        params: this.videosParams(value),
      })
      .pipe(map((i) => i.items[0]));
  }
}
