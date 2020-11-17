import { GridDisplayedColumns } from './grid-displayed-columns.model';
export class GridConfiguration{
    constructor()
    {
        this.columns = new Array<GridDisplayedColumns>();
    }
    columns:Array<GridDisplayedColumns>;
    url:string;
}
