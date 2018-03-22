import { Component, OnInit } from '@angular/core';
import { YoutubeResponseService } from '../youtube-response.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  public youtubeResponse = [];
  public selectedUrl = 'null';
  public isLoading = true;
  public youtubeUrl: string;
  public hasError = false;

  constructor(private youtubeResponseService: YoutubeResponseService, public snackBar: MatSnackBar,
    private routeActivated: ActivatedRoute, private routerCtrl: Router) { }

  ngOnInit() {
    const url = this.routeActivated.snapshot.paramMap.get('url');
    this.youtubeUrl = url;
    this.getResponse(url);
  }

  getResponse(url) {
    this.youtubeResponseService.sendRequest(url)
      .subscribe(response => this.youtubeResponse = response,
        error => this.showError(error), () => this.quickToggle());
  }

  isYoutubeResponseReady() {
    return this.youtubeResponse.length === 0 ? false : true;
  }

  showError(error) {
    this.quickToggle();
    this.hasError = !this.hasError;
    this.snackBar.open(error, 'OK', {
      duration: 3000,
    });
  }

  quickToggle() {
    this.isLoading = !this.isLoading;
  }

  retryDownload() {
    this.quickToggle();
    this.hasError = !this.hasError;
    this.getResponse(this.youtubeUrl);
  }

  downloadAnother() {
    this.routerCtrl.navigate(['']);
  }

}
