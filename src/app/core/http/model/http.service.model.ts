import { Observable } from 'rxjs';

export interface HttpServiceModel
{
    httpGet(url:string, param:any) : Observable<any>;
    httpPost(url:string, param:any) : Observable<any>;
    httpDelete(url:string, param:any) : Observable<any>;
    httpPut(url:string, param:any) : Observable<any>;
}