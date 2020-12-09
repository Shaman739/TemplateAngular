import { ApplyChangesAdapter } from '../model/apply-changes-adapter.model';
import { Observable } from 'rxjs';
import { HttpServiceModel, CRUDQuery } from '../../../http';
export class HttpApplyChangesAdapter implements ApplyChangesAdapter
{
  constructor(protected httpService:HttpServiceModel,protected url:string){}
  public updateItem(param:CRUDQuery) : Observable<any>
  {
    return this.httpService.httpPut(this.url,param);
  }
  public addItem(param:CRUDQuery) : Observable<any>
  {
    return this.httpService.httpPost(this.url, param);
  }
  public getItem(id:number) : Observable<any>
  {
    return this.httpService.httpGet(this.url+'/'+id, null);
  }
}