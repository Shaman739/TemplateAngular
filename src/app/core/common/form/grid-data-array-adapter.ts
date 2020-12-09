import { EditFormComponent,EditServiceParam,EditParam  } from '../../component/edit-form';
import { IdentityObject, ChangeResult } from '../../model';
import { EditableDataFormModel} from '../../component/data-form';
export class GridDataArrayAdapter implements EditFormComponent
{
    constructor(private items:Array<IdentityObject>,private data:EditableDataFormModel)
    {

    }
    addAsync(): Promise<ChangeResult>
    {
      // this.chechExistEditFrom();
       return this.data.addOrUpdateFormAsync(this.getParamForAddOrUpdateItem());
   }
   
   editAsync(param:EditParam): Promise<ChangeResult>
   {
      // this.chechExistEditFrom();

       if(!param.id)
           throw "Отсутствует идентификатор записи.";

       let paramEdit = this.getParamForAddOrUpdateItem();
       paramEdit.id = param.id;
   
       return this.data.addOrUpdateFormAsync(paramEdit);
   }
   getParamForAddOrUpdateItem() : EditServiceParam
   { 
       let paramEdit: EditServiceParam = new EditServiceParam();

       
       return paramEdit;
   }
}