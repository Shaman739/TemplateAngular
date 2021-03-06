import { Component, Inject } from '@angular/core';
import { AuthorizeService, ProfileData } from 'src/app/core/session';
import { HttpService } from '../../../../core/http';
import { HttpMessageShow } from '../../../../core/http/http-message-show'; 
@Component({
    selector: 'profile-comp',
    templateUrl: 'profile.component.html',
    providers: [HttpService,HttpMessageShow]
  })
  export class ProfileComponent {
    public profileData:ProfileData = new ProfileData();
    constructor(private authorizeService:AuthorizeService){
        this.authorizeService.profileDataEvent.subscribe(data =>{
            this.profileData = data;
        });
        this.profileData = authorizeService.getProfileInLocalStorage();
    }

}