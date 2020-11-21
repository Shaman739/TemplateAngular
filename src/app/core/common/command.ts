import { IdentityObject } from '../model/identity-object.model';
import { RefreshCollection } from '../model';
export interface Command
{
    execute(item:IdentityObject,afterFinishOperation: RefreshCollection);
    getName(): string ;
}