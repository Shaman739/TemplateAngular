import { Component, Inject  } from '@angular/core';
import { ErrorDialogParam } from './model/error-dialog.model'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Button } from './model/button.model';



@Component({
    selector: 'error-dialog',
    template: `<h1 mat-dialog-title>{{errorDialogParam.caption}}</h1>
                <div mat-dialog-content>
                     {{errorDialogParam.message}}
                </div>
                <mat-dialog-actions>
                    <input *ngFor="let button of errorDialogParam.buttons" type="button" value="{{button.label}}" (click)="ok()" class="btn btn-primary" />
                </mat-dialog-actions>
                `
  })
  export class ErrorDialogComponent {
    errorDialogParam: ErrorDialogParam = new ErrorDialogParam();

    constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) data: ErrorDialogParam) {
      this.errorDialogParam = data;
      if(this.errorDialogParam.buttons == null)
      {
        this.errorDialogParam.buttons = new Array<Button>();
        let okButton:Button = new Button();
        okButton.label = "ОК";
        this.errorDialogParam.buttons.push(okButton);
      }
    }
   
    ok()
    {
        this.dialogRef.close();
    }

  }