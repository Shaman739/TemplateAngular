import { NgModule } from '@angular/core';
import { ActionsCommandsComponent }   from './actions-commands.component';
import { ActionsCommandsByItemComponent }   from './actions-commands-by-item.component';
import { CommonModule } from '@angular/common';  
@NgModule({
    imports:[CommonModule],
    declarations: [ ActionsCommandsComponent,ActionsCommandsByItemComponent ],
    exports: [ ActionsCommandsComponent,ActionsCommandsByItemComponent ]
})
export class ActionsCommandsModule { }