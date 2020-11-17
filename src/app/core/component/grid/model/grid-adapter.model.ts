import { FetchQueryParam, FetchDataResult } from '../../../http'; 
import { Observable } from 'rxjs';
import { GridOperationResult } from './crud-operation-result.model';
export interface GridAdapter
{
    loadAsync(param: FetchQueryParam) : Observable<FetchDataResult>;
    delete(id:number) : Observable<GridOperationResult> 
    edit(id:number) : Observable<GridOperationResult> 
}