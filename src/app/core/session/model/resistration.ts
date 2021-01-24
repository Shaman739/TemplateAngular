import { IdentityObject } from "../../../core/model";
export class Registration extends IdentityObject implements Registration{
    email: string;
    password: string;

}
export interface RegistrationModel{
    email: string;
    password: string;
}