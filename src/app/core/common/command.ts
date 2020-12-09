import { IdentityObject } from '../model/identity-object.model';
import { RefreshCollection } from '../model';
import { EditParam } from '../component/edit-form';
export interface Command
{
    execute(item:IdentityObject,afterFinishOperation: RefreshCollection);
    getName(): string;
    getParam():EditParam
}