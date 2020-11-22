import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../../core/http';
import { House } from '../model/house'; 
import { EditFormModel, EditServiceParam,BaseEditComponent } from '../../../core/common/form';
import { ChangeResult } from '../../../core/model';
@Component({
    selector: 'house-edit-comp',
    templateUrl: 'house-edit.component.html',
    providers: [HttpService]
  })
  export class HouseEditComponent extends BaseEditComponent<House> implements EditFormModel{

    constructor(protected httpService: HttpService, public dialogRef: MatDialogRef<HouseEditComponent>, @Inject(MAT_DIALOG_DATA) data: EditServiceParam) {
       super(new House(),data,httpService);
       this.setEditForm(this);
    }
    
    close(data:ChangeResult)
    {
      this.dialogRef.close(data);
    }
}