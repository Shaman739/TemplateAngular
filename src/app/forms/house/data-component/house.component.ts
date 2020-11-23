import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../../../core/http';
import { CrudHttpGridAdapter } from '../../../core/crud-http-grid-adapter';
import { EditServiceParam,BaseDataComponent, EditableDataFormModel, FormEditCommand, FormAddCommand } from '../../../core/common/form';
import { GridConfiguration, GridDisplayedColumns } from '../../../core/component/grid';
import { Command } from '../../../core/common';
import { HttpDeleteCommand } from '../../../core/http';
import { ChangeResult } from '../../../core/model';
import { HouseEditComponent } from '../edit-component/house-edit.component';

@Component({
    selector: 'house-comp',
    templateUrl: 'house.component.html',
    providers: [HttpService]
    
})
export class HouseComponent extends BaseDataComponent implements EditableDataFormModel{ 
    constructor(public dialog: MatDialog, private httpService: HttpService) {
      super('http://localhost:50019/house');
      super.setEditForm(this);
      this.gridConfiguration.columns.push(new GridDisplayedColumns("id","ID"));
      this.gridConfiguration.columns.push(new GridDisplayedColumns("number","Номер"));
      this.gridConfiguration.url = this.url;
      this.crudAdapter = new CrudHttpGridAdapter(this.httpService,this.url,this);


      this.gridConfiguration.listTopMenuCommand.push(new FormAddCommand(this));
      this.gridConfiguration.listRowCommand.push(new FormEditCommand(this));
      this.gridConfiguration.listRowCommand.push(new HttpDeleteCommand(httpService,this.url));
    }
    gridConfiguration:GridConfiguration = new GridConfiguration();
    crudAdapter:CrudHttpGridAdapter;


    addOrUpdateFormAsync(paramEdit: EditServiceParam) : Promise<ChangeResult>
    {
      const promise = new Promise<ChangeResult>((resolve, reject) => {
        const dialogRef = this.dialog.open(HouseEditComponent, {
          data: paramEdit   
        });
    
        dialogRef.afterClosed().subscribe(result => {
          resolve(result);
        });
      });
      return promise;
    
    }

   
}
  
  