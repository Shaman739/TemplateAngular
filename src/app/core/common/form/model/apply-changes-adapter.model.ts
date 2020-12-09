import { CRUDQuery } from '../../../http';
import { Observable } from 'rxjs';
export interface ApplyChangesAdapter
{
  updateItem(param:CRUDQuery) : Observable<any>;
  addItem(param:CRUDQuery) : Observable<any>;
  getItem(param:any) : Observable<any>;
}