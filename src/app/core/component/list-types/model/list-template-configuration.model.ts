
import { inherits } from 'util';
import { Command } from '../../../common/command';
export class ListTemplateConfiguration implements  ListConfiguration
{
    constructor()
    {
        this.listRowCommand = new Array<Command>();
        this.listTopMenuCommand= new Array<Command>();
    }
    url:string;
    listRowCommand:Array<Command>;
    listTopMenuCommand:Array<Command>;
}

export interface ListConfiguration
{
    url:string;
    listRowCommand:Array<Command>;
    listTopMenuCommand:Array<Command>;
}
