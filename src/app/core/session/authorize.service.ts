import { Injectable } from '@angular/core';
import { Observable,  of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService,CRUDQuery } from '../http/index';
import { AuthorizeServiceModel, ProfileData,Login,Registration } from './model';
import { HttpMessageShow } from '../http/http-message-show';

@Injectable({providedIn: 'root'})
export class AuthorizeService implements AuthorizeServiceModel {


    private profileKey:string = 'profile';
    private isAuthorizeKey:string = 'IsAuthorize';
    constructor( protected httpService: HttpService,private httpMessageShow:HttpMessageShow) {

    }

    public profileDataEvent: Subject<ProfileData> =new Subject<ProfileData>(); 
    private profileData:ProfileData = new ProfileData(); 
    
    login(user:Login) : Observable<ProfileData>{
        
        let CRUDQueryParam:CRUDQuery = new CRUDQuery();
        CRUDQueryParam.item = user;
       
       return  this.httpService.httpPost('/account',CRUDQueryParam).pipe(map(item => {
                 return this.setProfileAterAuthorize(item);
        }));

    }

    logout() : Observable<any>{
       return this.httpService.httpGet("/account/logout",null).pipe(map(data=>{
           console.log(data);
            localStorage.removeItem(this.isAuthorizeKey);
            let emptyProfile:ProfileData = new ProfileData();
            emptyProfile.isAuthorize = false;
            this.setProfileInLocalStorage(emptyProfile);
            this.profileData.isAuthorize = false
            this.refreshAuthrorizeData();
            return of(true);
        }));
           
    }

    registration(user:Registration) : Observable<ProfileData>{
        let CRUDQueryParam:CRUDQuery = new CRUDQuery();
        CRUDQueryParam.item = user;
       
       return  this.httpService.httpPost('/account/registration',CRUDQueryParam).pipe(map(item => {
                return this.setProfileAterAuthorize(item);
        }));
    }
    
    private setProfileAterAuthorize(item:any):ProfileData
    {
        if(item != null){
            localStorage.setItem(this.isAuthorizeKey, 'true');
            this.profileData.isAuthorize = true;
            this.profileData.email = item.email;
            this.setProfileInLocalStorage(this.profileData);
            this.refreshAuthrorizeData();
         }

         return this.profileData;
    }
    private refreshAuthrorizeData()
    {   
        this.profileDataEvent.next(this.profileData);
    }
   
    private setProfileInLocalStorage(profileData:ProfileData)
    {
        localStorage.setItem(this.profileKey,  JSON.stringify(profileData));
    }
    public getProfileInLocalStorage():ProfileData
    {
          
        let profile:ProfileData = JSON.parse(localStorage.getItem(this.profileKey));
       if(!profile)
       {
           profile = new ProfileData();
           profile.isAuthorize = false;
       }

        return profile;
    }

}
