import { AbstractHttpCommand } from './abstract-http-command';
import { IdentityObject } from '../../model/identity-object.model';
import { RefreshCollection } from '../../model';
export class HttpDeleteCommand extends AbstractHttpCommand
{
  execute(item:IdentityObject,afterFinishOperation: RefreshCollection)
  {
    console.log(item);
    this.httpService.httpDelete(this.url, item.id).subscribe((data: any) => {
      console.log(data);
      if(data !=null){
        afterFinishOperation.deleteItemInCollection(data);
      }
    });
  }
  getName()
  {
      return "Удалить";
  }
}