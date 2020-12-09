import { EditParam } from '../../edit-form/model/edit-form.model';
import { ChangeResult } from '../../../model';
export interface EditableDataFormModel
{
    addOrUpdateFormAsync(paramEdit: EditParam) : Promise<ChangeResult>;
}