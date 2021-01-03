import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../../../core/http';
import { CrudHttpGridAdapter } from '../../../core/crud-http-grid-adapter';
import { FormEditCommand, FormAddCommand } from '../../../core/common/form';
import { EditItemsParam } from '../../../core/component/edit-form';
import { EditableDataFormModel,BaseDataComponent } from '../../../core/component/data-form';
import { GridConfiguration, GridDisplayedColumns } from '../../../core/component/grid';
import { HttpDeleteCommand } from '../../../core/http';
import { ChangeResult } from '../../../core/model';
import { HouseEditComponent } from '../edit-component/house-edit.component';
import { HttpMessageShow } from '../../../core/http/http-message-show';

@Component({
    selector: 'house-comp',
    templateUrl: 'house.component.html',
    providers: [HttpService,HttpMessageShow]
    
})
export class HouseComponent extends BaseDataComponent implements EditableDataFormModel{ 
    constructor(public dialog: MatDialog, private httpService: HttpService) {
      super('/house');
      super.setEditForm(this);
      this.gridConfiguration.columns.push(new GridDisplayedColumns("number","Номер"));
      this.gridConfiguration.columns.push(new GridDisplayedColumns("countOfEntrance","Количество подъездов"));
      this.gridConfiguration.columns.push(new GridDisplayedColumns("countOfFloor","Количество зтажей"));
      this.gridConfiguration.url = this.url;
      this.crudAdapter = new CrudHttpGridAdapter(this.httpService,this.url,this);

      this.gridConfiguration.listTopMenuCommand.push(new FormAddCommand(this));
      this.gridConfiguration.listRowCommand.push(new FormEditCommand(this));
      this.gridConfiguration.listRowCommand.push(new HttpDeleteCommand(httpService,this.url));
    }
    gridConfiguration:GridConfiguration = new GridConfiguration();
    crudAdapter:CrudHttpGridAdapter;


    addOrUpdateFormAsync(paramEdit: EditItemsParam) : Promise<ChangeResult>
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
  
  