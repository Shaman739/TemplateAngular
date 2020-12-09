import { FetchQueryParam,HttpServiceModel,FetchDataResult, ResultHttpQuery } from './http';
import { Observable, of, throwError } from 'rxjs';
import { GridData } from '../core/component/grid';
import { GridAdapter } from '../core/component/grid/model';
import { IdentityObject } from './model';
export class CrudListGridAdapter implements GridAdapter
{


    public constructor(private items:Array<IdentityObject>)
    {

    }
    loadAsync(param: FetchQueryParam) : Observable<FetchDataResult> 
    {
        let result:FetchDataResult = new FetchDataResult();
        result.data = new GridData();
        result.data.items = this.items;
        if(this.items)
            result.totalCount = this.items.length;
        return of(result);
      
        }    
}