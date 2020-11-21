import { IdentityObject } from './identity-object.model';
export interface RefreshCollection
{
    addOrUpdateItemInCollection(data:ChangeResult);
    deleteItemInCollection(data:ChangeResult);
}

export class ChangeResult{
    item: IdentityObject;
}
