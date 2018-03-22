import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IJsonResponse } from './json-response';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class YoutubeResponseService {

  private url = 'http://localhost/angular/xam/xam-youtube-downloader-api/?xam_url=';

  constructor(private httpClient: HttpClient) { }

  sendRequest(youtube_url: string): Observable<IJsonResponse[]> {
    return this.httpClient.get<IJsonResponse[]>(this.url + youtube_url)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw('There was an \'error\' or the server take too long to respond. Please try again.');
  }
}
