import { IdentityObject } from '../../../model/identity-object.model';
import { ChangeResult, RefreshCollection } from '../../../model';
import { EditParam,EditFormComponent } from '../../../component/edit-form';
import { Command } from '../../command';
export class FormEditCommand implements Command
{
  constructor(protected editForm:EditFormComponent)
  {
   
  }
  execute(item:IdentityObject,afterFinishOperation: RefreshCollection)
  {
    let data:EditParam =this.getParam();
    data.id = item.id;
    return this.editForm.editAsync(data).then((changedItem)=>
    {
      let changeResult:ChangeResult = new ChangeResult();
      changeResult.item = changedItem.item;
      afterFinishOperation.addOrUpdateItemInCollection(changeResult);
    }
    );
  }
  getName()
  {
      return "Редактировать";
  }
  
  getParam():EditParam
  {
    return new EditParam();
  }
}