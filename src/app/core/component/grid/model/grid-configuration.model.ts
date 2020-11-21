import { GridDisplayedColumns } from './grid-displayed-columns.model';
import { Command } from '../../../common/command';
export class GridConfiguration{
    constructor()
    {
        this.columns = new Array<GridDisplayedColumns>();
        this.listRowCommand = new Array<Command>();
        this.listTopMenuCommand= new Array<Command>();
    }
    columns:Array<GridDisplayedColumns>;
    url:string;
    listRowCommand:Array<Command>;
    listTopMenuCommand:Array<Command>;
}
