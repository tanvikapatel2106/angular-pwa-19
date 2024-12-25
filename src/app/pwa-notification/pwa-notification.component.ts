import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
@Component({
  selector: 'app-pwa-notification',
  imports: [CommonModule,MatIconModule,FlexLayoutModule],
  templateUrl: './pwa-notification.component.html',
  styleUrl: './pwa-notification.component.scss'
})
export class PwaNotificationComponent {
  constructor(
    private _dialogRef: MatDialogRef<PwaNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  ngOnInit(): void {

  }

  onClose(){
    this._dialogRef.close();
  }
  
  onSuccess(data:any){
    this._dialogRef.close(data);
  }
}
