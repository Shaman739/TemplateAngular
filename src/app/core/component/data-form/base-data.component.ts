import { Component} from '@angular/core';
import { EditFormComponent as EditFormComponent, EditServiceParam, EditParam  } from '../edit-form/model/edit-form.model';
import { EditableDataFormModel } from './model/editable-data-form.model'; 
import { ChangeResult } from '../../model';
import { HttpMessageShow } from '../../../core/http/http-message-show';
import { HttpService } from '../../../core/http';

export class BaseDataComponent implements EditFormComponent
{
    protected editableForm : EditableDataFormModel
    constructor(protected url:string)
    {

    }
    private chechExistEditFrom()
    {
        if(!this.editableForm)
         throw "Отсутствует форма.";
    }

    addAsync(): Promise<ChangeResult>
     {
        this.chechExistEditFrom();
        return this.editableForm.addOrUpdateFormAsync(this.getParamForAddOrUpdateItem());
    }
    
    editAsync(param:EditParam): Promise<ChangeResult>
    {
        this.chechExistEditFrom();

        if(!param.id)
            throw "Отсутствует идентификатор записи.";

        let paramEdit = this.getParamForAddOrUpdateItem();
        paramEdit.id = param.id;
    
        return this.editableForm.addOrUpdateFormAsync(paramEdit);
    }
    getParamForAddOrUpdateItem() : EditServiceParam
    {
        if(!this.url)
            throw "Отсутствует форма.";
       
        let paramEdit: EditServiceParam = new EditServiceParam();
        paramEdit.url = this.url;
        
        return paramEdit;
    }
    setEditForm(editFOrm:EditableDataFormModel)
    {
        this.editableForm=editFOrm;
    }
}