import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ,MatDialog } from '@angular/material/dialog';
import { HttpService } from '../../../core/http';
import { House } from '../model'; 
import { FormAddCommand,GridDataArrayAdapter,HttpApplyChangesAdapter,ListDeleteCommand,FormEditCommand } from '../../../core/common/form';
import { EditServiceParam,EditParam,EditFormModel,BaseEditComponent,EditItemsParam } from '../../../core/component/edit-form';
import { EditableDataFormModel } from '../../../core/component/data-form';
import { ChangeResult,IdentityObject } from '../../../core/model';
import { GridConfiguration, GridDisplayedColumns } from '../../../core/component/grid';
import { CrudListGridAdapter } from '../../../core/crud-list-grid-adapter';
import { FlatEditComponent } from '../../flat/edit-component/flat-edit.component';
@Component({
    selector: 'house-edit-comp',
    templateUrl: 'house-edit.component.html',
    providers: [HttpService]
  })
  export class HouseEditComponent extends BaseEditComponent<House> implements EditFormModel, EditableDataFormModel{

    gridConfigurationHouse:GridConfiguration;
    crudAdapterHouse:CrudListGridAdapter;
    dataComponent:GridDataArrayAdapter;
    constructor(public dialog: MatDialog,protected httpService: HttpService, public dialogRef: MatDialogRef<HouseEditComponent>, @Inject(MAT_DIALOG_DATA) data: EditParam) {
       super(new House(),data,new HttpApplyChangesAdapter(httpService,(data as EditServiceParam).url));
       this.setEditForm(this);

    }

    addOrUpdateFormAsync(paramEdit: EditItemsParam) : Promise<ChangeResult>
    {
      paramEdit.items = this.item.flats;
      const promise = new Promise<ChangeResult>((resolve, reject) => {
        const dialogRef = this.dialog.open(FlatEditComponent, {
          data: paramEdit   
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.item.flats.push(result.item);
          resolve(result);
        });
      });
      return promise;
    
    }
    
    close(data:ChangeResult)
    {
      this.dialogRef.close(data);
    }
    loadedItem(item:IdentityObject)
    {
      this.crudAdapterHouse = new CrudListGridAdapter(this.item.flats);
     
      this.dataComponent = new GridDataArrayAdapter(this.item.flats,this);
      this.gridConfigurationHouse = new GridConfiguration();
      this.gridConfigurationHouse.columns.push(new GridDisplayedColumns("id","ID"));
      this.gridConfigurationHouse.columns.push(new GridDisplayedColumns("number","Номер квартиры"));

      this.gridConfigurationHouse.listTopMenuCommand.push(new FormAddCommand(this.dataComponent));
      this.gridConfigurationHouse.listRowCommand.push(new FormEditCommand(this.dataComponent))
      this.gridConfigurationHouse.listRowCommand.push(new ListDeleteCommand(this.item.flats))
    }
}