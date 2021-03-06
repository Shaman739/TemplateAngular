import { Input, Component } from '@angular/core';
import { FetchQueryParam,FetchDataResult } from '../../http';
import { IdentityObject } from '../../model/identity-object.model';
import { ListTemplateAdapter,ListTemplateConfiguration,ListConfiguration } from './model';
import { RefreshCollection,ChangeResult } from '../../model';
import { ListTemplateData } from './model/list-template-data.model';
@Component({
    template: ''
  })
export abstract class ListTemplateComponent implements RefreshCollection{ 
    @Input() listTemplateConfiguration: ListConfiguration;
    @Input() _crudAdapter:ListTemplateAdapter;

    @Input()
    set crudAdapter(crudAdapter:ListTemplateAdapter) {
       
            this._crudAdapter = crudAdapter;
            this.load(null);
    }
    get crudAdapter() { return this._crudAdapter; }

    pageSize:number = 40;
    totalCount:number = null;
    resultHttpQuery: ListTemplateData =new ListTemplateData();
    selectedRow:IdentityObject =new IdentityObject();


    getAfterFinishChangeItem()
    {
        return this;
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