import {Question} from './question.model'
export class ResultHttpQuery{
    status: string;
    message:string;
    data:any;
    question:Array<Question>;
}
