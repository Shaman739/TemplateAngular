import { Component,Input  } from '@angular/core';
import { Command } from '../../common/command';
import { RefreshCollection,IdentityObject } from '../../model';
@Component({
    selector: 'actions-commands-by-item',
    templateUrl: 'actions-commands-by-item.component.html'
})
export class ActionsCommandsByItemComponent{ 
     _actions: Array<Command>;

    @Input()
    set actions(crudAdapter:Array<Command>) {
       
            this._actions = crudAdapter;
            console.log(this._actions);
    }
    get actions() { return this._actions; }

    @Input()
    afterFinishAction:RefreshCollection;
    @Input()
    item:IdentityObject;
    constructor()
    {
        console.log(this.afterFinishAction);
    }
}
