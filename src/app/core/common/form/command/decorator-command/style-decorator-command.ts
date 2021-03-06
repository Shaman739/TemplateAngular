import { IdentityObject } from '../../../../model/identity-object.model';
import {  RefreshCollection } from '../../../../model';
import { EditParam } from '../../../../component/edit-form';
import { Command } from '../../../command';
import { StyleDescriptionCommand,AddStyleCommand,StyleCommand } from '../decorator-command/model';

export class StyleDecoratorCommand implements Command,StyleCommand
{
    constructor(private command:Command,private styleDecorator:StyleDescriptionCommand)
    {

    }
    execute(item:IdentityObject,afterFinishOperation: RefreshCollection)
    {
        return this.command.execute(item,afterFinishOperation);
    }
    getName(): string
    {
        return this.command.getName();
    }
    getParam():EditParam
    {
        return this.command.getParam();
    }

    getStyle():StyleDescriptionCommand
    {
        return this.styleDecorator;
    }

}