import { FetchQueryParam,HttpServiceModel,FetchDataResult, ResultHttpQuery } from './http';
import { Observable, of, throwError } from 'rxjs';
import { ListTemplateData } from '../core/component/list-types/model';
import { ListTemplateAdapter } from '../core/component/grid/model';
import { IdentityObject } from './model';
export class CrudListGridAdapter implements ListTemplateAdapter
{


    public constructor(private items:Array<IdentityObject>)
    {

    }
    loadAsync(param: FetchQueryParam) : Observable<FetchDataResult> 
    {
        let result:FetchDataResult = new FetchDataResult();
        result.data = new ListTemplateData();
        result.data.items = this.items;
        if(this.items)
            result.totalCount = this.items.length;
        return of(result);
      
        }    
}