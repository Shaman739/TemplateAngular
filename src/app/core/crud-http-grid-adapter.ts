import { FetchQueryParam,HttpServiceModel,FetchDataResult } from './http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GridOperationResult,GridAdapter } from '../core/component/grid/model';
import { EditFormParam,EditParam } from './common/form';
export class CrudHttpGridAdapter implements GridAdapter
{
    httpService:HttpServiceModel;
    url:string;
    editForm: EditFormParam
    public constructor(HttpService:HttpServiceModel,url:string,editForm:EditFormParam)
    {
        this.httpService=HttpService;
        this.url = url;
        this.editForm = editForm;
    }
    loadAsync(param: FetchQueryParam) : Observable<FetchDataResult> 
    {
            return this.httpService.httpGet(this.url, param).pipe(map((data:any)=>{      
                let resultQuery :FetchDataResult = new FetchDataResult();
                resultQuery.data = data;
                resultQuery.totalCount = data.totalCountRows;
               
                return resultQuery;
            }),
            catchError(err => {  
                console.log(err); 
                return throwError(err);
            }))
      
        }
    delete(id: number) : Observable<GridOperationResult>  {
        return this.httpService.httpDelete(this.url, id)
     
    }
    edit(id: number) : Observable<GridOperationResult> {
        let data:EditParam = new EditParam();
        data.id = id;
        return this.editForm.edit(data);
    }
    
}