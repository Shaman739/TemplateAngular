import { IdentityObject } from '../../model';
import { Question } from './question.model';
export class CRUDQuery{
    item: IdentityObject;
    questions : Array<Question>;
}
