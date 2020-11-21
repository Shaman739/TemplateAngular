import { EditServiceParam } from './edit-form.model';
import { ChangeResult } from '../../../model';
export interface EditableDataFormModel
{
    addOrUpdateFormAsync(paramEdit: EditServiceParam) : Promise<ChangeResult>;
}