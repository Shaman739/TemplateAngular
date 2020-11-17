import { Component, Inject  } from '@angular/core';
import { ErrorDialogParam } from './model/error-dialog.model'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
    selector: 'error-dialog',
    template: `<h1 mat-dialog-title>{{errorDialogParam.caption}}</h1>
                <div mat-dialog-content>
                     {{errorDialogParam.message}}
                </div>
                <mat-dialog-actions>
                    <button class="mat-raised-button" (click)="ok()">ОК</button>
                </mat-dialog-actions>`
  })
  export class ErrorDialogComponent {
    errorDialogParam: ErrorDialogParam = new ErrorDialogParam();

    constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) data: ErrorDialogParam) {
      this.errorDialogParam = data;
    }
   
    ok()
    {
        this.dialogRef.close();
    }

  }