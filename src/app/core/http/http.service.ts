import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ResultHttpQuery } from './model/result-http-query.model';
import { Observable, throwError, of, Subscriber } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogParam } from './model/error-dialog.model';
import { MatDialog } from '@angular/material/dialog';
import { HttpServiceModel } from './model/http.service.model';
import { HttpMessageShow } from './http-message-show';

@Injectable()
export class HttpService implements HttpServiceModel {

    constructor(public dialog: MatDialog, private http: HttpClient,private httpMessageShow:HttpMessageShow) {
        
     }

    public httpGet(url: string, param: any): Observable<any> {

        let params = this.getParamForUrlParams(param);
        let action: Observable<Object> = this.http.get(url, { params });
        return this.returnObservableHandle(null, action, param);
    };

    headers: HttpHeaders = new HttpHeaders().
        set('Content-Type', 'application/json').
        set('Accept', 'application/json');


    public httpPost(url: string, param: any): Observable<any> {
        let action: Observable<Object> = this.http.post(url, param, { headers: this.headers });
        return this.returnObservableHandle(null, action, param);

    }
    public httpPut(url: string, param: any): Observable<any> {
        let action: Observable<Object> = this.http.put(url, param, { headers: this.headers });
        return this.returnObservableHandle(null, action, param);
    }


    public httpDelete(url: string, param: any): Observable<any> {
        let action: Observable<Object> = this.http.delete(`${url}/${param}`);
        return this.returnObservableHandle(null, action, param);
    }
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

   
    private returnObservableHandle(data: ResultHttpQuery, action: Observable<Object>, param: any): Observable<any> {
        let mainObserable = new Observable(subscriber => {
            this.httpActionHandle(null, action, param, subscriber)
        });
        return mainObserable;
    }
    private httpActionHandle(data: ResultHttpQuery, httpAction: Observable<Object>, param: any, mainObservable: Subscriber<any>) {

        httpAction.pipe(map((data: ResultHttpQuery) => {

            if (data.status == "Question") {
                this.httpMessageShow.showQuestion(data.question, 0).then(result => {
                    if (result == true) {
                        param.questions = data.question
                       
                        for (let i = 0; i < data.question.length; i++)
                            data.question[i].buttons = null;

                        this.httpActionHandle(data, httpAction, param, mainObservable);

                    }

                });
            }
            else if (data.status == "Success") {
                this.httpMessageShow.showQuestion(data.question, 0);
                mainObservable.next(data.data);
            }
            else if (data.status == "Fail") {
                let errorDialogParam: ErrorDialogParam = new ErrorDialogParam();
                errorDialogParam.caption = "Ошибка";
                errorDialogParam.message = data.message;
                this.httpMessageShow.openDialogError(errorDialogParam);
                mainObservable.next(null);

            }

        })).subscribe(item => { mainObservable.next(item) });;

    }


}
