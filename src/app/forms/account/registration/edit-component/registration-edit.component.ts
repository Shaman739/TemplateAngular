import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../../../../core/http';
import { Registration } from '../../../../core/session'; 

import { HttpMessageShow } from '../../../../core/http/http-message-show'; 
import { Router } from '@angular/router';
import { AuthorizeService } from '../../../../core/session';
@Component({
    selector: 'registration-edit-comp',
    templateUrl: 'registration-edit.component.html',
    providers: [HttpService, HttpMessageShow]
  })
  export class RegistrationComponent{

    item:Registration = new Registration();
    constructor(private router: Router,private authorizeService:AuthorizeService) {

    }

    close()
    {
      this.router.navigate(['/'], );
    }
    ok()
    {
     this.authorizeService.registration(this.item).subscribe(data =>{
       if(data && data.isAuthorize == true)
          this.router.navigate(['/'], );
     });
     
    }
}