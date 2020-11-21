import { FetchQueryParam, FetchDataResult } from '../../../http'; 
import { Observable } from 'rxjs';
export interface GridAdapter
{
    loadAsync(param: FetchQueryParam) : Observable<FetchDataResult>;
}