import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService,ProfileData } from './core/session';
import { HttpService, } from './core/http';
import { HttpMessageShow } from './core/http/http-message-show'
@Component({
    selector: 'my-app',
    templateUrl:'app.component.html' ,
    providers: [AuthorizeService,HttpService,HttpMessageShow]
})
export class AppComponent { 

    public profileData:ProfileData = new ProfileData();
    constructor(private authorizeService:AuthorizeService,private router: Router){
        this.authorizeService.profileDataEvent.subscribe(data =>{
            this.profileData = data;
        });
        this.profileData = authorizeService.getProfileInLocalStorage();
    }
    logout()
    {
        this.authorizeService.logout().subscribe((result:any)=>{   
            this.router.navigate(['/'], );
        });

    }

   
   
}
