import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../../../core/http';
import { CrudHttpGridAdapter } from '../../../core/crud-http-grid-adapter';
import { FormEditCommand, FormAddCommand,StyleDecoratorCommand } from '../../../core/common/form';
import { EditItemsParam } from '../../../core/component/edit-form';
import { EditableDataFormModel,BaseDataComponent } from '../../../core/component/data-form';
import { ListTemplateConfiguration } from '../../../core/component/list-types';
import { HttpDeleteCommand } from '../../../core/http';
import { ChangeResult } from '../../../core/model';
import { HouseEditComponent } from '../edit-component/house-edit.component';
import { HttpMessageShow } from '../../../core/http/http-message-show';
import { AddStyleCommand,EditStyleCommand,DeleteStyleCommand } from 'src/app/core/common/form/command/decorator-command/model';

@Component({
    selector: 'house-data-list',
    templateUrl: 'house-data-list.component.html',
    providers: [HttpService,HttpMessageShow]
    
})
export class HouseDataListComponent extends BaseDataComponent implements EditableDataFormModel{ 
    constructor(public dialog: MatDialog, private httpService: HttpService) {
      super('/house');
      super.setEditForm(this);

      this.dataListConfiguration.url = this.url;
      this.crudAdapter = new CrudHttpGridAdapter(this.httpService,this.url,this);

      this.dataListConfiguration.listTopMenuCommand.push(new StyleDecoratorCommand(new FormAddCommand(this), new AddStyleCommand()));
      this.dataListConfiguration.listRowCommand.push(new StyleDecoratorCommand(new FormEditCommand(this), new EditStyleCommand()));
      this.dataListConfiguration.listRowCommand.push(new StyleDecoratorCommand(new HttpDeleteCommand(httpService,this.url), new DeleteStyleCommand()));
    }
    dataListConfiguration:ListTemplateConfiguration = new ListTemplateConfiguration();
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
  
  