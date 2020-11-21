import { Command } from '../../common';
import { IdentityObject } from '../../model/identity-object.model';
import { HttpServiceModel } from '../model/http.service.model';
import { RefreshCollection } from '../../model';
export abstract class AbstractHttpCommand implements Command
{
   constructor(protected httpService:HttpServiceModel,protected url:string)
   {}
   abstract execute(item:IdentityObject,afterFinishOperation: RefreshCollection);
   abstract getName();
}