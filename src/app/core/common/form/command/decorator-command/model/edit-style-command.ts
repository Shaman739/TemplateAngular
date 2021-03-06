import { StyleDescriptionCommand } from './style-description-command.model';
export class EditStyleCommand implements StyleDescriptionCommand
{
    getCssStyle():string
    {
        return "btn-edit";
    }

    getIcon():string
    {
        return "bi bi-pencil";
    }
}