import { Component, Inject ,ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService, CRUDQuery } from '../../core/http';
import { House } from './model/house'; 
import { CrudHttpGridAdapter } from '../../core/crud-http-grid-adapter';
import { EditFormModel, EditServiceParam,BaseDataComponent, EditableDataFormModel,BaseEditComponent,FormEditCommand,FormAddCommand } from '../../core/common/form/';
import { GridConfiguration, GridDisplayedColumns } from '../../core/component/grid/';
import { Command } from '../../core/common';
import { HttpDeleteCommand } from '../../core/http';
import { ChangeResult } from '../../core/model';

@Component({
    selector: 'house-comp',
    template: `<grid [displayedColumns] = "gridConfiguration" [crudAdapter]="crudAdapter"></grid>`,
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
    listCommand:Array<Command>;

    addOrUpdateFormAsync(paramEdit: EditServiceParam) : Promise<ChangeResult>
    {
      const promise = new Promise<ChangeResult>((resolve, reject) => {
        const dialogRef = this.dialog.open(HouseEditForm, {
          data: paramEdit   
        });
    
        dialogRef.afterClosed().subscribe(result => {
          resolve(result);
        });
      });
      return promise;
    
    }

   
}
@Component({
    selector: 'house-edit-form',
    templateUrl: 'house-edit-form.html',
    providers: [HttpService]
  })
  export class HouseEditForm extends BaseEditComponent<House> implements EditFormModel{

    constructor(protected httpService: HttpService, public dialogRef: MatDialogRef<HouseEditForm>, @Inject(MAT_DIALOG_DATA) data: EditServiceParam) {
       super(new House(),data,httpService);
       this.setEditForm(this);
    }
    
    close(data:ChangeResult)
    {
      this.dialogRef.close(data);
    }
}

  
  