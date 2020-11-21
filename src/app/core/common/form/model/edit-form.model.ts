import { ChangeResult } from '../../../model';
export interface EditFormModel
{
    close(data:any);
}
export interface EditFormComponent
{
    addAsync() : Promise<ChangeResult>;
    editAsync(data:EditParam) : Promise<ChangeResult>;
}
export class EditParam
{
    public id:number;
}
export class EditServiceParam extends EditParam
{
    url:string;
}