import { Command } from '../../common';
import { IdentityObject } from '../../model/identity-object.model';
import { HttpServiceModel } from '../model/http.service.model';
import { RefreshCollection } from '../../model';
import { EditParam } from '../../component/edit-form/model/edit-form.model';
export abstract class AbstractHttpCommand implements Command
{
   constructor(protected httpService:HttpServiceModel,protected url:string)
   {}
   abstract execute(item:IdentityObject,afterFinishOperation: RefreshCollection);
   abstract getName();
   public getParam():EditParam
   {
     return new EditParam();
   }
}