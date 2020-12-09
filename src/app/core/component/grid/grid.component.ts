import { Input, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FetchQueryParam,FetchDataResult } from '../../http';
import { IdentityObject } from '../../../core/model/identity-object.model';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { GridAdapter,GridConfiguration,GridData } from './model';
import { RefreshCollection,ChangeResult } from '../../model';
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
export class GridComponent implements RefreshCollection{ 
    @Input() displayedColumns: GridConfiguration;
    @Input() userAge: number;
    @Input() _crudAdapter:GridAdapter;

    @Input()
    set crudAdapter(crudAdapter:GridAdapter) {
       
            this._crudAdapter = crudAdapter;
            this.load(null);
    }
    get crudAdapter() { return this._crudAdapter; }

    pageSize:number = 40;
    totalCount:number = null;
    resultHttpQuery: GridData =new GridData();
    columnsToDisplay: string[] = [];
    selectedRow:IdentityObject =new IdentityObject();
    pageEvent: PageEvent;

    ngOnInit(){
        if(this.displayedColumns)
            this.columnsToDisplay = this.FillColumnsToDisplay(this.displayedColumns);
    }
    private FillColumnsToDisplay(config:GridConfiguration):string[] {
        let columnsToDisplay = [];
        config.columns.forEach(function (value) {
            columnsToDisplay.push(value.value);
        });

        return columnsToDisplay;
    }
    getAfterFinishChangeItem()
    {
        return this;
    } 
    onPaginate(event?:PageEvent){
        let param: FetchQueryParam = new FetchQueryParam();
        param.countOnPage = event.pageSize;
        param.pageNumber = event.pageIndex+1;
        this.load(param);
     
    }

    clickRow(row:IdentityObject)
    {
        console.log(this.selectedRow);
    }

    deleteItemInCollection(data:ChangeResult)
    {
        if(data !=null){
            this.totalCount--; 
            let removedId =  data.item.id;
            this.resultHttpQuery.items = this.resultHttpQuery.items.filter(item => item.id !== removedId);
          }
    }
    addOrUpdateItemInCollection(data:ChangeResult)
    {
        if(data.item)
        {
            let index = this.resultHttpQuery.items.findIndex(x => x.id ===data.item.id);
            let items = this.resultHttpQuery.items.filter(item => item.id !== data.item.id);
           
            if(index == -1){
                index =0;
                this.totalCount++; 
            }
           
            items.splice(index, 0, data.item);
            this.resultHttpQuery.items = items;

            this.selectedRow = data.item;
        }
    }

    load(param: FetchQueryParam) 
    {
        if(this.crudAdapter){
            this.crudAdapter.loadAsync(param).subscribe((data: FetchDataResult) => {
                this.resultHttpQuery = data.data;
                this.totalCount = data.totalCount;
            });
       }
    }
}
