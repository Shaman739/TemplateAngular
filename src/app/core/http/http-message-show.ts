import { Injectable } from '@angular/core';
import { Question } from './model/question.model';
import { ErrorDialogParam } from './model/error-dialog.model';
import { Observable, throwError, of, Subscriber } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog.component';

 
@Injectable()
export  class HttpMessageShow
{
    constructor(public dialog: MatDialog) { }
    public async showQuestion(questionItems: Array<Question>, index: number): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (questionItems != null && questionItems.length > index) {
                let question = questionItems[index];
                let errorDialogParam: ErrorDialogParam = new ErrorDialogParam();
                errorDialogParam.caption = "Сообщение";
                errorDialogParam.message = question.message;
                errorDialogParam.buttons = question.buttons;
                this.openDialogError(errorDialogParam).subscribe(result => {
                    index += 1
                    question.result = result;
                    resolve(true);
                    this.showQuestion(questionItems, index);

                });;
            }
            else resolve(false);
        });


    }
    public openDialogError(errorDialogParam: ErrorDialogParam): Observable<any> {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            data: errorDialogParam
        });

        return dialogRef.afterClosed();
    }
}