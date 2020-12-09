import { ApplyChangesAdapter } from '../model/apply-changes-adapter.model';
import { Observable, of } from 'rxjs';
import { CRUDQuery } from '../../../http';
import { IdentityObject,ChangeResult } from '../../../model';
export class ArrayApplyChangesAdapter implements ApplyChangesAdapter
{
  constructor(private items:Array<IdentityObject>){}
  public updateItem(param:CRUDQuery) : Observable<any>
  {
    let result:ChangeResult = new ChangeResult();
    result.item = param.item;
    return of(result);
  }
  public addItem(param:CRUDQuery) : Observable<any>
  {
    let result:ChangeResult = new ChangeResult();
    result.item = param.item;
    return of(result);
  }
  public getItem(id:number) : Observable<any>
  {
    let item:IdentityObject = this.items.filter(item => item.id == id)[0];
    return of(item);
  }
}