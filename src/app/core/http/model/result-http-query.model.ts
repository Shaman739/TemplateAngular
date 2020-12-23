import {Question} from './question.model'
export class ResultHttpQuery{
    isSuccess: boolean;
    message:string;
    data:any;
    question:Array<Question>;
}
