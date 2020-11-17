export interface EditFormParam
{
   edit(data:EditParam);
}
export class EditParam
{
    public id:number;
}
export class EditServiceParam extends EditParam
{
    url:string;
}