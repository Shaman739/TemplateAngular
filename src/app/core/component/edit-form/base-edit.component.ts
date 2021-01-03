import { IdentityObject } from '../../model/identity-object.model';
import { EditParam, EditFormModel } from './model/edit-form.model';
import {  CRUDQuery } from '../../http';
import { Observable } from 'rxjs';
import { ApplyChangesAdapter } from '../../common/form/model/apply-changes-adapter.model';
export class BaseEditComponent<T extends IdentityObject>
{
  isEdit:boolean = false;
  item:T;
  editForm : EditFormModel;

  constructor(item:T,protected paramEdit:EditParam,protected applyChangesAdapter:ApplyChangesAdapter)
  {
    this.item = item;
    if(paramEdit.id!=null)
    {
      this.loadItem(paramEdit.id);
    }
      
  }
   
  setEditForm(editForm : EditFormModel)
  {
    this.editForm = editForm;
    this.editForm.loadedItem(this.item);
  }
  loadItem(id:number)
  {
    if(this.applyChangesAdapter!=null)
    {
      this.applyChangesAdapter.getItem(id).subscribe((data: any) => {
        if(data != null){
          this.item=data;
          this.isEdit = true; 
        }
        this.editForm.loadedItem(this.item);
      });
    }
  }
  ok()
  {
      let CRUDQueryParam:CRUDQuery = new CRUDQuery();
      CRUDQueryParam.item = this.item;
     
      let action:Observable<any>;
      if(this.isEdit)
         action = this.applyChangesAdapter.updateItem(CRUDQueryParam)
      else
         action = this.applyChangesAdapter.addItem(CRUDQueryParam);
     
         action.subscribe(item => {
        if(item != null){
          this.checkEditForm();
          this.editForm.close(item);
        }
      });
      
  }
  private checkEditForm()
  {
    if(!this.editForm)
      throw 'Отсутствует форма.';
  }
}


