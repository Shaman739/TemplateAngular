import { Command } from '../../command';
import { ChangeResult, IdentityObject,RefreshCollection } from '../../../model';
import { EditParam } from '../../../component/edit-form';
export class ListDeleteCommand implements Command
{
  constructor(private items:Array<IdentityObject>){}
  execute(item:IdentityObject,afterFinishOperation: RefreshCollection)
  {
    console.log(item);
    let index = this.items.findIndex(x => x.id ===item.id);


    this.items.splice(index, 1);

   
    let result:ChangeResult = new ChangeResult();
    result.item = item;
    afterFinishOperation.deleteItemInCollection(result);
  }
  getName()
  {
      return "Удалить";
  }
  getParam():EditParam
  {
    return new EditParam();
  }
}