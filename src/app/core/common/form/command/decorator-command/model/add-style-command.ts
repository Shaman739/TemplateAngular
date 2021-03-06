import { StyleDescriptionCommand } from './style-description-command.model';
export class AddStyleCommand implements StyleDescriptionCommand
{
    getCssStyle():string
    {
        return "btn-add";
    }

    getIcon():string
    {
        return "bi bi-plus-circle";
    }
}