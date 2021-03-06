import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../../core/http';
import { Street } from '../model'; 
import { EditFormModel, BaseEditComponent,EditParam} from '../../../core/component/edit-form';
import { ChangeResult,IdentityObject } from '../../../core/model';
import { GridConfiguration, GridDisplayedColumns } from '../../../core/component/grid';
import { CrudListGridAdapter } from '../../../core/crud-list-grid-adapter';
import { HttpMessageShow } from '../../../core/http/http-message-show'; 
import { HttpApplyChangesAdapter } from '../../../core/common/form';
import { EditServiceParam, } from '../../../core/component/edit-form';
import { FormGroup,FormControl, NgForm } from '@angular/forms';
@Component({
    selector: 'street-edit-comp',
    templateUrl: 'street-edit.component.html',
    providers: [HttpService,HttpMessageShow]
  })
  export class StreetEditComponent extends BaseEditComponent<Street> implements EditFormModel{


    crudAdapterHouse:CrudListGridAdapter;
    constructor(protected httpService: HttpService, public dialogRef: MatDialogRef<StreetEditComponent>, @Inject(MAT_DIALOG_DATA) data: EditParam) {
       super(new Street(),data,new HttpApplyChangesAdapter(httpService,(data as EditServiceParam).url));
       this.setEditForm(this);      
    }
    
    close(data:ChangeResult)
    {
      this.dialogRef.close(data);
    }
    loadedItem(item:IdentityObject)
    {
      
    }

    ok2(myForm: NgForm){

      myForm.form.controls['name'].setErrors({'required': true});
      myForm.form.controls['name'].markAsDirty();

      console.log(myForm);
      console.log( myForm.form.controls);
  }
}