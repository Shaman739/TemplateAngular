import { IdentityObject } from "../../../core/model";
export class Login extends IdentityObject implements LoginModel{
    email: string;
    password: string;

}
export interface LoginModel{
    email: string;
    password: string;
}