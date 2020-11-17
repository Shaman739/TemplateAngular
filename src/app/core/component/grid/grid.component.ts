import { Input, Component,ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FetchQueryParam,FetchDataResult,HttpService } from '../../http';
import { IdentityObject } from '../../../core/model/identity-object.model';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { GridOperationResult,GridAdapter,GridConfiguration,GridData } from './model';
@Component({
    selector: 'grid',
    styleUrls: ['grid.css'],
    templateUrl: 'grid.html',
    providers: [HttpService],
    animations: [
        trigger('detailExpand', [
          state('collapsed', style({height: '0px', minHeight: '0'})),
          state('expanded', style({height: '*'})),
          transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
      ],
})
export class GridComponent{ 
    @Input() displayedColumns: GridConfiguration;
    @Input() userAge: number;
    @Input() crudAdapter:GridAdapter;

    pageSize:number = 40;
    totalCount:number = 1000;
    resultHttpQuery: GridData =new GridData();
    columnsToDisplay: string[] = [];
    selectedRow:IdentityObject =new IdentityObject();
    pageEvent: PageEvent;

    constructor(private httpService: HttpService, private changeDetection: ChangeDetectorRef){}
    ngOnInit(){
        if(this.displayedColumns)
            this.columnsToDisplay = this.FillColumnsToDisplay(this.displayedColumns);

        this.Load(null);
       

    }
    private FillColumnsToDisplay(config:GridConfiguration):string[] {
        let columnsToDisplay = [];
        config.columns.forEach(function (value) {
            columnsToDisplay.push(value.value);
        });

        return columnsToDisplay;
    }

    onPaginate(event?:PageEvent){
        let param: FetchQueryParam = new FetchQueryParam();
        param.countOnPage = event.pageSize;
        param.pageNumber = event.pageIndex+1;
        this.Load(param);
     
    }

    clickRow(row:IdentityObject)
    {
        console.log(this.selectedRow);
    }
    editRow()
    {
        this.crudAdapter.edit(this.selectedRow.id);
    }
    deleteRow()
    {
        this.crudAdapter.delete(this.selectedRow.id).subscribe((data: GridOperationResult) => {
          if(data !=null){
            this.totalCount--; 
            let removedId =  data.item.id;
            this.resultHttpQuery.items = this.resultHttpQuery.items.filter(item => item.id !== removedId);
          }
        });
    }
    public AddOrUpdateItem(data:GridOperationResult) { 
        console.log(data);
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
    private Load(param: FetchQueryParam) 
    {
        this.crudAdapter.loadAsync(param).subscribe((data: FetchDataResult) => {
             this.resultHttpQuery = data.data;
             this.totalCount = data.totalCount;
        });
    }
}
