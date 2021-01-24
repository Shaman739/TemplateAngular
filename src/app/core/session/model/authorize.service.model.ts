import { Observable,Subscriber,Subscription } from 'rxjs';
import {  ProfileData,LoginModel,RegistrationModel } from '../model';
export interface AuthorizeServiceModel
{
    login(user:LoginModel) : Observable<ProfileData>;
    logout() : Observable<any>;
    registration(user:RegistrationModel) : Observable<ProfileData>;
}