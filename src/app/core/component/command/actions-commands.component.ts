import { Component,Input  } from '@angular/core';
import { Command } from '../../../core/common/command';
import { RefreshCollection } from '../../model';
@Component({
    selector: 'actions-commands',
    templateUrl: 'actions-commands.component.html'
})
export class ActionsCommandsComponent{ 
     _actions: Array<Command>;

    @Input()
    set actions(crudAdapter:Array<Command>) {
       
            this._actions = crudAdapter;
            console.log(this._actions);
    }
    get actions() { return this._actions; }

    @Input()
    afterFinishAction:RefreshCollection;
    constructor()
    {
        console.log(this.afterFinishAction);
    }
}
