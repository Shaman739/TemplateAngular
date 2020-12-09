import { ChangeResult, IdentityObject } from '../../../model';
export interface EditFormModel
{
    close(data:any);
    loadedItem(item:IdentityObject);
}
export interface EditFormComponent
{
    addAsync(data:EditParam) : Promise<ChangeResult>;
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
export class EditItemsParam extends EditParam
{
    public items:Array<IdentityObject>;
}
