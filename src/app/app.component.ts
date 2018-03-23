import { HelpComponent } from './help/help.component';
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) { }

  openHelp() {
    const dialogConfig = new MatDialogConfig;
    dialogConfig.disableClose = false;
    this.dialog.open(HelpComponent, dialogConfig);
  }
}
