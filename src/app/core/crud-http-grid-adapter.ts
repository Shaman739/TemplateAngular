import { FetchQueryParam,HttpServiceModel,FetchDataResult } from './http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ListTemplateAdapter } from '../core/component/grid/model';
import { EditFormComponent } from './component/edit-form';
export class CrudHttpGridAdapter implements ListTemplateAdapter
{
    httpService:HttpServiceModel;
    url:string;
    editForm: EditFormComponent
    public constructor(HttpService:HttpServiceModel,url:string,editForm:EditFormComponent)
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
               
              //  if(data==null)
               //  data ={totalCountRows:0}; 
               
                 resultQuery.totalCount = data.totalCountRows;
               
               
                return resultQuery;
            }),
            catchError(err => {  
                console.log(err); 
                return throwError(err);
            }))
      
        }    
}