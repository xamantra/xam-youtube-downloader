import { YoutubeResponseService } from './youtube-response.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatMenuModule, MatButtonModule, MatTooltipModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule, MatDividerModule, MatCardModule, MatToolbarModule } from '@angular/material/';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [YoutubeResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
