import { GridDisplayedColumns } from './grid-displayed-columns.model';
import { ListTemplateConfiguration } from '../../list-types';
export class GridConfiguration extends ListTemplateConfiguration{
    constructor() 
    {
        super();
        this.columns = new Array<GridDisplayedColumns>();
    }
    columns:Array<GridDisplayedColumns>;
}
