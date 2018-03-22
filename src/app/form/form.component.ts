import { YoutubeResponseService } from './../youtube-response.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public youtubeUrl: string;

  constructor(
    public routeCtrl: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.youtubeUrl = '';
  }

  redirect() {
    const url = this.youtubeUrl;
    if (this.youtubeUrl.length !== 0 && (url.includes('youtube.com/watch?v=') || url.includes('youtu.be/'))) {
      this.routeCtrl.navigate(['/download', this.youtubeUrl]);
    } else {
      this.snackBar.open('Please paste a youtube link.', 'OK', {
        duration: 2000
      });
    }
  }

}
