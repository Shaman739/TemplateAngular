import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from '../../core/session/authorize.service';
@Component({
    selector: 'top-side',
    templateUrl:'top-side.component.html' ,
})
export class TopSideComponent { 

    constructor(private authorizeService:AuthorizeService,private router: Router){}
    logout()
    {
        this.authorizeService.logout().subscribe((result:any)=>{   
            console.log(result);       
            this.router.navigate(['/'], );
        })
        console.log("1231312312");
    }
}
