import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../../core/http';
import { Flat } from '../model'; 
import { ArrayApplyChangesAdapter } from '../../../core/common/form';
import { EditFormModel, EditItemsParam,BaseEditComponent} from '../../../core/component/edit-form';
import { ChangeResult,IdentityObject } from '../../../core/model';
import { GridConfiguration, GridDisplayedColumns } from '../../../core/component/grid';
import { CrudListGridAdapter } from '../../../core/crud-list-grid-adapter';
@Component({
    selector: 'flat-edit-comp',
    templateUrl: 'flat-edit.component.html',
    providers: [HttpService]
  })
  export class FlatEditComponent extends BaseEditComponent<Flat> implements EditFormModel{

    gridConfigurationHouse:GridConfiguration = new GridConfiguration();
    crudAdapterHouse:CrudListGridAdapter;
    constructor(protected httpService: HttpService, public dialogRef: MatDialogRef<FlatEditComponent>, @Inject(MAT_DIALOG_DATA) data: EditItemsParam) {
       super(new Flat(),data,new ArrayApplyChangesAdapter(data.items));
       this.setEditForm(this);

       this.gridConfigurationHouse.columns.push(new GridDisplayedColumns("id","ID"));
       this.gridConfigurationHouse.columns.push(new GridDisplayedColumns("number","Номер"));
      
    }
    
    close(data:ChangeResult)
    {
      this.dialogRef.close(data);
    }
    loadedItem(item:IdentityObject)
    {
      
    }
}