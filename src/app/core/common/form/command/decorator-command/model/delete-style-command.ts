import { StyleDescriptionCommand } from './style-description-command.model';
export class DeleteStyleCommand implements StyleDescriptionCommand
{
    getCssStyle():string
    {
        return "btn-delete";
    }

    getIcon():string
    {
        return "bi bi-trash";
    }
}