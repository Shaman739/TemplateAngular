import { Input, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FetchQueryParam } from '../../http';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { GridConfiguration } from './model';
import { ListTemplateComponent } from '../list-types';
@Component({
    selector: 'grid',
    styleUrls: ['grid.css'],
    templateUrl: 'grid.html',
    animations: [
        trigger('detailExpand', [
          state('collapsed', style({height: '0px', minHeight: '0'})),
          state('expanded', style({height: '*'})),
          transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
      ],
})
export class GridComponent extends ListTemplateComponent{ 
   // @Input() displayedColumns: GridConfiguration;

    displayedColumns:GridConfiguration;
    columnsToDisplay: string[] = [];
    pageEvent: PageEvent;


    onPaginate(event?:PageEvent){
        let param: FetchQueryParam = new FetchQueryParam();
        param.countOnPage = event.pageSize;
        param.pageNumber = event.pageIndex+1;
        this.load(param);
     
    }
    ngOnInit(){
        this.displayedColumns = this.listTemplateConfiguration as GridConfiguration;
        if(this.listTemplateConfiguration)
            this.columnsToDisplay = this.FillColumnsToDisplay(this.displayedColumns);
    }
    private FillColumnsToDisplay(config:GridConfiguration):string[] {
        let columnsToDisplay = [];
        config.columns.forEach(function (value) {
            columnsToDisplay.push(value.value);
        });

        return columnsToDisplay;
    }
}
