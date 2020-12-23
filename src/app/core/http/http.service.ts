import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ResultHttpQuery } from './model/result-http-query.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogParam } from './model/error-dialog.model';
import { ErrorDialogComponent } from './error-dialog.component';  
import { MatDialog } from '@angular/material/dialog';
import { HttpServiceModel } from './model/http.service.model';

@Injectable()
export class HttpService implements HttpServiceModel{
  
    constructor(public dialog: MatDialog,private http: HttpClient){ }

    public httpGet(url:string, param:any) : Observable<any> {

        let params = this.getParamForUrlParams(param);
        return this.http.get(url,{params}).pipe(map((data:ResultHttpQuery)=>{
            return this.resultHandle(data);
        }),
        catchError(err => {  
            return this.catchHandle(err);
        }))
    };

   
    headers:HttpHeaders = new HttpHeaders().
        set('Content-Type', 'application/json').
        set('Accept', 'application/json');


    public httpPost(url:string, param:any) : Observable<any> {

        return this.http.post(url, param, { headers: this.headers }).pipe(map((data:ResultHttpQuery)=>{
          return this.resultHandle(data);
        }),
        catchError(err => {  
            return this.catchHandle(err);
        }))
    };

    public httpPut(url:string, param:any) : Observable<any> {
        return this.http.put(url, param, { headers: this.headers }).pipe(map((data:ResultHttpQuery)=>{
          return this.resultHandle(data);
        }),
        catchError(err => {  
            return this.catchHandle(err);
        }))
    };
   

    public httpDelete(url:string, param:any) : Observable<any> {

        return this.http.delete(`${url}/${param}`).pipe(map((data:ResultHttpQuery)=>{
            return this.resultHandle(data);
          }),
          catchError(err => {  
               return this.catchHandle(err);
          }));
 
    };
    private catchHandle(err: any) {
        console.log(err);
        return throwError(err);
    }
    private getParamForUrlParams(param: any) {
        let params = new HttpParams();
        if (param != null) {
            Object.keys(param).map(k => {
                params = params.set(k.toString(), param[k].toString());

            });

        }
        return params;
    }

    private resultHandle(data:ResultHttpQuery)
    {
    if(data.question && data.question.length>0)
    {
        data.question.forEach(element => {
            let errorDialogParam:ErrorDialogParam = new ErrorDialogParam();
            errorDialogParam.caption = "Сообщение";
            errorDialogParam.message = element.message;
            errorDialogParam.buttons = element.buttons;
            this.openDialogError(errorDialogParam);
        });
    }

       if(data.isSuccess == true)
       {
               return data.data;
       }
       else
       {
           let errorDialogParam:ErrorDialogParam = new ErrorDialogParam();
           errorDialogParam.caption = "Ошибка";
           errorDialogParam.message = data.message;
           this.openDialogError(errorDialogParam);
           return null;
       }
    }
    private openDialogError(errorDialogParam:ErrorDialogParam) {
          const dialogRef = this.dialog.open(ErrorDialogComponent, {
            data: errorDialogParam         
          });
      
          dialogRef.afterClosed().subscribe(result => {
           
          });
        }

}
