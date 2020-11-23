import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../../core/http';
import { House } from '../model/house'; 
import { EditFormModel, EditServiceParam,BaseEditComponent } from '../../../core/common/form';
import { ChangeResult,IdentityObject } from '../../../core/model';
import { GridConfiguration, GridDisplayedColumns } from '../../../core/component/grid';
import { CrudListGridAdapter } from '../../../core/crud-list-grid-adapter';
@Component({
    selector: 'house-edit-comp',
    templateUrl: 'house-edit.component.html',
    providers: [HttpService]
  })
  export class HouseEditComponent extends BaseEditComponent<House> implements EditFormModel{

    gridConfigurationHouse:GridConfiguration = new GridConfiguration();
    crudAdapterHouse:CrudListGridAdapter;
    constructor(protected httpService: HttpService, public dialogRef: MatDialogRef<HouseEditComponent>, @Inject(MAT_DIALOG_DATA) data: EditServiceParam) {
       super(new House(),data,httpService);
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
      this.crudAdapterHouse = new CrudListGridAdapter(this.item.flats);
    }
}