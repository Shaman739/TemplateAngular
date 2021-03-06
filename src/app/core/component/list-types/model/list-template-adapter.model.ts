import { FetchQueryParam, FetchDataResult } from '../../../http'; 
import { Observable } from 'rxjs';
export interface ListTemplateAdapter
{
    loadAsync(param: FetchQueryParam) : Observable<FetchDataResult>;
}