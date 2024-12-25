import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PwaNotificationComponent } from "./pwa-notification/pwa-notification.component";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HomeScreenPromptService } from '../home-screen.prompt.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fix typo here: "styleUrl" -> "styleUrls"
})
export class AppComponent implements OnInit {
  dialogData = {
    imageSrc: 'favicon.ico',
    message: 'Add Angular19 on Your Device for Quick and Easy Access When You Are on the Go',
    buttonCancelText: null,
    buttonSuccessText: 'ADD NOW!',
    Info: '',
    btnSuccessClass: 'gradient-btn',
    btnCancelClass: 'gradient-btn-reverse mr-12',
    titleTxtClass: "text-center",
    btnCloseShow: true,
    title: 'Install Angular19',
  };

  constructor(private dialog: MatDialog ,private homeScreenPromptService: HomeScreenPromptService) {}

  title = 'angular-19';
  

  ngOnInit() {
    // Open the dialog when the component initializes (i.e., when the user enters the website)
    this.openDialog();
  }

  openDialog() {
    const dialogRef: MatDialogRef<PwaNotificationComponent> = this.dialog.open(PwaNotificationComponent, {
      data: this.dialogData,
      backdropClass: 'custom-overlay',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result !== undefined) {
        this.homeScreenPromptService.promptInstall();
      }
    });
  }
}
