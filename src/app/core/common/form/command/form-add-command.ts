import { IdentityObject } from '../../../model/identity-object.model';
import { ChangeResult, RefreshCollection } from '../../../model';
import { EditFormComponent } from '../model/edit-form.model';
import { Command } from '../../command';
export class FormAddCommand implements Command
{
  constructor(protected editForm:EditFormComponent)
  {
   
  }
  execute(item:IdentityObject,afterFinishOperation: RefreshCollection)
  {
    return this.editForm.addAsync().then((changedItem)=>
    {
      let changeResult:ChangeResult = new ChangeResult();
      changeResult.item = changedItem.item;
      afterFinishOperation.addOrUpdateItemInCollection(changeResult);
    }
    );
  }
  getName()
  {
      return "Добавить";
  }
}