import { IdentityObject } from '../../model/identity-object.model';
import { EditServiceParam } from './model/edit-form.model';
import { EditFormModel } from './model/edit-form.model';
import { HttpServiceModel, CRUDQuery } from '../../http';
import { Observable } from 'rxjs';
export class BaseEditComponent<T extends IdentityObject>
{
  isEdit:boolean = false;
  item:T;
  editForm : EditFormModel;

  constructor(item:T,protected paramEdit:EditServiceParam,protected httpService:HttpServiceModel)
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
  }
  loadItem(id:number)
  {
    this.httpService.httpGet(this.paramEdit.url+'/'+id, null).subscribe((data: any) => {
      if(data != null){
         this.item=data;
         this.isEdit = true;
         this.editForm.loadedItem(this.item);
      }
    });
  }
  ok()
  {
    let CRUDQueryParam:CRUDQuery = new CRUDQuery();
    CRUDQueryParam.item = this.item;
    let query : Observable<any>;
    if(this.isEdit)
      query = this.httpService.httpPut(this.paramEdit.url, CRUDQueryParam);
    else
      query = this.httpService.httpPost(this.paramEdit.url, CRUDQueryParam);
  
    query.subscribe((data: any) => {
        if(data != null){
           this.checkEditForm();
           this.editForm.close(data);
        }
      });
  }
  private checkEditForm()
  {
    if(!this.editForm)
      throw 'Отсутствует форма.';
  }
}